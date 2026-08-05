"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieNotice } from "@/components/CookieNotice";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isKeystatic = pathname?.startsWith("/keystatic");

  if (isKeystatic) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-[calc(100vh-4.5rem)]">
        {children}
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}
