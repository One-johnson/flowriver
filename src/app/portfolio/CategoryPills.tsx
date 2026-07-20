"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { portfolioCategories } from "@/lib/portfolio-data";

export function CategoryPills() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("category") ?? "All";
  const valid = portfolioCategories.includes(
    current as (typeof portfolioCategories)[number]
  )
    ? current
    : "All";

  function select(category: string) {
    const next = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      next.delete("category");
    } else {
      next.set("category", category);
    }
    const q = next.toString();
    router.push(q ? `?${q}` : "/portfolio");
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {portfolioCategories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => select(cat)}
          className={cn(
            "inline-flex items-center rounded-full border px-5 py-2 text-sm font-medium transition-all",
            valid === cat
              ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20"
              : "border-border/50 bg-card/60 text-muted-foreground backdrop-blur-sm hover:border-primary/30 hover:text-primary"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
