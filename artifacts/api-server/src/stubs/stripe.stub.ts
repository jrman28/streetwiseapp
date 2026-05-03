/**
 * STUB: convex/stripe.ts (Convex HTTP + Mutations)
 *
 * Stripe integration via @convex-dev/stripe component.
 *
 * Plans:
 *   Free  — 5 reports/month, no PDF download, no custom branding
 *   Pro   — $29/mo, unlimited reports, branded PDF, email delivery,
 *            weekly auto-refresh for saved markets, priority queue
 *
 * Flow:
 *   1. User clicks "Upgrade to Pro" (Confirm screen upsell card)
 *   2. Frontend calls createCheckoutSession mutation
 *   3. User is redirected to Stripe Checkout
 *   4. On success, Stripe fires checkout.session.completed webhook
 *   5. Convex webhook handler (registered in convex/http.ts) writes
 *      subscriptions row + patches user.plan = "pro"
 *   6. User lands back in app — plan is already updated reactively
 *
 * Required env vars (Convex Dashboard → Settings → Environment Variables):
 *   STRIPE_SECRET_KEY        sk_test_... or sk_live_...
 *   STRIPE_WEBHOOK_SECRET    whsec_...
 *   STRIPE_PRO_PRICE_ID      price_... (from Stripe Dashboard)
 *
 * Webhook URL to register in Stripe Dashboard:
 *   https://<your-convex-deployment>.convex.site/stripe/webhook
 *
 * Stripe events to subscribe to:
 *   checkout.session.completed
 *   customer.subscription.created
 *   customer.subscription.updated
 *   customer.subscription.deleted
 *   invoice.paid
 *   invoice.payment_failed
 */

import { httpRouter } from "convex/server";
import { mutation, internalMutation, query } from "./_generated/server";
import { components, internal } from "./_generated/api";
import { registerRoutes } from "@convex-dev/stripe";
import { v } from "convex/values";

export const http = httpRouter();

registerRoutes(http, components.stripe, {
  webhookPath: "/stripe/webhook",
  onCheckoutSessionCompleted: internal.stripe.handleCheckoutCompleted,
  onSubscriptionUpdated: internal.stripe.handleSubscriptionUpdated,
  onSubscriptionDeleted: internal.stripe.handleSubscriptionDeleted,
  onInvoicePaymentFailed: internal.stripe.handlePaymentFailed,
});

export const createCheckoutSession = mutation({
  args: {
    returnUrl: v.string(),
  },
  handler: async (ctx, { returnUrl }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
    if (!user) throw new Error("User not found");

    /**
     * @convex-dev/stripe handles:
     *   - Creating or reusing a Stripe Customer for this user
     *   - Creating the Checkout Session with the Pro price
     *   - Returning the session URL for redirect
     */
    const sessionUrl = await ctx.runAction(
      components.stripe.createCheckoutSession,
      {
        priceId: process.env.STRIPE_PRO_PRICE_ID!,
        customerId: user.stripeCustomerId,
        customerEmail: user.email,
        successUrl: `${returnUrl}?checkout=success`,
        cancelUrl: `${returnUrl}?checkout=canceled`,
        metadata: { convexUserId: user._id },
      },
    );

    return sessionUrl;
  },
});

export const createCustomerPortalSession = mutation({
  args: { returnUrl: v.string() },
  handler: async (ctx, { returnUrl }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
    if (!user?.stripeCustomerId) throw new Error("No Stripe customer found");

    return await ctx.runAction(components.stripe.createCustomerPortalSession, {
      customerId: user.stripeCustomerId,
      returnUrl,
    });
  },
});

export const handleCheckoutCompleted = internalMutation({
  args: { session: v.any() },
  handler: async (ctx, { session }) => {
    const convexUserId = session.metadata?.convexUserId;
    if (!convexUserId) return;

    const user = await ctx.db.get(convexUserId);
    if (!user) return;

    await ctx.db.patch(user._id, {
      plan: "pro",
      stripeCustomerId: session.customer,
    });

    const existingSub = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .unique();

    if (!existingSub) {
      await ctx.db.insert("subscriptions", {
        userId: user._id,
        stripeSubscriptionId: session.subscription,
        status: "active",
        plan: "pro",
        currentPeriodEnd: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
        cancelAtPeriodEnd: false,
      });
    }
  },
});

export const handleSubscriptionUpdated = internalMutation({
  args: { subscription: v.any() },
  handler: async (ctx, { subscription }) => {
    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_stripe_subscription_id", (q) =>
        q.eq("stripeSubscriptionId", subscription.id),
      )
      .unique();
    if (!sub) return;

    await ctx.db.patch(sub._id, {
      status: subscription.status,
      currentPeriodEnd: subscription.current_period_end,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
    });

    if (subscription.status === "active") {
      await ctx.db.patch(sub.userId, { plan: "pro" });
    }
  },
});

export const handleSubscriptionDeleted = internalMutation({
  args: { subscription: v.any() },
  handler: async (ctx, { subscription }) => {
    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_stripe_subscription_id", (q) =>
        q.eq("stripeSubscriptionId", subscription.id),
      )
      .unique();
    if (!sub) return;

    await ctx.db.patch(sub._id, { status: "canceled" });
    await ctx.db.patch(sub.userId, { plan: "free" });
  },
});

export const handlePaymentFailed = internalMutation({
  args: { invoice: v.any() },
  handler: async (ctx, { invoice }) => {
    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_stripe_subscription_id", (q) =>
        q.eq("stripeSubscriptionId", invoice.subscription),
      )
      .unique();
    if (!sub) return;

    await ctx.db.patch(sub._id, { status: "past_due" });
  },
});

export const mySubscription = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
    if (!user) return null;

    return await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .unique();
  },
});
