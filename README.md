# Streetwise — AI-Powered Neighborhood Intelligence for Real Estate Agents

> Know the neighborhood before your client asks.

Streetwise generates a one-page AI-powered neighborhood intelligence report from a zip code in under 60 seconds — covering schools, dining, walkability, market data, and real Reddit sentiment. Built for real estate agents who need to answer neighborhood questions on the spot, without spending 30 minutes researching across six different tabs.

---

## Table of Contents

1. [What It Does](#what-it-does)
2. [Design Philosophy](#design-philosophy)
3. [App Screens](#app-screens)
4. [Social Assets](#social-assets)
5. [Product Teaser Video](#product-teaser-video)
6. [Integration Architecture](#integration-architecture)
7. [Data Sources](#data-sources)
8. [Tech Stack](#tech-stack)
9. [Development Setup](#development-setup)
10. [Project Structure](#project-structure)

---

## What It Does

An agent enters a zip code. Streetwise hits six data sources in parallel, assembles a structured report, and delivers it as a shareable PDF via email — branded with the agent's name and brokerage. The report covers:

| Section | Source | What it answers |
|---|---|---|
| Schools | GreatSchools API | Elementary / middle / high ratings out of 10 |
| Top Dining | Yelp Fusion API | Top-rated restaurants by category |
| Walkability | Walk Score API | Walk / transit / bike scores |
| Market Snapshot | Attom / MLS | Median price, days on market, list-to-sale ratio, YoY change |
| What Residents Say | Reddit via last30days-skill | Upvote-ranked community sentiment from r/cityname subreddits |
| Crime & Safety | SpotCrime / FBI Crime API | Crime rate relative to city average, severity level |

Reports are cached per zip code for 24 hours so repeat lookups are instant and don't consume API quota.

---

## Design Philosophy

Streetwise uses a custom design system called **"Notion Beige"** — a calm, editorial aesthetic that feels trustworthy and premium without being corporate. Every design decision follows the 14 principles from [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better).

### Color Tokens (`_group.css`)

| Token | Value | Usage |
|---|---|---|
| `--nb-bg` | `#F7F5F0` | Page background — warm parchment |
| `--nb-surface` | `#FFFEF9` | Card surfaces — slightly lighter |
| `--nb-text` | `#1A1814` | Primary text — near-black warm |
| `--nb-muted` | `#9B8E7E` | Secondary labels, captions |
| `--nb-accent` | `#D97706` | Amber — CTAs, scores, highlights |
| `--nb-accent-light` | `#FEF3C7` | Amber tint — badge backgrounds |
| `--nb-border` | `#E8E4DC` | Dividers and card borders |
| `--nb-success` | `#059669` | Positive indicators (growth, low crime) |

### Typography

- **Playfair Display** — headings and zip code displays. Conveys intelligence and editorial quality.
- **Inter** — body copy, labels, numbers. Crisp and legible at small sizes.

### The 14 Principles Applied

1. **Concentric border radius** — inner button radius = outer container radius minus padding gap. The submit arrow in the zip input uses `border-radius: 4px` because the input is `border-radius: 12px` with 8px padding between them.
2. **Optical alignment** — icons inside buttons are nudged visually, not geometrically.
3. **Layered shadows** — all cards use two-layer `box-shadow`: a tight shadow for form + a soft spread for depth.
4. **Explicit transitions** — `transition-property` is always named (`transform`, `box-shadow`), never `all`.
5. **Staggered entrance animations** — 6 semantic stagger classes, 80ms apart, 10px `translateY` rise.
6. **Icon transitions** — state-change icons animate via `opacity`, `scale`, and `blur` simultaneously.
7. **Button press feedback** — all interactive buttons use exactly `scale(0.96)` on active, never 0.95 or 0.98.
8. **Text wrapping** — headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
9. **Crisp text** — `-webkit-font-smoothing: antialiased` on every screen container.
10. **Tabular numbers** — `font-variant-numeric: tabular-nums` on all scores, prices, and timestamps.
11. **Hit areas** — every tappable element has a minimum 40×40px touch target.
12. **Layered shadows** — no flat `border` tricks; actual `box-shadow` that adapts to any background.
13. **Layout safety** — sticky footers use flex-column layout (footer outside the scroll area), never `position: fixed` inside an iframe.
14. **Semantic animation** — keyframe animations for staged sequences; CSS transitions for interactive state changes.

---

## App Screens

All screens are built as isolated mockup components in `artifacts/mockup-sandbox/src/components/mockups/neighborhood-flow/`. Each is a standalone React component with no external state dependencies, rendering correctly at 390×844px (iPhone 15 Pro viewport).

### 1 — Landing (`Landing.tsx`)
The entry point. An agent sees the Streetwise wordmark, a persuasive headline, the zip code input with an inline submit arrow, a social proof line ("Used by 2,400+ agents across 38 states"), and four feature chips (Schools, Dining, Walkability, Reddit Says). The page is a flex column: wordmark at top, content vertically centered, trial note pinned at bottom.

**Key interactions:**
- Zip input: `border-radius: 12px`, amber arrow button at `border-radius: 4px` (concentric rule)
- Submit arrow: `active:scale(0.96)` press feedback
- All content reveals via stagger-in animations (stagger-1 through stagger-6)

### 2 — Generating (`Generating.tsx`)
Displays while the six data sources are being fetched in parallel. Shows each source as a row with its status: **Done** (green check), **Scanning…** (pulsing amber dot), or **Queued** (grey dot, 55% opacity). A progress bar at the bottom animates from 0% to completion. The background pulses subtly via `animate-subtle-pulse-bg`.

**Key details:**
- Source rows are data-driven from a `sources` array — easy to add/remove sources
- Queued rows use `opacity: 0.55` and `transition: opacity 0.3s ease` for future real-time updates
- The zip code chip is rendered as an amber pill above the headline

### 3 — Neighborhood Brief / Report (`Report.tsx`)
The core deliverable. A scrollable card-based layout with a pinned header (back arrow + centered title + share icon) and a pinned footer (Email button). The scroll area contains six data cards stacked vertically.

**Layout architecture:** `height: 100dvh` flex column — header `shrink-0`, content `flex-1 overflow-y-auto`, footer `shrink-0`. This avoids all `position: fixed` issues inside iframes.

**Cards:**
- **Schools** — three rows with school name, level label, amber progress bar, and `X/10` score
- **Top Dining** — name, amber star rating, category type
- **Walkability** — three score circles (green/amber/blue border), labeled Walk / Transit / Bike
- **Market Snapshot** — table rows: median price + YoY indicator, days on market, list-to-sale ratio
- **What Residents Say** — two Reddit quote cards (italic, source link, upvote count) + an alert banner for flagged threads
- **Crime & Safety** — relative crime stat + a three-segment severity indicator

### 4 — Confirmation (`Confirm.tsx`)
Shown after a report is emailed. A rounded-square success icon (green, layered shadow), a "Report sent!" Playfair headline, the recipient email address, a ghost "Generate another" button, and an upsell card for the Pro subscription ($29/mo weekly auto-refresh). Footer is pinned with `Streetwise · getstreetwise.com`.

**Upsell card:** The amber card uses `border-radius: 18px`; the upgrade button inside uses `border-radius: 6px` — the concentric rule applied: 18px outer − 12px padding gap = 6px inner.

### 5 — Settings (`Settings.tsx`)
Agent profile management. Pinned header with back arrow and Save button (both ≥40px hit targets). Scrollable sections: Profile (avatar with camera badge, three inputs), Report Branding (byline, logo upload, preview banner), Delivery (email toggle), Saved Markets (pill tags with ×), Subscription (card table with plan/billing/manage). Sign Out at the bottom in red.

### 6 — Sign In / Auth (`Login.tsx`)
Centered Streetwise wordmark, big Playfair headline ("Know every neighborhood."), Google/Apple OAuth buttons with layered shadows, an email + magic link option. Footer is pinned outside the scroll area with a "New to Streetwise? Join the waitlist" link.

---

## Social Assets

All social assets are in `artifacts/mockup-sandbox/src/components/mockups/streetwise-social/`. Each renders at its platform's exact native size so it can be screenshotted at 1:1 and uploaded directly.

### Instagram Post (`Instagram.tsx`) — 1080×1080px
Dark amber version of the brand. A large Playfair headline ("Your clients deserve to know the neighborhood.") on the left, a stacked mock report card visual on the right. Feature pills at the bottom. Sized for square feed posts.

### Twitter / X Card (`TwitterCard.tsx`) — 1200×628px
Wide landscape format for link preview cards. Hero headline left-aligned, a condensed version of the report data on the right (school bar, walkability circles, market price). Domain pill bottom-right.

### Instagram Story (`Story.tsx`) — 1080×1920px
Vertical 9:16 format. Full-height beige background, large centered Playfair headline, a tall mock report card, swipe-up CTA button in amber.

### LinkedIn Post (`LinkedIn.tsx`) — 600×315px
Compact landscape. Left column: pill label + Playfair headline + descriptor + three stats (agents / states / avg time). Right column: three stacked, fading report card mocks for "30318", "90210", "10001". Domain pill bottom-right. Uses inline styles throughout to avoid Tailwind cascade issues with the fixed dimensions.

---

## Product Teaser Video

Built in `artifacts/streetwise-video/` using React + CSS animations. A 31-second, five-scene teaser:

| Scene | Duration | Content |
|---|---|---|
| Open | 6s | Brand reveal — Streetwise wordmark fades in on parchment |
| Problem | 6s | Pain point — "Your client just asked about the schools. You don't know." |
| Solution | 8s | Value prop — zip code input, 60-second promise |
| Product | 6s | Animated report preview — cards reveal sequentially |
| Close | 5s | CTA — "Get early access · getstreetwise.com" |

Scene controls (`VideoWithControls.tsx`, `useSceneControls.ts`) allow jumping between scenes during development. `SCENE_DURATIONS` is exported from `VideoTemplate.tsx` for reuse.

---

## Integration Architecture

All integration stubs live in `artifacts/api-server/src/stubs/`. When moving to production, these files become the `convex/` directory at the project root.

### Convex Backend (`convex.config.stub.ts`)

Streetwise uses five Convex components:

| Component | npm Package | Purpose in Streetwise |
|---|---|---|
| Rate Limiter | `@convex-dev/rate-limiter` | Free plan: 5 reports/day. Pro: 100/hr. IP-level abuse protection. |
| Action Cache | `@convex-dev/action-cache` | Cache all 6 data source API calls per zip for 24 hours |
| Aggregate (×2) | `@convex-dev/aggregate` | Reactive report counts per user and per zip code |
| Sharded Counter | `@convex-dev/sharded-counter` | Live "X,XXX reports generated" total — 32 shards for high throughput |
| Stripe | `@convex-dev/stripe` | Pro subscription ($29/mo), Checkout Sessions, Customer Portal, webhooks |

### Stripe Payments (`stripe.stub.ts`)

Two plan tiers:

- **Free** — 5 reports/month, no PDF download, no custom branding
- **Pro ($29/mo)** — unlimited reports, branded PDF, email delivery, weekly auto-refresh for saved markets, priority generation queue

Webhook events handled: `checkout.session.completed`, `customer.subscription.updated/deleted`, `invoice.payment_failed`.

### Database Schema (`schema.stub.ts`)

Four tables: `users`, `reports`, `subscriptions`, `savedMarkets`. All indexed for the query patterns used in the app.

### Report Pipeline (`report.stub.ts`)

```
User submits zip
  → rate-limit check (per user + plan tier)
  → insert report row (status: "generating")
  → schedule generateReport action
    → fetchAllSourcesCached (action-cache per zip, 24h TTL)
      → parallel: schools + dining + walkability + market + sentiment + crime
    → patch report row (status: "ready", data: {...})
    → generate PDF (Puppeteer → Convex file storage)
    → send email (Resend + branded React template)
    → increment sharded counter + user.reportsThisMonth
```

---

## Data Sources

| Source | API | CLI Printing Press candidate |
|---|---|---|
| School ratings | GreatSchools API | `/printing-press https://greatschools.org` |
| Top dining | Yelp Fusion API | `/printing-press https://docs.developer.yelp.com` |
| Walkability | Walk Score API | `/printing-press https://walkscore.com/professional/api.php` |
| Market data | Attom Data API | `/printing-press https://attomdata.com/solutions/property-api` |
| Community sentiment | Reddit via [last30days-skill](https://github.com/mvanhorn/last30days-skill) | Native skill — covers Reddit, X, YouTube, HN in parallel |
| Crime & safety | SpotCrime (no official API) | `/printing-press https://spotcrime.com` (sniff mode) |

The [CLI Printing Press](https://github.com/mvanhorn/cli-printing-press) can generate a token-efficient Go binary + MCP server for each source. Instead of navigating full API docs, Convex actions shell out to e.g. `greatschools-pp-cli ratings --zip 30318` and receive structured JSON in one call. SpotCrime, which has no official API, is a prime candidate for the sniff mode the Printing Press used for Google Flights and ESPN.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Monorepo | pnpm workspaces |
| Mockup sandbox | React + Vite + Tailwind CSS |
| API server | Express + TypeScript (gateway, to be replaced by Convex) |
| Backend (planned) | Convex (real-time database + serverless functions) |
| Payments (planned) | Stripe via `@convex-dev/stripe` |
| Auth (planned) | Clerk (sign in with Google / Apple / magic link) |
| PDF generation (planned) | Puppeteer (headless Chrome rendering the Report component) |
| Email (planned) | Resend |
| Sentiment data | ScrapeCreators API (Reddit/TikTok/Instagram) via last30days-skill |

---

## Development Setup

```bash
# Install dependencies
pnpm install

# Run the mockup sandbox (all screen + social asset previews)
pnpm --filter @workspace/mockup-sandbox run dev
# Preview at: http://localhost:<PORT>/__mockup/preview/neighborhood-flow/Landing

# Run the API server
pnpm --filter @workspace/api-server run dev

# Run the product teaser video
pnpm --filter @workspace/streetwise-video run dev
```

### Environment Variables Needed (when wiring real integrations)

```bash
# Data sources
GREATSCHOOLS_API_KEY=
YELP_API_KEY=
WALKSCORE_API_KEY=
ATTOM_API_KEY=
SCRAPECREATORS_API_KEY=      # covers Reddit + TikTok + Instagram

# Convex
CONVEX_DEPLOYMENT=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRO_PRICE_ID=

# Email
RESEND_API_KEY=
```

---

## Project Structure

```
.
├── artifacts/
│   ├── api-server/                    # Express gateway (TypeScript)
│   │   └── src/
│   │       ├── stubs/                 # Integration stubs (Convex, Stripe, data sources)
│   │       │   ├── convex.config.stub.ts
│   │       │   ├── schema.stub.ts
│   │       │   ├── dataSources.stub.ts
│   │       │   ├── report.stub.ts
│   │       │   └── stripe.stub.ts
│   │       └── routes/
│   ├── mockup-sandbox/                # All UI mockups (React + Vite)
│   │   └── src/components/mockups/
│   │       ├── neighborhood-flow/     # App screens
│   │       │   ├── _group.css        # Design tokens + animation keyframes
│   │       │   ├── Landing.tsx       # Screen 1 — zip code entry
│   │       │   ├── Generating.tsx    # Screen 2 — live data fetch progress
│   │       │   ├── Report.tsx        # Screen 3 — the neighborhood brief
│   │       │   ├── Confirm.tsx       # Screen 4 — email sent + upsell
│   │       │   ├── Settings.tsx      # Screen 5 — agent profile + branding
│   │       │   └── Login.tsx         # Screen 6 — auth (Google/Apple/magic link)
│   │       ├── streetwise-social/    # Social media assets
│   │       │   ├── Instagram.tsx     # 1080×1080 feed post
│   │       │   ├── TwitterCard.tsx   # 1200×628 link card
│   │       │   ├── Story.tsx         # 1080×1920 Instagram story
│   │       │   └── LinkedIn.tsx      # 600×315 LinkedIn post image
│   │       └── streetwise-waitlist/
│   │           └── Waitlist.tsx      # Desktop landing / waitlist page
│   └── streetwise-video/             # Product teaser video (React)
│       └── src/components/video/
│           ├── VideoTemplate.tsx     # 5-scene animation (open/problem/solution/product/close)
│           ├── VideoWithControls.tsx # Dev wrapper with scene jump controls
│           └── scenes/              # Individual scene components
└── replit.md                        # Project memory / architecture notes
```

---

## Social Assets Reference

| Asset | File | Platform | Size | Format |
|---|---|---|---|---|
| Feed post | `Instagram.tsx` | Instagram | 1080×1080 | Square |
| Link card | `TwitterCard.tsx` | X / Twitter | 1200×628 | Landscape |
| Story | `Story.tsx` | Instagram Stories | 1080×1920 | Portrait 9:16 |
| Article image | `LinkedIn.tsx` | LinkedIn | 600×315 | Landscape |

To export as PNG: screenshot each component at its native viewport size (the mockup sandbox serves each at its correct pixel dimensions), or use Puppeteer to headlessly render and capture.

---

*Built with the [CLI Printing Press](https://github.com/mvanhorn/cli-printing-press) methodology in mind — every external API will have a token-efficient CLI + MCP server so AI agents can query neighborhood data without hunting through docs.*
