import { SITE_NAME, SITE_URL } from "@/lib/site-config";

/** Builds the title, description, Open Graph tags and canonical link for a page's head(). */
export function seo({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Websites, Apps & Systems in Accra`;
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
