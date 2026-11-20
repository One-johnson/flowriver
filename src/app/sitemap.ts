import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/lib/services-data";
import { getPortfolioSlugs } from "@/lib/portfolio-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flowrivertechnologies.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const [serviceSlugs, portfolioSlugs] = await Promise.all([
    getServiceSlugs(),
    getPortfolioSlugs(),
  ]);
  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const portfolioEntries: MetadataRoute.Sitemap = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticEntries, ...serviceEntries, ...portfolioEntries];
}
