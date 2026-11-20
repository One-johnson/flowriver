import { AnimatedSection } from "@/components/AnimatedSection";
import { FlowLines } from "@/components/FlowLines";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}

/** Dark navy page header with the animated flow lines behind it. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
  className,
}: PageHeroProps) {
  return (
    <Section
      tone="ink"
      className={cn("overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20", className)}
    >
      <FlowLines className="opacity-70" />
      <div
        className={cn(
          "relative grid items-center gap-12",
          aside && "lg:grid-cols-2 lg:gap-20"
        )}
      >
        <AnimatedSection className="max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1
            className={cn(
              "font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl",
              eyebrow && "mt-3"
            )}
          >
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          {children}
        </AnimatedSection>
        {aside && <AnimatedSection delay={0.1}>{aside}</AnimatedSection>}
      </div>
    </Section>
  );
}
