import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  BrainCircuit,
  Smartphone,
  PenTool,
  Component,
  Check,
  MonitorSmartphone,
  Cpu,
  Palette,
  Layers,
  MousePointerClick,
  Code,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "FlowRiver Technologies offers web design & development, UI design, graphic design, AI integrations, mobile app development, and custom systems.",
};

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    tagline: "Websites that work as hard as you do",
    description:
      "We design and build fast, responsive, and SEO-friendly websites — from sleek landing pages to complex web applications. Every pixel is intentional, every interaction is smooth.",
    features: [
      "Custom responsive websites",
      "E-commerce & SaaS platforms",
      "CMS integration (WordPress, Headless)",
      "Performance optimisation & SEO",
      "Ongoing maintenance & support",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Modern website on a laptop screen",
  },
  {
    icon: Component,
    title: "UI Design",
    tagline: "Interfaces users love to use",
    description:
      "User-centred interface design grounded in research and refined through iteration. We create intuitive, accessible designs backed by design systems that scale with your product.",
    features: [
      "User research & wireframing",
      "High-fidelity UI mockups",
      "Interactive prototyping",
      "Design systems & component libraries",
      "Usability testing & iteration",
    ],
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80&auto=format&fit=crop",
    imageAlt: "UI design wireframes and components",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    tagline: "Visuals that tell your story",
    description:
      "From brand identities to marketing collateral, we craft bold, memorable visuals. Whether it's a logo, social media kit, or full brand guide — we make you look exceptional.",
    features: [
      "Logo & brand identity design",
      "Marketing & social media graphics",
      "Illustrations & iconography",
      "Print design (brochures, packaging)",
      "Brand guidelines & style guides",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Creative graphic design workspace",
  },
  {
    icon: BrainCircuit,
    title: "AI Integrations",
    tagline: "Smarter software, less manual work",
    description:
      "We integrate AI and machine learning into your existing products and workflows — chatbots, recommendation engines, intelligent automation, and more.",
    features: [
      "AI-powered chatbots & assistants",
      "Natural language processing",
      "Predictive analytics & recommendations",
      "Workflow automation with AI",
      "Custom model training & fine-tuning",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&auto=format&fit=crop",
    imageAlt: "AI neural network visualization",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Apps for iOS, Android, and beyond",
    description:
      "Native and cross-platform mobile apps designed for performance and delight. From concept to App Store, we handle the full lifecycle.",
    features: [
      "iOS & Android development",
      "Cross-platform (React Native, Flutter)",
      "App UI/UX design",
      "Backend & API development",
      "App Store submission & optimisation",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Mobile app on a smartphone",
  },
  {
    icon: Server,
    title: "Systems & Software",
    tagline: "Robust systems built to scale",
    description:
      "Custom backend systems, APIs, databases, and cloud infrastructure — engineered for reliability, security, and growth. We build the engine behind your product.",
    features: [
      "Custom software development",
      "API design & integration",
      "Cloud infrastructure & DevOps",
      "Database architecture",
      "Security & performance audits",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Server infrastructure and cloud systems",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, audience, and technical requirements through an in-depth consultation.",
    icon: MousePointerClick,
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create wireframes, mockups, and prototypes — iterating with your feedback until the vision is pixel-perfect.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Our engineers build your solution using modern, scalable technologies with clean code and best practices.",
    icon: Code,
  },
  {
    step: "04",
    title: "Deliver & Support",
    description:
      "We launch, test, and optimise — then provide ongoing support to keep everything running smoothly.",
    icon: Layers,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-28 pb-12 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 right-1/3 h-[500px] w-[600px] rounded-full bg-primary/6 blur-3xl" />
        </div>

        <AnimatedSection className="max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Everything you need to{" "}
            <span className="text-primary">build, launch & grow.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            From stunning designs to powerful systems — FlowRiver Technologies
            delivers end-to-end digital solutions tailored to your business.
          </p>
        </AnimatedSection>
      </Section>

      {/* Services grid */}
      <Section>
        <div className="space-y-20">
          {services.map((s, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <AnimatedSection key={s.title} delay={0.05}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">
                          {s.title}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {s.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm"
                        >
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button asChild variant="outline">
                        <Link href="/contact">
                          Get a quote
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative mx-auto w-full max-w-lg lg:max-w-none ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-primary/5">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 90vw, 45vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                    </div>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/6 blur-2xl"
                    />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-muted/20">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How we work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A proven process that keeps things transparent, collaborative, and
            on schedule from day one.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-xl border border-border/50 bg-card p-6">
                <span className="font-display text-3xl font-extrabold text-primary/20">
                  {p.step}
                </span>
                <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
                Tell us what you need and we&apos;ll put together a tailored
                plan and quote — no obligations, no surprises.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="min-w-[180px] text-base font-semibold"
                >
                  <Link href="/contact">
                    Get a free quote
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
