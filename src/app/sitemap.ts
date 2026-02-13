import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/lib/services-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flowrivertechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/team",
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
  const serviceSlugs = getServiceSlugs();
  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticEntries, ...serviceEntries];
}
