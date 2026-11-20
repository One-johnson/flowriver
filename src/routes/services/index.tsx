import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServicesList } from "@/lib/data.functions";
import { processSteps } from "@/lib/process-steps";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  loader: () => getServicesList(),
  head: () =>
    seo({
      title: "Services",
      description:
        "Web design and development, progressive web apps, custom applications, domains and hosting, and IT consultancy from FlowRiver Technologies in Accra.",
      path: "/services",
    }),
  component: ServicesPage,
});

const servicesFaqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A simple website might take 2–4 weeks; a progressive web app or custom system often takes 6–12 weeks. The proposal includes a timeline and milestones.",
  },
  {
    question: "Do you work with clients outside Ghana?",
    answer:
      "Yes. I work remotely with clients abroad using video calls, written updates and shared project tools.",
  },
  {
    question: "What's included in a quote?",
    answer:
      "Scope, deliverables, timeline, and fixed or phased pricing. I also list what is out of scope so there are no surprises later.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Maintenance and support covers bug fixes, updates and new features. It can be part of the initial quote or added later.",
  },
];

function ServicesPage() {
  const services = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What I can build for you"
        description="Most clients come to me for a website or a custom system, then stay for support, upgrades and the next project. Pick a service to see what's included."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.08}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                id={s.slug}
                className="surface link-card group flex h-full scroll-mt-20 flex-col p-7"
              >
                <span className="font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {s.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                {s.features.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {s.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-primary">
                  Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section id="process" tone="ink" className="scroll-mt-20">
        <SectionHeader
          eyebrow="Process"
          title="How I work"
          description="The same four stages for every project, whatever the size."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <AnimatedSection
              as="li"
              key={p.step}
              delay={i * 0.1}
              className="surface p-6"
            >
              <span className="font-mono text-sm text-primary">{p.step}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </AnimatedSection>
          ))}
        </ol>
      </Section>

      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            description={
              <>
                Can&apos;t find your answer?{" "}
                <Link
                  to="/contact"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Ask me
                </Link>
                .
              </>
            }
          />
          <div className="surface px-6 lg:col-span-2">
            <FaqAccordion items={servicesFaqs} />
          </div>
        </div>
      </Section>

      <CTABanner
        title="Have a project in mind?"
        description="Tell me what you need and I'll send a plan and a quote. There's no obligation."
        primaryLabel="Get a quote"
        primaryTo="/contact"
      />
    </>
  );
}
