# CLI Printing Press — Data Source Build Guide

> When you're ready to wire real data into Streetwise, do this first.
> Printing the CLIs before writing any Convex actions means you get
> token-efficient, agent-native binaries instead of raw REST calls.

---

## Why CLI Printing Press

The Printing Press reads official API docs, studies every popular community
CLI and MCP server, sniffs undocumented APIs (like Google Flights or
SpotCrime), and prints a Go CLI + MCP server for any API or website.

Instead of a Convex action navigating full API docs:

```ts
// Without Printing Press — fragile, verbose, token-heavy
const res = await fetch(
  `https://api.greatschools.org/schools/nearby?zip=${zip}&limit=3&key=${key}`
);
const json = await res.json();
// 40 lines of parsing...
```

You get a single compound call:

```bash
greatschools-pp-cli ratings --zip 30318 --levels elementary,middle,high
# → { schools: [{ level: "Elementary", name: "...", score: 7 }, ...] }
```

One call. Structured JSON. No doc hunting. No wasted tokens.

---

## Install CLI Printing Press

```bash
# 1. Install the Go binary
go install github.com/mvanhorn/cli-printing-press/v3/cmd/printing-press@latest

# Verify
printing-press --version

# 2. Install the Claude Code plugin (Option A — recommended)
git clone https://github.com/mvanhorn/cli-printing-press.git
cd cli-printing-press
claude --plugin-dir .          # loads /printing-press slash command
```

---

## Print Each Data Source

Run these commands **before** writing any Convex action code.
Each command produces: a Go CLI binary, an MCP server, research docs,
and a Quality Score.

### 1. GreatSchools — School Ratings

```bash
/printing-press https://greatschools.org
```

**Target compound command:**
```bash
greatschools-pp-cli ratings \
  --zip 30318 \
  --levels elementary,middle,high \
  --limit 3 \
  --format json
```

**Expected output shape:**
```json
{
  "schools": [
    { "level": "Elementary", "name": "Hollis Innovation Academy", "score": 7 },
    { "level": "Middle",     "name": "Inman Middle School",       "score": 8 },
    { "level": "High",       "name": "Grady High School",         "score": 6 }
  ]
}
```

**Convex wiring** (`convex/dataSources.ts`):
```ts
import { execSync } from "node:child_process";

function fetchSchools(zipCode: string) {
  const result = execSync(
    `greatschools-pp-cli ratings --zip ${zipCode} --levels elementary,middle,high --format json`
  );
  return JSON.parse(result.toString()).schools;
}
```

---

### 2. Yelp Fusion — Top Dining

```bash
/printing-press https://docs.developer.yelp.com
```

**Target compound command:**
```bash
yelp-pp-cli search \
  --location 30318 \
  --categories restaurants \
  --sort-by rating \
  --limit 3 \
  --fields name,rating,categories \
  --format json
```

**Expected output shape:**
```json
{
  "businesses": [
    { "name": "Bacchanalia", "rating": 4.7, "category": "Fine Dining" },
    { "name": "Bartaco",     "rating": 4.4, "category": "Casual" },
    { "name": "Eight Sushi", "rating": 4.5, "category": "Japanese" }
  ]
}
```

---

### 3. Walk Score — Walkability / Transit / Bike

```bash
/printing-press https://www.walkscore.com/professional/api.php
```

**Target compound command:**
```bash
walkscore-pp-cli score \
  --zip 30318 \
  --include walk,transit,bike \
  --format json
```

**Expected output shape:**
```json
{
  "walk": 82,
  "transit": 54,
  "bike": 71
}
```

---

### 4. Attom Data — Market Snapshot

```bash
/printing-press https://attomdata.com/solutions/property-api
```

**Target compound command:**
```bash
attom-pp-cli market-snapshot \
  --zip 30318 \
  --fields medianPrice,daysOnMarket,listToSaleRatio,priceChangeYoY \
  --format json
```

**Expected output shape:**
```json
{
  "medianPrice": 485000,
  "daysOnMarket": 28,
  "listToSaleRatio": 1.014,
  "priceChangeYoY": 0.042
}
```

---

### 5. SpotCrime — Crime & Safety ⚠️ Sniff Mode

SpotCrime has **no official public API**. This is a prime candidate for
Printing Press sniff mode — the same technique used for Google Flights
and ESPN's undocumented APIs.

```bash
/printing-press https://spotcrime.com
```

The Printing Press will sniff browser traffic, reconstruct the API,
and print a CLI that queries crime data by zip code.

**Alternative:** FBI Crime Data API (official, free)
```bash
/printing-press https://cde.ucr.fbi.gov/LATEST/webapp/#/pages/docApi
```

**Target compound command:**
```bash
spotcrime-pp-cli index \
  --zip 30318 \
  --relative-to city-avg \
  --format json
```

**Expected output shape:**
```json
{
  "relativeToAvg": -0.18,
  "level": "low",
  "description": "Crime rate 18% below city average"
}
```

---

### 6. Reddit / Sentiment — Use last30days-skill Instead

For community sentiment, skip Printing Press entirely.
**[last30days-skill](https://github.com/mvanhorn/last30days-skill)**
already searches Reddit, X, YouTube, HN, and Polymarket in parallel
with upvote-weighted scoring — exactly what powers the
"What Residents Say" card.

#### Install

```bash
# In Claude Code
/plugin marketplace add mvanhorn/last30days-skill
/plugin install last30days@last30days-skill
```

#### Usage for Streetwise

```bash
/last30days "West Midtown Atlanta neighborhood"
# Searches r/Atlanta, r/AtlantaHousing, X, YouTube, HN simultaneously
# Returns: upvote-ranked posts + citations + 30-day trend summary
```

#### Required env var

```bash
SCRAPECREATORS_API_KEY=   # Covers Reddit + TikTok + Instagram (one key, three sources)
```

#### Wiring into Convex

```ts
// In convex/dataSources.ts
async function fetchSentiment(zipCode: string, neighborhoodName: string) {
  // Call the last30days HTTP endpoint or spawn the skill process
  const query = `${neighborhoodName} neighborhood living`;
  const result = execSync(
    `last30days "${query}" --sources reddit,x,hn --limit 5 --format json`
  );
  return JSON.parse(result.toString());
}
```

The ScrapeCreators API key covers Reddit directly if you want to skip
the skill and call the API inline (see `dataSources.stub.ts`).

---

## Order of Operations

When you're ready to build real data fetching:

```
1. Print CLIs (greatschools, yelp, walkscore, attom, spotcrime)
   → Each print takes ~5 min and produces Go binary + MCP server

2. Install last30days-skill in Claude Code
   → Set SCRAPECREATORS_API_KEY

3. Wire Convex actions to call each CLI via node:child_process
   → See convex/dataSources.stub.ts for the stub functions

4. The action-cache (@convex-dev/action-cache) handles deduplication
   → Same zip queried twice within 24h → zero CLI calls, instant return

5. Rate limiter (@convex-dev/rate-limiter) gates generation
   → Free: 5 reports/day. Pro: 100/hr burst.

6. Run end-to-end: submit zip → all 6 sources in parallel → report ready
```

---

## MCP Server Option

Each Printing Press run also produces an MCP server binary (`<api>-pp-mcp`).
If you wire the MCP servers instead of shell-out CLIs, Claude can call
neighborhood data sources natively as tools — useful for building a
conversational "ask about any neighborhood" interface on top of Streetwise.

```bash
# Start all MCP servers
greatschools-pp-mcp --port 8081
yelp-pp-mcp         --port 8082
walkscore-pp-mcp    --port 8083
attom-pp-mcp        --port 8084
spotcrime-pp-mcp    --port 8085
```

Then in `claude_desktop_config.json`, list each as an MCP server and
Claude can call `get_school_ratings`, `get_dining`, etc. as native tools.

---

## Reference Links

| Resource | URL |
|---|---|
| CLI Printing Press repo | https://github.com/mvanhorn/cli-printing-press |
| Printing Press catalog | https://printingpress.dev |
| last30days-skill | https://github.com/mvanhorn/last30days-skill |
| GreatSchools API | https://greatschools.org/api |
| Yelp Fusion API | https://docs.developer.yelp.com |
| Walk Score API | https://www.walkscore.com/professional/api.php |
| Attom Data API | https://attomdata.com/solutions/property-api |
| SpotCrime | https://spotcrime.com |
| FBI Crime Data API | https://cde.ucr.fbi.gov/LATEST/webapp/#/pages/docApi |
| ScrapeCreators | https://scrapecreators.com |
