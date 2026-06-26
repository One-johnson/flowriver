import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AnimatedImageBox } from "@/components/AnimatedImageBox";
import { services, processSteps } from "@/lib/services-data";

const servicesFaqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A simple website might take 2–4 weeks; a custom web app or mobile app often 6–12 weeks. We'll give you a timeline and milestones in the proposal.",
  },
  {
    question: "Do you work with clients outside Ghana?",
    answer:
      "Yes. We work remotely with clients worldwide. We use async updates, video calls, and shared project tools so distance isn't a barrier.",
  },
  {
    question: "What's included in a quote?",
    answer:
      "A clear scope, deliverables, timeline, and fixed or phased pricing. We also outline what's out of scope so there are no surprises later.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer maintenance and support packages — from bug fixes and updates to new features. We can include this in your initial quote or add it later.",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "FlowRiver Technologies offers web design & development, UI design, graphic design, AI integrations, mobile app development, and computer systems sales & repairs (laptops, phones, installations).",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="gradient-text">build, launch & grow.</span>
          </>
        }
        description="From stunning designs to powerful solutions — FlowRiver Technologies delivers end-to-end digital solutions tailored to your business."
        image={{
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop",
          alt: "Digital services and development",
        }}
      />

      <Section>
        <div className="space-y-24">
          {services.map((s, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <AnimatedSection key={s.title} delay={0.05}>
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold sm:text-2xl">
                          {s.title}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {s.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild className="rounded-xl">
                        <Link href={`/services/${s.slug}`}>
                          View full details
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-xl">
                        <Link href="/contact">Get a quote</Link>
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`relative mx-auto w-full max-w-lg lg:max-w-none ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <AnimatedImageBox
                      src={s.image}
                      alt={s.imageAlt}
                      sizes="(max-width: 1024px) 90vw, 45vw"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-3xl"
                    />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <AnimatedSection>
          <SectionHeader
            badge="Process"
            title="How we work"
            description="A proven process that keeps things transparent, collaborative, and on schedule from day one."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.08}>
              <div className="glass-card card-hover relative flex h-full flex-col p-7">
                <span className="font-display text-4xl font-extrabold text-primary/15">
                  {p.step}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <AnimatedSection>
          <SectionHeader
            badge="FAQ"
            title="Frequently asked questions"
            description={
              <>
                Common questions about working with FlowRiver. Can&apos;t find
                what you need?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Get in touch
                </Link>
                .
              </>
            }
          />
        </AnimatedSection>
        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-6 sm:p-8">
              <FaqAccordion items={servicesFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <CTABanner
        title="Have a project in mind?"
        description="Tell us what you need and we'll put together a tailored plan and quote — no obligations, no surprises."
        primaryLabel="Get a free quote"
        primaryHref="/contact"
      />
    </>
  );
}
