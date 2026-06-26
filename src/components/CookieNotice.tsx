"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "flowriver-cookie-consent";

export function CookieNotice() {
  const [mounted, setMounted] = useState(false);
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setAccepted(stored === "accepted");
    setMounted(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setAccepted(true);
  }

  if (!mounted || accepted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-border/50 bg-background/90 p-4 shadow-2xl backdrop-blur-xl sm:left-auto sm:max-w-lg sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          We use cookies to improve your experience and analyse site traffic. By
          continuing you agree to our{" "}
          <Link href="/privacy" className="font-medium text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <Button size="sm" onClick={accept} className="shrink-0">
          Accept
        </Button>
      </div>
    </div>
  );
}
