import type { MetadataRoute } from "next";
import { flagships } from "@/lib/services";
import { publishedPosts } from "@/lib/works";

const BASE_URL = "https://semantify.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/retainers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/works`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/data-protection`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/accessibility`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = flagships.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const workRoutes: MetadataRoute.Sitemap = publishedPosts.map((p) => ({
    url: `${BASE_URL}/works/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes].map((r) => ({
    ...r,
    lastModified: now,
  }));
}
