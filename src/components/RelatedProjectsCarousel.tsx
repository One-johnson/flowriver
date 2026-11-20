import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/lib/portfolio-types";

type Props = {
  projects: PortfolioProject[];
};

export function RelatedProjectsCarousel({ projects }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
{
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!projects.length) return null;

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y gap-5 py-2">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => emblaApi?.scrollNext()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to project ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex === i
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/20 hover:bg-primary/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
