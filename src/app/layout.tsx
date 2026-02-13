import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieNotice } from "@/components/CookieNotice";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flowrivertechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FlowRiver Technologies | Web, UI & Mobile Development Agency",
    template: "%s | FlowRiver Technologies",
  },
  description:
    "FlowRiver Technologies is a design and development agency in Accra, Ghana. We build websites, web and mobile apps, UI/UX design, school and database systems, e-commerce, and AI integrations for businesses and organisations.",
  keywords: [
    "web design",
    "UI design",
    "mobile apps",
    "Ghana",
    "Accra",
    "e-commerce",
    "school management system",
    "FlowRiver",
    "software agency",
  ],
  openGraph: {
    title: "FlowRiver Technologies | Web, UI & Mobile Development Agency",
    description:
      "Design and development agency in Accra — websites, apps, UI/UX, systems, and AI integrations.",
    type: "website",
    locale: "en_US",
    siteName: "FlowRiver Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FlowRiver Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowRiver Technologies | Web, UI & Mobile Development Agency",
    description: "Design and development agency in Accra — websites, apps, UI/UX, systems, and AI integrations.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FlowRiver Technologies",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: "Design and development agency in Accra, Ghana. Websites, web and mobile apps, UI/UX design, school and database systems, e-commerce, and AI integrations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${siteUrl}/contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement,c=localStorage.getItem('theme');if(c==='dark'||(c!='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches))d.classList.add('dark');else d.classList.remove('dark');})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-4.5rem)]">{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
