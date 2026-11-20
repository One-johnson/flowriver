import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Globe,
} from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { FlowLines } from "@/components/FlowLines";
import { RelatedProjectsCarousel } from "@/components/RelatedProjectsCarousel";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { getProject } from "@/lib/data.functions";
import { statusLabels } from "@/lib/portfolio-types";
import { RESPONSE_TIME } from "@/lib/site-config";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => getProject({ data: params.slug }),
  head: ({ loaderData, params }) =>
    loaderData
      ? seo({
          title: loaderData.project.title,
          description: loaderData.project.description,
          path: `/portfolio/${params.slug}`,
        })
      : {},
  component: PortfolioDetailPage,
});

function PortfolioDetailPage() {
  const { project, related } = Route.useLoaderData();
  const status = project.status ?? "live";

  return (
    <>
      <Section tone="ink" className="overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-20">
        <FlowLines className="opacity-60" />
        <div className="relative">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection className="max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow">{project.category}</span>
                {status !== "live" && (
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium",
                      status === "in-development" &&
                        "border-amber-500/30 bg-amber-50 text-amber-800",
                      status === "coming-soon" && "border-border"
                    )}
                  >
                    {statusLabels[status]}
                  </span>
                )}
              </div>
              <h1 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <div>
                  <dt className="text-muted-foreground">Client</dt>
                  <dd className="font-medium">{project.client}</dd>
                </div>
                {project.year && project.year !== "—" && (
                  <div>
                    <dt className="text-muted-foreground">Year</dt>
                    <dd className="font-medium">{project.year}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.clientUrl && (
                  <Button asChild size="lg">
                    <a
                      href={project.clientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit live site
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    Start a similar project
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div
                className={cn(
                  "relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl shadow-black/30 lg:max-w-none",
                  project.logoImageDark ? "bg-zinc-950" : "bg-white"
                )}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  fetchPriority="high"
                  className={cn(
                    "absolute inset-0 h-full w-full",
                    project.logoImage ? "object-contain p-12" : "object-cover"
                  )}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              About this project
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-xl bg-tint p-7">
              <h3 className="font-display text-lg font-semibold">
                What I delivered
              </h3>
              <ul className="mt-5 space-y-3.5">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {project.clientUrl && (
                <a
                  href={project.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Globe className="h-4 w-4" />
                  {project.clientUrl.replace(/^https?:\/\//, "")}
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="tint">
          <SectionHeader eyebrow="More work" title="Other projects" />
          <AnimatedSection className="mt-12" delay={0.08}>
            <RelatedProjectsCarousel projects={related} />
          </AnimatedSection>
        </Section>
      )}

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Need something similar?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Tell me what you have in mind. I&apos;ll ask a few questions,
              then send a scope, timeline and quote.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Free first consultation, no obligation",
                "Written scope, timeline and quote",
                `Reply ${RESPONSE_TIME}`,
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="surface p-6 shadow-lg sm:p-8">
              <h3 className="font-display text-xl font-bold">
                Send me a message
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Mention &ldquo;{project.shortTitle}&rdquo; if you&apos;d like
                something similar.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
