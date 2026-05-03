/**
 * STUB: convex/dataSources.ts (Convex Action)
 *
 * Each external data source runs as a separate Convex action so it can
 * be cached independently via @convex-dev/action-cache.
 *
 * ALL results are keyed by zip code and cached for 24 hours.
 * If the same zip is queried again within that window, the cached
 * result is returned instantly — zero API calls, zero tokens.
 *
 * Data sources:
 *   1. GreatSchools  — school ratings
 *   2. Yelp Fusion   — top dining
 *   3. Walk Score    — walkability / transit / bike
 *   4. Reddit        — community sentiment (via last30days-skill pattern)
 *   5. Attom / MLS   — market snapshot (median price, DOM, YoY change)
 *   6. SpotCrime     — crime index relative to city average
 *
 * CLI Printing Press note:
 *   Before wiring real API clients below, consider printing token-efficient
 *   Go CLIs + MCP servers for each source using CLI Printing Press:
 *
 *     /printing-press https://greatschools.org
 *     /printing-press https://docs.developer.yelp.com
 *     /printing-press https://www.walkscore.com/professional/api.php
 *     /printing-press https://attomdata.com/solutions/property-api
 *     /printing-press https://spotcrime.com
 *
 *   Each printed CLI gives an agent-native binary (e.g. greatschools-pp-cli)
 *   + MCP server so Convex actions can shell out to them without hunting
 *   through API docs. Compound commands like:
 *     greatschools-pp-cli ratings --zip 30318 --levels elementary,middle,high
 *   return structured JSON in one call instead of multiple REST roundtrips.
 *
 *   The Reddit / sentiment source is best served by last30days-skill:
 *     /last30days "West Midtown Atlanta neighborhood"
 *   which searches Reddit, X, HN, and YouTube in parallel and returns a
 *   scored, cited summary — exactly what powers the "What Residents Say" card.
 */

import { action } from "./_generated/server";
import { ActionCache } from "@convex-dev/action-cache";
import { components } from "./_generated/api";
import { v } from "convex/values";

const cache = new ActionCache(components.actionCache, {
  action: "internal.dataSources.fetchAllSources",
  expiration: 1000 * 60 * 60 * 24,
});

export type SchoolResult = {
  level: "Elementary" | "Middle" | "High";
  name: string;
  score: number;
};

export type DiningResult = {
  name: string;
  rating: number;
  category: string;
};

export type WalkabilityResult = {
  walk: number;
  transit: number;
  bike: number;
};

export type MarketResult = {
  medianPrice: number;
  daysOnMarket: number;
  listToSaleRatio: number;
  priceChangeYoY: number;
};

export type SentimentResult = {
  posts: Array<{
    text: string;
    source: string;
    upvotes: number;
    daysAgo: number;
  }>;
  alerts: string[];
};

export type CrimeResult = {
  relativeToAvg: number;
  level: "low" | "medium" | "high";
};

export type StreetWiseData = {
  schools: SchoolResult[];
  dining: DiningResult[];
  walkability: WalkabilityResult;
  market: MarketResult;
  sentiment: SentimentResult;
  crime: CrimeResult;
};

export const fetchAllSources = action({
  args: { zipCode: v.string() },
  handler: async (_ctx, { zipCode }): Promise<StreetWiseData> => {
    const [schools, dining, walkability, market, sentiment, crime] =
      await Promise.all([
        fetchSchools(zipCode),
        fetchDining(zipCode),
        fetchWalkability(zipCode),
        fetchMarket(zipCode),
        fetchSentiment(zipCode),
        fetchCrime(zipCode),
      ]);

    return { schools, dining, walkability, market, sentiment, crime };
  },
});

export const fetchAllSourcesCached = action({
  args: { zipCode: v.string() },
  handler: async (ctx, { zipCode }): Promise<StreetWiseData> => {
    return await cache.fetch(ctx, { zipCode });
  },
});

async function fetchSchools(zipCode: string): Promise<SchoolResult[]> {
  const apiKey = process.env.GREATSCHOOLS_API_KEY;
  if (!apiKey) throw new Error("GREATSCHOOLS_API_KEY not set");

  const url = `https://api.greatschools.org/schools/nearby?zip=${zipCode}&limit=3&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GreatSchools ${res.status}`);

  const json = await res.json();

  return (json.schools ?? []).slice(0, 3).map(
    (s: { levelCode: string; name: string; rating: number }) => ({
      level: levelLabel(s.levelCode),
      name: s.name,
      score: s.rating ?? 0,
    }),
  );
}

async function fetchDining(zipCode: string): Promise<DiningResult[]> {
  const apiKey = process.env.YELP_API_KEY;
  if (!apiKey) throw new Error("YELP_API_KEY not set");

  const url = `https://api.yelp.com/v3/businesses/search?location=${zipCode}&categories=restaurants&sort_by=rating&limit=3`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) throw new Error(`Yelp ${res.status}`);

  const json = await res.json();

  return (json.businesses ?? []).slice(0, 3).map(
    (b: { name: string; rating: number; categories: Array<{ title: string }> }) => ({
      name: b.name,
      rating: b.rating,
      category: b.categories?.[0]?.title ?? "Restaurant",
    }),
  );
}

async function fetchWalkability(zipCode: string): Promise<WalkabilityResult> {
  const apiKey = process.env.WALKSCORE_API_KEY;
  if (!apiKey) throw new Error("WALKSCORE_API_KEY not set");

  const url = `https://api.walkscore.com/score?format=json&address=${zipCode}&wsapikey=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`WalkScore ${res.status}`);

  const json = await res.json();

  return {
    walk: json.walkscore ?? 0,
    transit: json.transit?.score ?? 0,
    bike: json.bike?.score ?? 0,
  };
}

async function fetchMarket(zipCode: string): Promise<MarketResult> {
  const apiKey = process.env.ATTOM_API_KEY;
  if (!apiKey) throw new Error("ATTOM_API_KEY not set");

  const url = `https://api.gateway.attomdata.com/propertyapi/v1.0.0/sale/snapshot?postalcode=${zipCode}`;
  const res = await fetch(url, {
    headers: { apikey: apiKey, Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Attom ${res.status}`);

  const json = await res.json();
  const summary = json.summary?.[0] ?? {};

  return {
    medianPrice: summary.medSaleAmt ?? 0,
    daysOnMarket: summary.avgDom ?? 0,
    listToSaleRatio: summary.medListToSalePctg ?? 1,
    priceChangeYoY: summary.medSaleAmtChgPct ?? 0,
  };
}

async function fetchSentiment(zipCode: string): Promise<SentimentResult> {
  /**
   * TODO: integrate last30days-skill pattern.
   *
   * The /last30days skill searches Reddit, X, YouTube, HN, and Polymarket
   * in parallel and returns upvote-ranked posts with citations.
   *
   * For Streetwise, the query will be something like:
   *   `/last30days "{neighborhood name} {city} neighborhood living"``
   *
   * Env var needed: SCRAPECREATORS_API_KEY (covers Reddit + TikTok + Instagram)
   *
   * API docs: https://github.com/mvanhorn/last30days-skill
   */
  const apiKey = process.env.SCRAPECREATORS_API_KEY;
  if (!apiKey) {
    return { posts: [], alerts: [`SCRAPECREATORS_API_KEY not set for ${zipCode}`] };
  }

  const redditUrl = `https://api.scrapecreators.com/v1/reddit/search?query=${encodeURIComponent(zipCode + " neighborhood")}&limit=5`;
  const res = await fetch(redditUrl, {
    headers: { "x-api-key": apiKey },
  });
  if (!res.ok) throw new Error(`ScrapeCreators ${res.status}`);

  const json = await res.json();

  return {
    posts: (json.posts ?? []).slice(0, 3).map(
      (p: { selftext?: string; title: string; subreddit: string; score: number; created_utc: number }) => ({
        text: p.selftext || p.title,
        source: `r/${p.subreddit}`,
        upvotes: p.score,
        daysAgo: Math.floor((Date.now() / 1000 - p.created_utc) / 86400),
      }),
    ),
    alerts: [],
  };
}

async function fetchCrime(zipCode: string): Promise<CrimeResult> {
  /**
   * TODO: SpotCrime or local PD open data.
   * SpotCrime has no official public API — candidate for CLI Printing Press.
   *   /printing-press https://spotcrime.com
   * Alternatively use:
   *   - FBI Crime Data API (https://cde.ucr.fbi.gov/LATEST/webapp/#/pages/docApi)
   *   - Neighborhoodscout (paid)
   */
  void zipCode;
  return { relativeToAvg: -0.18, level: "low" };
}

function levelLabel(code: string): "Elementary" | "Middle" | "High" {
  if (code.includes("e")) return "Elementary";
  if (code.includes("m")) return "Middle";
  return "High";
}
