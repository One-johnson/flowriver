import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  image?: {
    src: string;
    alt: string;
    contain?: boolean;
  };
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
  className,
}: PageHeroProps) {
  return (
    <Section className={cn("pt-28 pb-12 sm:pt-36 sm:pb-16", className)}>
      <div
        className={cn(
          "grid items-center gap-12",
          image && "lg:grid-cols-2 lg:gap-20"
        )}
      >
        <AnimatedSection className="max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-medium text-primary">{eyebrow}</p>
          )}
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

        {image && (
          <AnimatedSection delay={0.1}>
            <div
              className={cn(
                "relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl border border-border lg:max-w-none",
                image.contain && "bg-muted/50"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className={image.contain ? "object-contain p-10" : "object-cover"}
                priority
              />
            </div>
          </AnimatedSection>
        )}
      </div>
    </Section>
  );
}
