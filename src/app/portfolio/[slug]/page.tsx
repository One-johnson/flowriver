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
import { RESPONSE_TIME } from "@/lib/site-config";
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
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPortfolioSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioBySlug(slug);
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
  const project = await getPortfolioBySlug(slug);
  if (!project) notFound();

  const related = await getRelatedProjects(slug);
  const status = project.status ?? "live";

  return (
    <>
      {/* Hero */}
      <Section className="pt-28 pb-12 sm:pt-32">

        <AnimatedSection>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </AnimatedSection>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-primary">{project.category}</span>
              {status !== "live" && (
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium",
                    status === "in-development" &&
                      "border-amber-500/30 bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
                    status === "coming-soon" && "border-border text-foreground"
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
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>
                <span className="font-medium text-foreground">Client:</span>{" "}
                {project.client}
              </span>
              {project.year && project.year !== "—" && (
                <span>
                  <span className="font-medium text-foreground">Year:</span>{" "}
                  {project.year}
                </span>
              )}
            </div>
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
                <Link href="/contact">
                  Start a similar project
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div
              className={cn(
                "relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl border border-border lg:max-w-none",
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
          </AnimatedSection>
        </div>
      </Section>

      {/* Details */}
      <Section className="bg-muted/40">
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
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="surface h-full p-7">
              <h3 className="font-display text-lg font-semibold">
                What we delivered
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
          <SectionHeader title="More projects" />
        </AnimatedSection>
        <AnimatedSection className="mt-12" delay={0.08}>
          <RelatedProjectsCarousel projects={related} />
        </AnimatedSection>
      </Section>

      {/* Contact */}
      <Section className="bg-muted/40">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Need something similar?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Tell us what you have in mind. We&apos;ll ask a few questions,
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
            <div className="surface p-6 sm:p-8">
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
