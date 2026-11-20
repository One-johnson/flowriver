import { createFileRoute } from "@tanstack/react-router";
import { getServiceSlugs } from "@/lib/services-data";
import { getPortfolioSlugs } from "@/lib/portfolio-data";
import { SITE_URL } from "@/lib/site-config";

const staticPaths = ["/", "/about", "/services", "/portfolio", "/contact", "/privacy", "/terms"];

async function buildSitemap() {
  const [serviceSlugs, portfolioSlugs] = await Promise.all([
    getServiceSlugs(),
    getPortfolioSlugs(),
  ]);
  const paths = [
    ...staticPaths,
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...portfolioSlugs.map((slug) => `/portfolio/${slug}`),
  ];
  const urls = paths
    .map((path) => `  <url><loc>${SITE_URL}${path === "/" ? "" : path}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(await buildSitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
