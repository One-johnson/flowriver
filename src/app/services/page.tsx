import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
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
      {/* Hero — text left, image right */}
      <Section className="relative overflow-hidden pt-28 pb-12 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 right-1/3 h-[500px] w-[600px] rounded-full bg-primary/6 blur-3xl" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="max-w-xl">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Everything you need to{" "}
              <span className="text-primary">build, launch & grow.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From stunning designs to powerful solutions — FlowRiver Technologies
              delivers end-to-end digital solutions tailored to your business.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <AnimatedImageBox
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop"
                alt="Digital services and development"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/6 blur-2xl"
            />
          </AnimatedSection>
        </div>
      </Section>

      {/* Services grid */}
      <Section>
        <div className="space-y-20">
          {services.map((s, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <AnimatedSection key={s.title} delay={0.05}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">
                          {s.title}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {s.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm"
                        >
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button asChild>
                        <Link href={`/services/${s.slug}`}>
                          View full details
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/contact">Get a quote</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
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
                      className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/6 blur-2xl"
                    />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-muted/20">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How we work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A proven process that keeps things transparent, collaborative, and
            on schedule from day one.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-xl border border-border/50 bg-card p-6">
                <span className="font-display text-3xl font-extrabold text-primary/20">
                  {p.step}
                </span>
                <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
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

      {/* FAQs */}
      <Section className="bg-muted/20">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Common questions about working with FlowRiver. Can&apos;t find what
            you need? <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">Get in touch</Link>.
          </p>
        </AnimatedSection>
        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <FaqAccordion items={servicesFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
                Tell us what you need and we&apos;ll put together a tailored
                plan and quote — no obligations, no surprises.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="min-w-[180px] text-base font-semibold"
                >
                  <Link href="/contact">
                    Get a free quote
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
