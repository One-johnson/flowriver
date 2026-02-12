import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
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

const testimonials = [
  {
    quote:
      "FlowRiver transformed how our engineering team collaborates. We shipped 40% faster in the first quarter.",
    author: "Simon Annan",
    role: "CEO, SEALS",
  },
  {
    quote:
      "The integrations are seamless. We went from 6 disconnected tools to one unified workflow overnight.",
    author: "Osei Kwame",
    role: "General Secretary, CBMWU of TUC",
  },
  {
    quote:
      "Finally, a platform that understands how modern teams actually work. The analytics alone are worth it.",
    author: "Kwame Asare",
    role: "General Secretary, CWU of TUC",
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
            Why work with us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We combine design, development, and support so you get a partner
            that delivers — on time and on budget.
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

      {/* Feature tease */}
      <Section className="bg-muted/20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to launch.{" "}
              <span className="text-primary">One team.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
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
            From unions and NGOs to businesses and schools — we help organisations
            reach their audience and run their operations better.
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

      {/* FAQs */}
      <Section className="bg-muted/20">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Quick answers about FlowRiver. Have more questions?{" "}
            <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">Contact us</Link>.
          </p>
        </AnimatedSection>
        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <FaqAccordion items={homeFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </Section>

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
                Tell us your project — we&apos;ll scope it, quote it, and deliver
                it. No obligation, just a clear path forward.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="min-w-[180px] text-base font-semibold"
                >
                  <Link href="/contact">Ready for your first project?</Link>
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
