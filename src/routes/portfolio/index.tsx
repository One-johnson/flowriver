import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/data.functions";
import { portfolioCategories } from "@/lib/portfolio-types";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Category = (typeof portfolioCategories)[number];

function isCategory(value: unknown): value is Category {
  return (portfolioCategories as readonly unknown[]).includes(value);
}

export const Route = createFileRoute("/portfolio/")({
  validateSearch: (search: Record<string, unknown>): { category?: Category } =>
    isCategory(search.category) && search.category !== "All"
      ? { category: search.category }
      : {},
  loader: () => getProjects(),
  head: () =>
    seo({
      title: "Work",
      description:
        "Websites, systems and event platforms built by FlowRiver Technologies for CWU Ghana, the Simon Annan Foundation, Goldenmark Ghana, Tendzu Ventures, SEALS, NPSC and others.",
      path: "/portfolio",
    }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const projects = Route.useLoaderData();
  const { category = "All" } = Route.useSearch();
  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects we've built"
        description="Websites, internal systems and event platforms for unions, foundations, conferences and businesses. Each project page covers what we delivered and links to the live site."
      />

      <Section tone="tint" className="pt-12 sm:pt-14 lg:pt-16">
        <nav aria-label="Filter projects" className="flex flex-wrap gap-2">
          {portfolioCategories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            if (count === 0) return null;
            const active = cat === category;
            return (
              <Link
                key={cat}
                to="/portfolio"
                search={cat === "All" ? {} : { category: cat }}
                resetScroll={false}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat}
                <span
                  className={cn(
                    "rounded-full px-1.5 text-xs",
                    active ? "bg-white/20" : "bg-muted"
                  )}
                >
                  {count}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <AnimatedSection key={p.slug} delay={(i % 3) * 0.06}>
              <ProjectCard project={p} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Have a similar project?"
        description="Tell us what you need and we'll tell you how we'd approach it."
        primaryLabel="Start a project"
        primaryTo="/contact"
      />
    </>
  );
}
