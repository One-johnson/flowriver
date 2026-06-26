import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  badge,
  title,
  description,
  image,
  children,
  className,
}: PageHeroProps) {
  return (
    <Section
      className={cn(
        "relative overflow-hidden pt-28 pb-12 sm:pt-36 mesh-bg",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection className="max-w-xl">
          {badge && <span className="section-badge">{badge}</span>}
          <h1
            className={cn(
              "font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl",
              badge && "mt-5"
            )}
          >
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {description}
          </p>
          {children}
        </AnimatedSection>

        {image && (
          <AnimatedSection delay={0.15} className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border/40 shadow-2xl shadow-primary/10 lg:max-w-none">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-3xl"
            />
          </AnimatedSection>
        )}
      </div>
    </Section>
  );
}
