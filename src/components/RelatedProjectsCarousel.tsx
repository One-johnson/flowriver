"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/lib/portfolio-data";

type Props = {
  projects: PortfolioProject[];
};

export function RelatedProjectsCarousel({ projects }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!projects.length) return null;

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y gap-5">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
            >
              <Link
                href={`/portfolio/${p.slug}`}
                className="glass-card card-hover group block overflow-hidden"
              >
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden",
                    p.logoImage &&
                      (p.logoImageDark ? "bg-zinc-950" : "bg-muted/60")
                  )}
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
                    className={cn(
                      "transition-transform duration-500 group-hover:scale-105",
                      p.logoImage ? "object-contain p-6" : "object-cover"
                    )}
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold">
                      {p.shortTitle}
                    </h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
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
