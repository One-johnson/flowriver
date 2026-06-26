"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  BrainCircuit,
  Smartphone,
  MonitorSmartphone,
  Cpu,
  Palette,
  PenTool,
  Layers,
  MousePointerClick,
  Component,
} from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    badge: "Web Design & Development",
    badgeIcon: Globe,
    heading: (
      <>
        Stunning websites that{" "}
        <span className="gradient-text">convert</span>
      </>
    ),
    description:
      "From pixel-perfect UI design to full-stack web development — we craft fast, responsive, and beautiful digital experiences that drive results.",
    tags: ["Websites", "UI Design", "Web Design", "Web Development"],
    tagIcons: [Globe, Palette, MonitorSmartphone, Cpu],
    cta: "Start your project",
    ctaHref: "/contact",
    secondaryCta: "View services",
    secondaryHref: "/services",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Modern web design on a laptop screen",
  },
  {
    badge: "AI & Systems",
    badgeIcon: BrainCircuit,
    heading: (
      <>
        Intelligent systems,{" "}
        <span className="gradient-text">limitless potential</span>
      </>
    ),
    description:
      "We build robust backend systems and integrate cutting-edge AI into your workflow — so your business runs smarter, faster, and with less effort.",
    tags: ["Building Systems", "AI Integrations", "Automation", "APIs"],
    tagIcons: [Cpu, BrainCircuit, Cpu, Globe],
    cta: "Explore AI solutions",
    ctaHref: "/contact",
    secondaryCta: "Learn more",
    secondaryHref: "/services",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
    imageAlt: "AI and neural network visualization",
  },
  {
    badge: "Mobile & Graphic Design",
    badgeIcon: Smartphone,
    heading: (
      <>
        Apps & designs people{" "}
        <span className="gradient-text">love</span>
      </>
    ),
    description:
      "Native and cross-platform mobile apps paired with bold graphic design — we create cohesive brand experiences across every touchpoint.",
    tags: [
      "Mobile Apps",
      "App Development",
      "Graphic Design",
      "Brand Identity",
    ],
    tagIcons: [Smartphone, Cpu, Palette, Palette],
    cta: "Let\u2019s build your app",
    ctaHref: "/contact",
    secondaryCta: "See our work",
    secondaryHref: "/portfolio",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Mobile app design on a smartphone",
  },
  {
    badge: "Graphic Design",
    badgeIcon: PenTool,
    heading: (
      <>
        Bold visuals that{" "}
        <span className="gradient-text">tell your story</span>
      </>
    ),
    description:
      "Logos, brand identities, marketing materials, and digital illustrations — we bring your brand to life with creative design that stands out and sticks.",
    tags: ["Logo Design", "Brand Identity", "Illustrations", "Print & Digital"],
    tagIcons: [PenTool, Palette, Layers, MonitorSmartphone],
    cta: "Get a design quote",
    ctaHref: "/contact",
    secondaryCta: "Our services",
    secondaryHref: "/services",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Creative graphic design workspace with colorful artwork",
  },
  {
    badge: "UI Design",
    badgeIcon: Component,
    heading: (
      <>
        Interfaces that feel{" "}
        <span className="gradient-text">effortless</span>
      </>
    ),
    description:
      "User-centered interfaces grounded in research and refined through iteration — we design intuitive experiences that delight users and drive engagement.",
    tags: ["UI Design", "UX Research", "Design Systems", "Prototyping"],
    tagIcons: [Component, MousePointerClick, Layers, Palette],
    cta: "Start a UI project",
    ctaHref: "/contact",
    secondaryCta: "Learn more",
    secondaryHref: "/services",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "UI design wireframes and interface components",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

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

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="section-badge mb-6">
                    <slide.badgeIcon className="h-3.5 w-3.5" />
                    {slide.badge}
                  </div>

                  <h1 className="max-w-xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.heading}
                  </h1>

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    {slide.tags.map((tag, j) => {
                      const TagIcon = slide.tagIcons[j];
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                        >
                          <TagIcon className="h-3 w-3 text-primary" />
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                    <Button
                      asChild
                      size="lg"
                      className="min-w-[180px] rounded-xl text-base"
                    >
                      <Link href={slide.ctaHref}>
                        {slide.cta}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="min-w-[180px] rounded-xl text-base"
                    >
                      <Link href={slide.secondaryHref}>
                        {slide.secondaryCta}
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40 shadow-2xl shadow-primary/15">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-3xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 lg:justify-start">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              selectedIndex === i
                ? "w-10 bg-primary"
                : "w-2 bg-primary/20 hover:bg-primary/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
