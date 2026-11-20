import { cn } from "@/lib/utils";

export type SectionTone = "default" | "tint" | "ink";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: SectionTone;
}

const toneClass: Record<SectionTone, string> = {
  default: "",
  tint: "theme-tint",
  ink: "theme-ink",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-24 lg:py-28",
        toneClass[tone],
        className
      )}
    >
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
