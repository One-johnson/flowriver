import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import {
  getServiceBySlug,
  getServiceSlugs,
  getRelatedServices,
} from "@/lib/services-data";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.longDescription || service.description,
    openGraph: {
      title: `${service.title} | FlowRiver Technologies`,
      description: service.tagline,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const related = await getRelatedServices(slug);

  return (
    <>
      <PageHero
        title={service.title}
        description={service.description}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Get a quote
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/services">
              <ArrowLeft className="mr-1 h-4 w-4" />
              All services
            </Link>
          </Button>
        </div>
      </PageHero>

      <Section className="border-t border-border">
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
              <ol className="mt-10 space-y-6">
                {service.approach.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-sm text-muted-foreground">
                      0{i + 1}
                    </span>
                    <p className="text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ol>
            )}
            <p className="mt-10 text-sm text-muted-foreground">
              Every project follows{" "}
              <Link
                href="/services#process"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                the same four-stage process
              </Link>
              .
            </p>
          </div>

          {service.features.length > 0 && (
            <aside className="surface h-fit p-6">
              <h3 className="font-display text-lg font-semibold">Included</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </Section>

      {service.faqs && service.faqs.length > 0 && (
        <Section className="bg-muted/40">
          <div className="grid gap-12 lg:grid-cols-3">
            <SectionHeader title="Common questions" />
            <div className="lg:col-span-2">
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
              href={`/services/${s.slug}`}
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
        primaryHref="/contact"
      />
    </>
  );
}
