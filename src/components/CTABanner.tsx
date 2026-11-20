import { Link, type LinkProps } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FlowLines } from "@/components/FlowLines";
import { Section, type SectionTone } from "@/components/Section";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: LinkProps["to"];
  secondaryLabel?: string;
  secondaryTo?: LinkProps["to"];
  /** Background of the section around the banner. */
  tone?: SectionTone;
}

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  tone = "default",
}: CTABannerProps) {
  return (
    <Section tone={tone}>
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo to-primary px-6 py-14 text-white sm:px-12">
          <FlowLines className="opacity-40 mix-blend-screen" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-base text-white/85">{description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-ink hover:bg-white/90"
              >
                <Link to={primaryTo}>
                  {primaryLabel}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              {secondaryLabel && secondaryTo && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to={secondaryTo}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
