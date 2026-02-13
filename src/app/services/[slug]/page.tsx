import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import {
  getServiceBySlug,
  getServiceSlugs,
  getRelatedServices,
  processSteps,
} from "@/lib/services-data";
import { ArrowRight, Check } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description:
      service.longDescription || service.description,
    openGraph: {
      title: `${service.title} | FlowRiver Technologies`,
      description: service.tagline,
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);
  const Icon = service.icon;

  return (
    <>
      {/* Hero — full-width large image + overlay text */}
      <Section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
          <Image
            src={service.heroImage}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-90">{service.tagline}</p>
                <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 left-1/3 h-[500px] w-[600px] rounded-full bg-primary/8 blur-3xl" />
        </div>
      </Section>

      {/* Service overview + features */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              What we deliver
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {service.longDescription || service.description}
            </p>
            <ul className="mt-8 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a quote for {service.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-border/50 bg-muted/20 p-6">
              <h3 className="font-display text-lg font-semibold">Included</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* How we work */}
      <Section className="bg-muted/20">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How we work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A proven process that keeps things transparent, collaborative, and
            on schedule — for every project, including {service.title}.
          </p>
        </AnimatedSection>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => {
            const StepIcon = p.icon;
            return (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="relative flex h-full flex-col rounded-xl border border-border/50 bg-card p-6">
                  <span className="font-display text-3xl font-extrabold text-primary/20">
                    {p.step}
                  </span>
                  <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <StepIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* Our approach */}
      <Section>
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our approach
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            How we think about {service.title} and what you can expect when we work together.
          </p>
        </AnimatedSection>
        <ul className="mx-auto mt-12 max-w-3xl space-y-6">
          {service.approach.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <li className="flex gap-4 rounded-xl border border-border/50 bg-card p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-muted-foreground">{item}</p>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </Section>

      {/* Client testimonials */}
      <Section className="bg-muted/20">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What clients say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Teams and organisations we&apos;ve worked with — including those who&apos;ve used our {service.title} services.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16">
          <TestimonialsCarousel items={service.testimonials} />
        </AnimatedSection>
      </Section>

      {/* Service-specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <Section>
          <AnimatedSection className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Common questions about our {service.title} work.
            </p>
          </AnimatedSection>
          <div className="mx-auto mt-12 max-w-2xl">
            <AnimatedSection delay={0.1}>
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <FaqAccordion items={service.faqs} />
              </div>
            </AnimatedSection>
          </div>
        </Section>
      )}

      {/* Related services */}
      <Section className="bg-muted/20">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Other services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore more of what we offer — many clients use us for more than one area.
          </p>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => {
            const RelatedIcon = s.icon;
            return (
              <AnimatedSection key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <RelatedIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
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
                Ready to get started with {service.title}?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
                Tell us about your project and we&apos;ll put together a tailored
                plan and quote — no obligations.
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
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-[180px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/services">View all services</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
