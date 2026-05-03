/**
 * STUB: convex/schema.ts
 *
 * Convex database schema for Streetwise.
 * Define tables here; Convex auto-generates TypeScript types and
 * a fully type-safe query/mutation API from this schema.
 *
 * Tables:
 *   users          — one row per authenticated user; tracks plan + Stripe link
 *   reports        — one row per generated report; stores full data JSON
 *   subscriptions  — mirrors Stripe subscription state for real-time reads
 *   savedMarkets   — user-bookmarked zip codes (Settings screen)
 *
 * Indexes are declared inline and enforced by Convex.
 */

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    brokerage: v.optional(v.string()),
    logoUrl: v.optional(v.string()),
    plan: v.union(v.literal("free"), v.literal("pro")),
    reportsThisMonth: v.number(),
    stripeCustomerId: v.optional(v.string()),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_stripe_customer_id", ["stripeCustomerId"]),

  reports: defineTable({
    userId: v.id("users"),
    zipCode: v.string(),
    neighborhood: v.optional(v.string()),
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    status: v.union(
      v.literal("generating"),
      v.literal("ready"),
      v.literal("failed"),
    ),
    data: v.optional(
      v.object({
        schools: v.array(
          v.object({
            level: v.string(),
            name: v.string(),
            score: v.number(),
          }),
        ),
        dining: v.array(
          v.object({
            name: v.string(),
            rating: v.number(),
            category: v.string(),
          }),
        ),
        walkability: v.object({
          walk: v.number(),
          transit: v.number(),
          bike: v.number(),
        }),
        market: v.object({
          medianPrice: v.number(),
          daysOnMarket: v.number(),
          listToSaleRatio: v.number(),
          priceChangeYoY: v.number(),
        }),
        sentiment: v.object({
          posts: v.array(
            v.object({
              text: v.string(),
              source: v.string(),
              upvotes: v.number(),
              daysAgo: v.number(),
            }),
          ),
          alerts: v.array(v.string()),
        }),
        crime: v.object({
          relativeToAvg: v.number(),
          level: v.union(
            v.literal("low"),
            v.literal("medium"),
            v.literal("high"),
          ),
        }),
      }),
    ),
    pdfUrl: v.optional(v.string()),
    emailedTo: v.optional(v.array(v.string())),
    generatedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_zip", ["zipCode"])
    .index("by_user_and_zip", ["userId", "zipCode"]),

  subscriptions: defineTable({
    userId: v.id("users"),
    stripeSubscriptionId: v.string(),
    status: v.union(
      v.literal("active"),
      v.literal("trialing"),
      v.literal("past_due"),
      v.literal("canceled"),
      v.literal("incomplete"),
    ),
    plan: v.union(v.literal("pro")),
    currentPeriodEnd: v.number(),
    cancelAtPeriodEnd: v.boolean(),
  })
    .index("by_user", ["userId"])
    .index("by_stripe_subscription_id", ["stripeSubscriptionId"]),

  savedMarkets: defineTable({
    userId: v.id("users"),
    zipCode: v.string(),
    nickname: v.optional(v.string()),
    addedAt: v.number(),
  }).index("by_user", ["userId"]),
});
