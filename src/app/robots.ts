import type { MetadataRoute } from "next";

const BASE_URL = "https://shikshamatrix.in";

// Next.js serves this automatically at /robots.txt.
//
// IMPORTANT: this explicitly ALLOWS the major AI crawlers (GPTBot,
// ClaudeBot, Google-Extended, PerplexityBot, etc.) — many sites block
// these by accident via a blanket "Disallow: /" or via Cloudflare's
// bot-fight-mode, which quietly kills any chance of being cited by
// ChatGPT/Claude/Perplexity/Google AI Overviews. If Cloudflare is
// fronting this domain, double-check its Bot Fight Mode / Super Bot
// Fight Mode settings don't override this and silently block these
// same user-agents at the edge.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Explicit AI-crawler allowlist — belt and suspenders alongside
      // the wildcard rule above, in case any of these bots ignore "*".
      { userAgent: "GPTBot", allow: "/" },              // OpenAI / ChatGPT
      { userAgent: "ChatGPT-User", allow: "/" },         // ChatGPT browsing plugin
      { userAgent: "ClaudeBot", allow: "/" },            // Anthropic / Claude
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },      // Google's AI training/Gemini crawler
      { userAgent: "PerplexityBot", allow: "/" },        // Perplexity
      { userAgent: "Bingbot", allow: "/" },               // Bing / Copilot
      { userAgent: "Applebot", allow: "/" },              // Siri / Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
