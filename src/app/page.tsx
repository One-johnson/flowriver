import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import {
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Workflow,
  Users,
  Globe,
  ChevronRight,
} from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed from the ground up. Sub-second responses that keep your team in flow state.",
  },
  {
    icon: Shield,
    title: "Enterprise Secure",
    description:
      "SOC 2 compliant with end-to-end encryption. Your data stays yours, always.",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    description:
      "Real-time analytics and dashboards that turn raw data into decisions.",
  },
  {
    icon: Workflow,
    title: "Seamless Integrations",
    description:
      "Connects with 200+ tools you already use. No workflow disruption, just amplification.",
  },
];

const metrics = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10k+", label: "Teams worldwide" },
  { value: "50M+", label: "Tasks automated" },
  { value: "<200ms", label: "Avg response" },
];

const testimonials = [
  {
    quote:
      "FlowRiver transformed how our engineering team collaborates. We shipped 40% faster in the first quarter.",
    author: "Sarah Chen",
    role: "VP Engineering, Nexus Labs",
  },
  {
    quote:
      "The integrations are seamless. We went from 6 disconnected tools to one unified workflow overnight.",
    author: "Marcus Rivera",
    role: "CTO, Parallel Systems",
  },
  {
    quote:
      "Finally, a platform that understands how modern teams actually work. The analytics alone are worth it.",
    author: "Aisha Patel",
    role: "Head of Ops, ScaleForge",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <Section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Background gradient blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute top-40 -right-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <AnimatedSection>
          <HeroCarousel />
        </AnimatedSection>
      </Section>

      {/* Metrics bar */}
      <div className="border-y border-border/40 bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Value Propositions */}
      <Section>
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything your team needs to move faster
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            One platform. Zero friction. FlowRiver brings together the tools,
            data, and intelligence your team needs in a single workflow.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, i) => (
            <AnimatedSection key={prop.title} delay={i * 0.1}>
              <div className="group h-full rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <prop.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
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

      {/* Product feature tease */}
      <Section className="bg-muted/20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              See the big picture.{" "}
              <span className="text-primary">Act on the details.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              FlowRiver&apos;s unified dashboard puts everything at your
              fingertips — from high-level KPIs to individual task progress.
              Make data-driven decisions without switching context.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Real-time collaboration across all projects",
                "AI-assisted task prioritization and scheduling",
                "Custom workflows that adapt to how you work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/services">
                  Explore features
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Decorative dashboard placeholder */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-muted shadow-2xl shadow-primary/10">
                <div className="flex h-8 items-center gap-1.5 border-b border-border/50 bg-muted/50 px-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-chart-5/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                </div>
                <div className="grid grid-cols-3 gap-3 p-4">
                  <div className="col-span-2 space-y-3">
                    <div className="h-4 w-3/4 rounded bg-primary/15" />
                    <div className="h-24 rounded-lg bg-primary/8" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 rounded-lg bg-primary/10" />
                      <div className="h-16 rounded-lg bg-chart-2/15" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-2/3 rounded bg-muted-foreground/15" />
                    <div className="h-12 rounded-lg bg-chart-4/10" />
                    <div className="h-12 rounded-lg bg-primary/8" />
                    <div className="h-12 rounded-lg bg-chart-2/10" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by teams that ship
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From startups to enterprises, FlowRiver powers the workflows of
            thousands of teams worldwide.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border/50 bg-card p-6">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Logo cloud */}
      <AnimatedSection>
        <div className="border-y border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Trusted by innovative companies worldwide
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {[
                "Nexus Labs",
                "Parallel Systems",
                "ScaleForge",
                "Vectrix",
                "Arcline",
                "NovaShift",
              ].map((name) => (
                <div key={name} className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground/50" />
                  <span className="text-lg font-semibold text-muted-foreground/60">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <Section>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
            {/* Decorative elements */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-0"
            >
              <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="relative z-10">
              <Users className="mx-auto h-10 w-10 opacity-80" />
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to find your flow?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
                Join thousands of teams already using FlowRiver to ship faster,
                collaborate better, and automate the rest.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="min-w-[180px] text-base font-semibold"
                >
                  <Link href="/contact">Start free trial</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-[180px] border-primary-foreground/30 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link href="/services">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
