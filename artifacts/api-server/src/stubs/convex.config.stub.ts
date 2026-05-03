/**
 * STUB: convex/convex.config.ts
 *
 * When you wire up Convex as the backend, this file lives at the
 * project root under convex/convex.config.ts (NOT in api-server).
 * The Express api-server will be replaced by — or act as a thin
 * gateway in front of — Convex functions.
 *
 * Install:
 *   npx convex dev
 *   npm install @convex-dev/rate-limiter \
 *               @convex-dev/action-cache \
 *               @convex-dev/aggregate \
 *               @convex-dev/sharded-counter \
 *               @convex-dev/stripe
 *
 * Convex components used:
 *
 *  rateLimiter    — prevent zip-code lookup abuse per user / IP
 *  actionCache    — memoize expensive external API calls per zip (TTL 24h)
 *  aggregate      — track per-user + per-zip report counts, reactive
 *  reportsCounter — sharded counter for the live "X reports generated" stat
 *  stripe         — Pro subscriptions ($29/mo), Checkout, Customer Portal
 */

import { defineApp } from "convex/server";
import rateLimiter from "@convex-dev/rate-limiter/convex.config.js";
import actionCache from "@convex-dev/action-cache/convex.config.js";
import aggregate from "@convex-dev/aggregate/convex.config.js";
import shardedCounter from "@convex-dev/sharded-counter/convex.config.js";
import stripe from "@convex-dev/stripe/convex.config.js";

const app = defineApp();

app.use(rateLimiter);
app.use(actionCache);
app.use(aggregate, { name: "reportsByUser" });
app.use(aggregate, { name: "reportsByZip" });
app.use(shardedCounter);
app.use(stripe);

export default app;
