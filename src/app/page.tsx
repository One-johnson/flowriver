import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { getServices, getTestimonials } from "@/lib/services-data";
import { getPortfolioProjects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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

const clientNames = [
  "SEALS Ghana",
  "CWU of TUC",
  "SkillsPro Ltd",
  "NPSC Ghana",
  "The Homecoming",
];

export default async function Home() {
  const [testimonials, services, projects] = await Promise.all([
    getTestimonials(),
    getServices(),
    getPortfolioProjects(),
  ]);
  const featured = projects.slice(0, 3);

  return (
    <>
      <Section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-medium text-primary">
            Design and development studio · Accra, Ghana
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Websites, apps and business systems for organisations in Ghana.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We design, build and maintain software for businesses, unions,
            schools and NGOs, from the first conversation through to support
            after launch.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a project
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">See our work</Link>
            </Button>
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            Clients include {clientNames.slice(0, -1).join(", ")} and{" "}
            {clientNames[clientNames.length - 1]}.
          </p>
        </AnimatedSection>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            title="Recent work"
            description="Websites and systems we have built and launched."
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            All projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 0.06}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="surface link-card group flex h-full flex-col overflow-hidden"
              >
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden border-b border-border",
                    p.logoImage &&
                      (p.logoImageDark ? "bg-zinc-950" : "bg-muted/50")
                  )}
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={p.logoImage ? "object-contain p-8" : "object-cover"}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium text-muted-foreground">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold group-hover:text-primary">
                    {p.shortTitle}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeader
            title="What we do"
            description="Each service has its own page with what's included and common questions."
          />
          <ul className="divide-y divide-border border-y border-border lg:col-span-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <div>
                    <p className="font-display text-lg font-semibold group-hover:text-primary">
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.tagline}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeader title="How a project runs" />
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {howWeWork.map((step, i) => (
            <li key={step.title} className="border-t border-border pt-6">
              <span className="font-mono text-sm text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {testimonials.length > 0 && (
        <Section className="bg-muted/40">
          <SectionHeader title="What clients say" />
          <AnimatedSection className="mt-12">
            <TestimonialsCarousel items={testimonials} />
          </AnimatedSection>
        </Section>
      )}

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeader
            title="Common questions"
            description={
              <>
                Something else?{" "}
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
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </Section>

      <CTABanner
        title="Tell us about your project"
        description="We'll reply with questions or a proposal covering scope, timeline and price."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="Browse services"
        secondaryHref="/services"
      />
    </>
  );
}
