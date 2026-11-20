import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { ClientMarquee } from "@/components/ClientMarquee";
import { FloatingLogos } from "@/components/FloatingLogos";
import { FlowLines } from "@/components/FlowLines";
import { ProjectCard } from "@/components/ProjectCard";
import { getHomeData } from "@/lib/data.functions";

export const Route = createFileRoute("/")({
  loader: () => getHomeData(),
  component: Home,
});

const homeFaqs = [
  {
    question: "What does FlowRiver Technologies do?",
    answer:
      "We build websites, web and mobile apps, school and database management systems, and e-commerce sites. We also do UI and graphic design, AI integrations, and computer sales and repairs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us a message through the contact form or by email. We'll arrange a short call to understand what you need, then send a proposal with scope, timeline and price. There's no obligation.",
  },
  {
    question: "Where are you based?",
    answer:
      "Accra, Ghana. We work with clients in Ghana and abroad; most collaboration happens remotely, with regular updates.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes. Maintenance, updates and support can be included in your proposal or added later.",
  },
];

const howWeWork = [
  {
    title: "Scope and quote first",
    description:
      "Before any work starts you get a written scope, a timeline and a price, including what is out of scope.",
  },
  {
    title: "Design and build together",
    description:
      "Design and development happen in the same small team, so what you approve is what gets built.",
  },
  {
    title: "Launch, training and support",
    description:
      "We hand over with training and documentation, and stay available for fixes, updates and new features.",
  },
];

function Home() {
  const { testimonials, services, projects } = Route.useLoaderData();
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Section tone="ink" className="overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        <FlowLines className="opacity-80" />
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <AnimatedSection>
            <p className="eyebrow">Design and development studio · Accra, Ghana</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Websites, apps and business systems for organisations in Ghana.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We design, build and maintain software for businesses, unions,
              schools and NGOs, from the first conversation through to support
              after launch.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">See our work</Link>
              </Button>
            </div>
            <dl className="mt-12 flex gap-10 border-t border-border pt-8">
              <div>
                <dt className="text-sm text-muted-foreground">Projects launched</dt>
                <dd className="mt-1 font-display text-3xl font-bold">
                  {projects.length}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Services</dt>
                <dd className="mt-1 font-display text-3xl font-bold">
                  {services.length}
                </dd>
              </div>
            </dl>
          </AnimatedSection>
          <FloatingLogos className="mx-auto w-full max-w-lg" />
        </div>
      </Section>

      {/* Clients */}
      <section className="theme-tint border-y border-border py-10">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Organisations we&apos;ve built for
        </p>
        <ClientMarquee />
      </section>

      {/* Recent work */}
      <Section>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Recent work"
            title="Recently launched"
            description="Websites and systems we have built for clients this year."
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            All {projects.length} projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeader
            eyebrow="Services"
            title="What we do"
            description="Each service has its own page with what's included and common questions."
          />
          <ul className="divide-y divide-border border-y border-border lg:col-span-2">
            {services.map((s, i) => (
              <AnimatedSection as="li" key={s.slug} delay={i * 0.05}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center justify-between gap-6 py-5 transition-[padding] duration-300 hover:pl-3"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-sm text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display text-lg font-semibold transition-colors group-hover:text-primary">
                          {s.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {s.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section tone="tint">
        <SectionHeader eyebrow="Process" title="How a project runs" />
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-indigo via-primary to-cyan md:block"
          />
        <ol className="relative grid gap-10 md:grid-cols-3">
          {howWeWork.map((step, i) => (
            <AnimatedSection as="li" key={step.title} delay={i * 0.12} className="relative">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground ring-8 ring-tint">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
            </AnimatedSection>
          ))}
        </ol>
        </div>
      </Section>

      {testimonials.length > 0 && (
        <Section>
          <SectionHeader eyebrow="Testimonials" title="What clients say" />
          <AnimatedSection className="mt-12">
            <TestimonialsCarousel items={testimonials} />
          </AnimatedSection>
        </Section>
      )}

      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            description={
              <>
                Something else?{" "}
                <Link
                  to="/contact"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Ask us
                </Link>
                .
              </>
            }
          />
          <div className="surface px-6 lg:col-span-2">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </Section>

      <CTABanner
        title="Tell us about your project"
        description="We'll reply with questions or a proposal covering scope, timeline and price."
        primaryLabel="Start a project"
        primaryTo="/contact"
        secondaryLabel="Browse services"
        secondaryTo="/services"
      />
    </>
  );
}
