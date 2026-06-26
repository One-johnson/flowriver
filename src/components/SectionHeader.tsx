import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {badge && <span className="section-badge">{badge}</span>}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          badge && "mt-4"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
