import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "FlowRiver Technologies | Intelligent SaaS Solutions",
    template: "%s | FlowRiver Technologies",
  },
  description:
    "FlowRiver Technologies builds intelligent software that flows seamlessly into your workflow. Modern SaaS solutions for teams that move fast.",
  keywords: [
    "SaaS",
    "software",
    "technology",
    "workflow",
    "automation",
    "FlowRiver",
  ],
  openGraph: {
    title: "FlowRiver Technologies | Intelligent SaaS Solutions",
    description:
      "Intelligent software that flows seamlessly into your workflow.",
    type: "website",
    locale: "en_US",
    siteName: "FlowRiver Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100vh-4.5rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
