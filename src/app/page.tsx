import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeader } from "@/components/SectionHeader";
import { StatsBar } from "@/components/StatsBar";
import { CTABanner } from "@/components/CTABanner";
import { sharedTestimonials } from "@/lib/services-data";
import {
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Workflow,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const homeFaqs = [
  {
    question: "What does FlowRiver Technologies do?",
    answer:
      "We build websites, web and mobile apps, UI/UX design, graphic design, school and database management systems, e-commerce solutions, and AI integrations. We work with businesses and organisations of all sizes.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out via our contact form or email. We'll schedule a short call to understand your needs, then send a tailored proposal with scope, timeline, and quote. No obligation.",
  },
  {
    question: "Where are you based?",
    answer:
      "We're headquartered in Accra, Ghana, and work with clients locally and internationally. Most of our collaboration happens remotely with clear communication and regular updates.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes. We offer ongoing maintenance, updates, and support so your project keeps running smoothly. Support options can be included in your proposal or added later.",
  },
];

const valueProps = [
  {
    icon: Zap,
    title: "On-time delivery",
    description:
      "We set clear timelines and stick to them. From scoping to launch, you get predictable delivery and fewer surprises.",
  },
  {
    icon: Shield,
    title: "Quality-first",
    description:
      "Clean code, tested features, and best practices so your project stays maintainable and scalable.",
  },
  {
    icon: BarChart3,
    title: "Results that matter",
    description:
      "Websites and systems built to meet your goals — more enquiries, smoother operations, and happier users.",
  },
  {
    icon: Workflow,
    title: "End-to-end support",
    description:
      "From design and development to launch and beyond. We offer ongoing support so your project keeps performing.",
  },
];

const metrics = [
  { value: "7+", label: "Projects delivered" },
  { value: "5+", label: "Clients served" },
  { value: "4", label: "Support & maintenance" },
  { value: "100%", label: "Client focus" },
];

const clients = [
  "SEALS GHANA",
  "CWU OF TUC",
  "SKILLSPRO LTD",
  "NPSC GHANA",
  "THE HOMECOMING",
];

export default function Home() {
  return (
    <>
      <Section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 mesh-bg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl"
        />

        <AnimatedSection>
          <HeroCarousel />
        </AnimatedSection>
      </Section>

      <StatsBar stats={metrics} />

      <Section>
        <AnimatedSection>
          <SectionHeader
            badge="Why us"
            title="Why work with us"
            description="We combine design, development, and support so you get a partner that delivers — on time and on budget."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, i) => (
            <AnimatedSection key={prop.title} delay={i * 0.08}>
              <div className="glass-card card-hover group h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary transition-all group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
                  <prop.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <span className="section-badge">
              <Sparkles className="h-3.5 w-3.5" />
              Full service
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              From idea to launch.{" "}
              <span className="gradient-text">One team.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We handle design, development, and deployment so you can focus on
              your business. Whether it&apos;s a website, app, or custom system,
              we bring clarity and quality to every step.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Discovery and scoping tailored to your goals",
                "UI/UX and development with modern tech",
                "Launch, training, and ongoing support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <ChevronRight className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="outline" className="rounded-xl">
                <Link href="/services">
                  Explore services
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-card to-muted shadow-2xl shadow-primary/10">
                <div className="flex h-10 items-center gap-2 border-b border-border/40 bg-muted/60 px-5 backdrop-blur-sm">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-chart-5/60" />
                  <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                </div>
                <div className="grid grid-cols-3 gap-4 p-5">
                  <div className="col-span-2 space-y-4">
                    <div className="h-4 w-3/4 rounded-lg bg-primary/15" />
                    <div className="h-28 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 rounded-xl bg-primary/10" />
                      <div className="h-20 rounded-xl bg-chart-2/15" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-2/3 rounded-lg bg-muted-foreground/15" />
                    <div className="h-14 rounded-xl bg-chart-4/10" />
                    <div className="h-14 rounded-xl bg-primary/8" />
                    <div className="h-14 rounded-xl bg-chart-2/10" />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-3xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader
            badge="Testimonials"
            title="Trusted by teams that ship"
            description="From unions and NGOs to businesses and schools — we help organisations reach their audience and run their operations better."
          />
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <TestimonialsCarousel items={sharedTestimonials} />
        </AnimatedSection>
      </Section>

      <AnimatedSection>
        <div className="border-y border-border/40 bg-muted/40 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Trusted by innovative organisations
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {clients.map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-border/40 bg-card/60 px-5 py-3 text-sm font-semibold tracking-wide text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Section className="bg-muted/30">
        <AnimatedSection>
          <SectionHeader
            badge="FAQ"
            title="Frequently asked questions"
            description={
              <>
                Quick answers about FlowRiver. Have more questions?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Contact us
                </Link>
                .
              </>
            }
          />
        </AnimatedSection>
        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-6 sm:p-8">
              <FaqAccordion items={homeFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <CTABanner
        title="Ready to find your flow?"
        description="Tell us your project — we'll scope it, quote it, and deliver it. No obligation, just a clear path forward."
        primaryLabel="Start your first project"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}
