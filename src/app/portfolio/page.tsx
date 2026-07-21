import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { StatsBar } from "@/components/StatsBar";
import { CTABanner } from "@/components/CTABanner";
import { CategoryPills } from "./CategoryPills";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import {
  portfolioProjects,
  portfolioCategories,
  statusLabels,
} from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "FlowRiver Technologies portfolio — websites, systems, and event platforms. Clients include Tendzu Ventures, Homecoming Convention, SEALS, SKILLSPRO, NPSC, and more.",
};

const stats = [
  { value: "5+", label: "Clients served" },
  { value: "5+", label: "Projects delivered" },
  { value: "3", label: "Project types" },
  { value: "100%", label: "Client focus" },
];

type PageProps = {
  searchParams?: Promise<{ category?: string }> | { category?: string };
};

export default async function PortfolioPage(props: PageProps) {
  const params =
    props.searchParams instanceof Promise
      ? await props.searchParams
      : props.searchParams ?? {};
  const categoryParam = params?.category ?? "All";
  const category =
    typeof categoryParam === "string" &&
    (portfolioCategories as readonly string[]).includes(categoryParam)
      ? categoryParam
      : "All";
  const filtered =
    category === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        badge="Portfolio"
        title={
          <>
            Work that{" "}
            <span className="gradient-text">speaks for itself</span>
          </>
        }
        description="A selection of projects we're proud of — websites, systems, and event platforms for organisations across Ghana and beyond."
        image={{
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
          alt: "Portfolio and project work",
        }}
      />

      <StatsBar stats={stats} />

      <Section className="pt-16 sm:pt-20">
        <AnimatedSection className="space-y-12">
          <Suspense fallback={null}>
            <CategoryPills />
          </Suspense>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="glass-card card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div
                    className={cn(
                      "relative aspect-[16/10] overflow-hidden",
                      p.logoImage &&
                        (p.logoImageDark ? "bg-zinc-950" : "bg-muted/60")
                    )}
                  >
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={cn(
                        "transition-transform duration-500 group-hover:scale-105",
                        p.logoImage ? "object-contain p-8" : "object-cover"
                      )}
                    />
                    {p.status && p.status !== "live" && (
                      <div
                        className={cn(
                          "absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md",
                          p.status === "in-development" &&
                            "border border-amber-500/30 bg-amber-500/15 text-amber-700 dark:text-amber-300",
                          p.status === "coming-soon" &&
                            "border border-primary/30 bg-primary/15 text-primary"
                        )}
                      >
                        {statusLabels[p.status]}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <h3 className="font-display text-lg font-bold leading-snug">
                      {p.shortTitle}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/20">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <CTABanner
        className="bg-muted/30"
        title="Want to be our next success story?"
        description="Let's discuss your project and see how FlowRiver can bring your vision to life."
        primaryLabel="Start a project"
        primaryHref="/contact"
      />
    </>
  );
}
