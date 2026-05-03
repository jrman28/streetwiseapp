/**
 * STUB: convex/report.ts (Convex Mutations + Actions)
 *
 * Full report generation pipeline:
 *   1. User submits zip code (mutation: initiateReport)
 *   2. Rate limiter checks: free plan = 5/day, pro = unlimited
 *   3. Report row inserted with status "generating"
 *   4. Action scheduled: generateReport (fetches all 6 sources in parallel)
 *   5. Report row updated with status "ready" + data JSON
 *   6. PDF generated and stored (Convex file storage)
 *   7. Report emailed via Resend
 *
 * Stripe:
 *   - Free plan: 5 reports/month, no PDF download, no email branding
 *   - Pro plan ($29/mo): unlimited reports, branded PDF, email delivery,
 *     weekly auto-refresh for saved markets
 *
 * Rate limiting config:
 *   - zipLookup: 10 lookups/min per user (token bucket)
 *   - reportGenerate: 5/day free, burst 2 (fixed window)
 *   - apiAbuse: 100/hour per IP (fixed window, for unauthenticated requests)
 */

import { action, internalAction, internalMutation, mutation, query } from "./_generated/server";
import { RateLimiter, MINUTE, HOUR, DAY } from "@convex-dev/rate-limiter";
import { TableAggregate } from "@convex-dev/aggregate";
import { ShardedCounter } from "@convex-dev/sharded-counter";
import { components } from "./_generated/api";
import { internal } from "./_generated/api";
import { v } from "convex/values";

const rateLimiter = new RateLimiter(components.rateLimiter, {
  zipLookup: { kind: "token bucket", rate: 10, period: MINUTE, capacity: 3 },
  reportGenerateFree: { kind: "fixed window", rate: 5, period: DAY },
  reportGeneratePro: { kind: "token bucket", rate: 100, period: HOUR },
  apiAbuse: { kind: "fixed window", rate: 100, period: HOUR },
});

const reportsByUser = new TableAggregate<{
  Key: number;
  DataModel: import("./schema.stub").DataModel;
  TableName: "reports";
}>(components.reportsByUser, {
  sortKey: (doc) => doc._creationTime,
});

const totalReports = new ShardedCounter(components.shardedCounter, {
  shards: { total: 32 },
});

export const initiateReport = mutation({
  args: {
    zipCode: v.string(),
    emailTo: v.optional(v.string()),
  },
  handler: async (ctx, { zipCode, emailTo }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
    if (!user) throw new Error("User not found");

    const isPro = user.plan === "pro";

    await rateLimiter.limit(ctx, "zipLookup", {
      key: user._id,
      throws: true,
    });

    await rateLimiter.limit(
      ctx,
      isPro ? "reportGeneratePro" : "reportGenerateFree",
      { key: user._id, throws: true },
    );

    const reportId = await ctx.db.insert("reports", {
      userId: user._id,
      zipCode,
      status: "generating",
      emailedTo: emailTo ? [emailTo] : undefined,
    });

    await ctx.scheduler.runAfter(0, internal.report.generateReport, {
      reportId,
      zipCode,
      userId: user._id,
      emailTo,
    });

    return reportId;
  },
});

export const generateReport = internalAction({
  args: {
    reportId: v.id("reports"),
    zipCode: v.string(),
    userId: v.id("users"),
    emailTo: v.optional(v.string()),
  },
  handler: async (ctx, { reportId, zipCode, userId, emailTo }) => {
    try {
      const data = await ctx.runAction(internal.dataSources.fetchAllSourcesCached, {
        zipCode,
      });

      await ctx.runMutation(internal.report.markReady, {
        reportId,
        data,
        generatedAt: Date.now(),
      });

      await ctx.runAction(internal.report.generateAndEmailPdf, {
        reportId,
        data,
        emailTo,
        userId,
      });

      await ctx.runMutation(internal.report.incrementCounters, {
        reportId,
        userId,
      });
    } catch (err) {
      await ctx.runMutation(internal.report.markFailed, { reportId });
      throw err;
    }
  },
});

export const markReady = internalMutation({
  args: {
    reportId: v.id("reports"),
    data: v.any(),
    generatedAt: v.number(),
  },
  handler: async (ctx, { reportId, data, generatedAt }) => {
    await ctx.db.patch(reportId, { status: "ready", data, generatedAt });
    await reportsByUser.insertIfDoesNotExist(ctx, await ctx.db.get(reportId)!);
  },
});

export const markFailed = internalMutation({
  args: { reportId: v.id("reports") },
  handler: async (ctx, { reportId }) => {
    await ctx.db.patch(reportId, { status: "failed" });
  },
});

export const incrementCounters = internalMutation({
  args: { reportId: v.id("reports"), userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    await totalReports.add(ctx, "total", 1);
    const user = await ctx.db.get(userId);
    if (user) {
      await ctx.db.patch(userId, {
        reportsThisMonth: (user.reportsThisMonth ?? 0) + 1,
      });
    }
  },
});

export const generateAndEmailPdf = internalAction({
  args: {
    reportId: v.id("reports"),
    data: v.any(),
    emailTo: v.optional(v.string()),
    userId: v.id("users"),
  },
  handler: async (_ctx, { emailTo }) => {
    /**
     * TODO: PDF generation
     *
     * Options ranked by quality + ease:
     *   1. Puppeteer (headless Chrome) — render the Report React component
     *      as HTML, print to PDF. Best fidelity; matches the mockup exactly.
     *   2. @react-pdf/renderer — pure JS, no Chrome dep, less CSS support.
     *   3. pdfkit — programmatic PDF, full control, most work.
     *
     * PDF is stored in Convex file storage → storageId saved on the report row.
     * Download URL is generated via ctx.storage.getUrl(storageId).
     *
     * TODO: Email via Resend
     *   import { Resend } from "resend";
     *   const resend = new Resend(process.env.RESEND_API_KEY);
     *   await resend.emails.send({
     *     from: "reports@getstreetwise.com",
     *     to: emailTo,
     *     subject: "Your Streetwise Neighborhood Brief",
     *     react: <ReportEmailTemplate data={data} />,
     *     attachments: [{ filename: "report.pdf", content: pdfBuffer }],
     *   });
     */
    void emailTo;
  },
});

export const getReport = query({
  args: { reportId: v.id("reports") },
  handler: async (ctx, { reportId }) => {
    return await ctx.db.get(reportId);
  },
});

export const myReports = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
    if (!user) return [];

    return await ctx.db
      .query("reports")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .take(20);
  },
});

export const totalReportsGenerated = query({
  args: {},
  handler: async (ctx) => {
    return await totalReports.count(ctx, "total");
  },
});
