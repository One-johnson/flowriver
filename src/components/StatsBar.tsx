import { AnimatedSection } from "@/components/AnimatedSection";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="border-y border-border/40 bg-muted/40 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-4xl font-bold gradient-text sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {s.label}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
