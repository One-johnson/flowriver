import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getService } from "@/lib/data.functions";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => getService({ data: params.slug }),
  head: ({ loaderData, params }) =>
    loaderData
      ? seo({
          title: loaderData.service.title,
          description:
            loaderData.service.longDescription ||
            loaderData.service.description,
          path: `/services/${params.slug}`,
        })
      : {},
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service, related } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        description={service.description}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/contact">
              Get a quote
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link to="/services">
              <ArrowLeft className="mr-1 h-4 w-4" />
              All services
            </Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              What we deliver
            </h2>
            {service.longDescription && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {service.longDescription}
              </p>
            )}
            {service.approach.length > 0 && (
              <ol className="mt-10 space-y-4">
                {service.approach.map((item, i) => (
                  <AnimatedSection
                    as="li"
                    key={i}
                    delay={i * 0.06}
                    className="flex gap-4 rounded-xl bg-tint p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground">{item}</p>
                  </AnimatedSection>
                ))}
              </ol>
            )}
            <p className="mt-10 text-sm text-muted-foreground">
              Every project follows{" "}
              <Link
                to="/services"
                hash="process"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                the same four-stage process
              </Link>
              .
            </p>
          </div>

          {service.features.length > 0 && (
            <aside className="theme-ink h-fit rounded-xl p-6 lg:sticky lg:top-24">
              <h3 className="font-display text-lg font-semibold">Included</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link to="/contact">Ask about this service</Link>
              </Button>
            </aside>
          )}
        </div>
      </Section>

      {service.faqs && service.faqs.length > 0 && (
        <Section tone="tint">
          <div className="grid gap-12 lg:grid-cols-3">
            <SectionHeader eyebrow="FAQ" title="Common questions" />
            <div className="surface px-6 lg:col-span-2">
              <FaqAccordion items={service.faqs} />
            </div>
          </div>
        </Section>
      )}

      <Section>
        <SectionHeader title="Other services" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="surface link-card group flex flex-col p-6"
            >
              <h3 className="font-display text-lg font-semibold group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title={`Need help with ${service.title.toLowerCase()}?`}
        description="Tell us about your project and we'll send a plan and a quote. There's no obligation."
        primaryLabel="Get a quote"
        primaryTo="/contact"
      />
    </>
  );
}
