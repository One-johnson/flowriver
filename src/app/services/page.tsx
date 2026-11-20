import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { ArrowRight, Check } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServices, processSteps } from "@/lib/services-data";

const servicesFaqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A simple website might take 2–4 weeks; a custom web or mobile app often takes 6–12 weeks. The proposal includes a timeline and milestones.",
  },
  {
    question: "Do you work with clients outside Ghana?",
    answer:
      "Yes. We work remotely with clients abroad using video calls, written updates and shared project tools.",
  },
  {
    question: "What's included in a quote?",
    answer:
      "Scope, deliverables, timeline, and fixed or phased pricing. We also list what is out of scope so there are no surprises later.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Maintenance and support covers bug fixes, updates and new features. It can be part of the initial quote or added later.",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design and development, UI design, graphic design, AI integrations, mobile apps, and computer sales and repairs from FlowRiver Technologies in Accra.",
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we can build for you"
        description="Most clients come to us for a website or a custom system, then stay for design, support and the next project. Pick a service to see what's included."
      />

      <Section className="border-t border-border pt-0 sm:pt-0 lg:pt-0">
        <ul className="divide-y divide-border">
          {services.map((s) => (
            <li key={s.slug} id={s.slug} className="scroll-mt-20">
              <AnimatedSection className="grid gap-8 py-12 lg:grid-cols-3 lg:gap-12">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.tagline}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  {s.features.length > 0 && (
                    <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    More about {s.title.toLowerCase()}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="process" className="scroll-mt-16 bg-muted/40">
        <SectionHeader
          title="How we work"
          description="The same four stages for every project, whatever the size."
        />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p) => (
            <li key={p.step} className="border-t border-border pt-6">
              <span className="font-mono text-sm text-muted-foreground">
                {p.step}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeader
            title="Common questions"
            description={
              <>
                Can&apos;t find your answer?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Ask us
                </Link>
                .
              </>
            }
          />
          <div className="lg:col-span-2">
            <FaqAccordion items={servicesFaqs} />
          </div>
        </div>
      </Section>

      <CTABanner
        title="Have a project in mind?"
        description="Tell us what you need and we'll send a plan and a quote. There's no obligation."
        primaryLabel="Get a quote"
        primaryHref="/contact"
      />
    </>
  );
}
