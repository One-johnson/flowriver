import type { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { seo } from "@/lib/seo";
import appCss from "@/styles/app.css?url";

const description =
  "FlowRiver Technologies is a design and development studio in Accra, Ghana. We build websites, web and mobile apps, school and database systems, e-commerce sites and AI integrations.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: SITE_EMAIL,
    url: `${SITE_URL}/contact`,
  },
};

// Runs before paint so the page never flashes the wrong theme.
const themeScript = `(function(){var d=document.documentElement,c=localStorage.getItem('theme');if(c==='dark'||(c!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark');else d.classList.remove('dark');})();`;

export const Route = createRootRoute({
  head: () => {
    const base = seo({ description, path: "/" });
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...base.meta,
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:image", content: `${SITE_URL}/og.png` },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE_URL}/og.png` },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", href: "/icon.png", type: "image/png" },
        { rel: "apple-touch-icon", href: "/icon.png" },
      ],
    };
  },
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* suppressHydrationWarning: some browser extensions rewrite inline
            scripts before React hydrates. */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-4.5rem)]">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
