import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { CategoryPills } from "./CategoryPills";
import { cn } from "@/lib/utils";
import {
  getPortfolioProjects,
  portfolioCategories,
  statusLabels,
} from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Websites, systems and event platforms built by FlowRiver Technologies for Tendzu Ventures, The Homecoming Convention, SEALS, SkillsPro, NPSC and others.",
};

type PageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function PortfolioPage({ searchParams }: PageProps) {
  const { category: categoryParam = "All" } = await searchParams;
  const category = (portfolioCategories as readonly string[]).includes(
    categoryParam
  )
    ? categoryParam
    : "All";
  const portfolioProjects = await getPortfolioProjects();
  const filtered =
    category === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects we've built"
        description="Websites, internal systems and event platforms for organisations in Ghana. Each project page covers what we delivered and links to the live site where there is one."
      />

      <Section className="border-t border-border pt-12 sm:pt-12 lg:pt-12">
        <Suspense fallback={null}>
          <CategoryPills />
        </Suspense>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <AnimatedSection key={p.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="surface link-card group flex h-full flex-col overflow-hidden"
              >
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden border-b border-border",
                    p.logoImage &&
                      (p.logoImageDark ? "bg-zinc-950" : "bg-muted/50")
                  )}
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={p.logoImage ? "object-contain p-8" : "object-cover"}
                  />
                  {p.status && p.status !== "live" && (
                    <span
                      className={cn(
                        "absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-medium",
                        p.status === "in-development" &&
                          "border-amber-500/30 bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
                        p.status === "coming-soon" &&
                          "border-border bg-background text-foreground"
                      )}
                    >
                      {statusLabels[p.status]}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium text-muted-foreground">
                    {p.category}
                  </p>
                  <h2 className="mt-1 font-display text-lg font-semibold group-hover:text-primary">
                    {p.shortTitle}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </Section>

      <CTABanner
        title="Have a similar project?"
        description="Tell us what you need and we'll tell you how we'd approach it."
        primaryLabel="Start a project"
        primaryHref="/contact"
      />
    </>
  );
}
