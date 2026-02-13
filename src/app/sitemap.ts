import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/lib/services-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flowrivertech.com";

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
  const staticEntries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
  const serviceSlugs = getServiceSlugs();
  const serviceEntries = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticEntries, ...serviceEntries];
}
