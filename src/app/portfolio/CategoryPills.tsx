"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = [
  "All",
  "Websites",
  "Systems",
  "E-Commerce",
  "Database",
];

export function CategoryPills() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("category") ?? "All";
  const valid = CATEGORIES.includes(current) ? current : "All";

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
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => select(cat)}
          className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary ${
            valid === cat
              ? "border-primary bg-primary/10 text-primary"
              : "border-border/50 bg-card text-muted-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
