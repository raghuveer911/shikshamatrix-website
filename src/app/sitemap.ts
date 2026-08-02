import type { MetadataRoute } from "next";

const BASE_URL = "https://shikshamatrix.in";

// Next.js serves this automatically at /sitemap.xml.
// Add a new entry here every time a new indexable page ships —
// service landing pages, blog posts, comparison pages, etc.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/download`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  // NOTE: /schools/[slug] (each school's own public website) is
  // intentionally NOT included — those pages belong to individual
  // schools, not to ShikshaMatrix's own SEO surface, and there's no
  // public endpoint here to enumerate all active school slugs safely.

  return staticRoutes;
}
