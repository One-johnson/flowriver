import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { RelatedProjectsCarousel } from "@/components/RelatedProjectsCarousel";
import { ContactForm } from "@/app/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getPortfolioBySlug,
  getPortfolioSlugs,
  getRelatedProjects,
  statusLabels,
} from "@/lib/portfolio-data";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Globe,
  Sparkles,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | FlowRiver Technologies`,
      description: project.description,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug);
  const status = project.status ?? "live";

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 mesh-bg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />

        <AnimatedSection>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </AnimatedSection>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="section-badge">{project.category}</span>
              {status !== "live" && (
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    status === "in-development" &&
                      "border border-amber-500/30 bg-amber-500/15 text-amber-700 dark:text-amber-300",
                    status === "coming-soon" &&
                      "border border-primary/30 bg-primary/15 text-primary"
                  )}
                >
                  {statusLabels[status]}
                </span>
              )}
            </div>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>
                <span className="font-medium text-foreground">Client:</span>{" "}
                {project.client}
              </span>
              {project.year !== "—" && (
                <span>
                  <span className="font-medium text-foreground">Year:</span>{" "}
                  {project.year}
                </span>
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.clientUrl && (
                <Button asChild size="lg" className="rounded-xl">
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
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link href="/contact">
                  Start a similar project
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="relative">
            <div
              className={cn(
                "relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border/40 shadow-2xl shadow-primary/10 lg:max-w-none",
                project.logoImage &&
                  (project.logoImageDark ? "bg-zinc-950" : "bg-muted/50")
              )}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className={cn(
                  project.logoImage ? "object-contain p-10" : "object-cover"
                )}
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-3xl"
            />
          </AnimatedSection>
        </div>
      </Section>

      {/* Details */}
      <Section className="bg-muted/30">
        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-3">
            <span className="section-badge">
              <Sparkles className="h-3.5 w-3.5" />
              Overview
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              About this project
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/50 bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="glass-card h-full p-7">
              <h3 className="font-display text-lg font-semibold">
                What we delivered
              </h3>
              <ul className="mt-5 space-y-3.5">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              {project.clientUrl && (
                <a
                  href={project.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
                >
                  <Globe className="h-4 w-4" />
                  {project.clientUrl.replace(/^https?:\/\//, "")}
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Related projects carousel */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            badge="More work"
            title="Explore other projects"
            description="A few more pieces from the FlowRiver portfolio."
          />
        </AnimatedSection>
        <AnimatedSection className="mt-12" delay={0.08}>
          <RelatedProjectsCarousel projects={related} />
        </AnimatedSection>
      </Section>

      {/* Contact */}
      <Section className="bg-muted/30">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <span className="section-badge">Get in touch</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Inspired by this project?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Tell us about your idea — we&apos;ll help you scope it, design it,
              and ship it. Whether it&apos;s a website, system, or event platform,
              we&apos;d love to hear from you.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Free consultation — no obligation",
                "Clear timeline and quote",
                "Response within 4 business hours",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold">
                Send us a message
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
