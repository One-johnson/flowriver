import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section } from "@/components/Section";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className,
}: CTABannerProps) {
  return (
    <Section className={className}>
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-3xl cta-gradient px-6 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="dot-grid absolute inset-0 opacity-20" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="min-w-[200px] bg-white text-base font-semibold text-primary shadow-lg hover:bg-white/90"
              >
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-[200px] border-white/30 bg-white/5 text-base text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
