import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { statusLabels, type PortfolioProject } from "@/lib/portfolio-types";

export function ProjectCard({
  project,
  className,
}: {
  project: PortfolioProject;
  className?: string;
}) {
  const p = project;
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: p.slug }}
      className={cn(
        "surface link-card group flex h-full flex-col overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border-b border-border",
          p.logoImage && (p.logoImageDark ? "bg-zinc-950" : "bg-white")
        )}
      >
        <img
          src={p.image}
          alt={p.imageAlt}
          loading="lazy"
          decoding="async"
          className={cn(
            "absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105",
            p.logoImage ? "object-contain p-10" : "object-cover"
          )}
        />
        {p.status && p.status !== "live" && (
          <span
            className={cn(
              "absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-medium",
              p.status === "in-development" &&
                "border-amber-500/30 bg-amber-50 text-amber-800",
              p.status === "coming-soon" && "border-border bg-white text-zinc-800"
            )}
          >
            {statusLabels[p.status]}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {p.category}
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold">
          {p.shortTitle}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {p.description}
        </p>
      </div>
    </Link>
  );
}
