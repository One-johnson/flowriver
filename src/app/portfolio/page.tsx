import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Server,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "FlowRiver Technologies portfolio — school management systems, e-commerce applications, websites, and database management systems. Clients include SourceOne Engineering And Logistics Services, SKILLSPRO LTD, CWU of TUC, and more.",
};

const categories = [
  "All",
  "Websites",
  "Systems",
  "E-Commerce",
  "Database",
];

const projects = [
  {
    title: "School Management System",
    category: "Systems",
    categoryIcon: Server,
    description:
      "A full-featured school management system for enrolment, attendance, grades, timetables, staff and student portals, reports, and fee management. Built to streamline daily operations for schools and educational institutions.",
    tags: ["Web App", "Dashboard", "Reports", "User Roles"],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop",
    imageAlt: "School management system dashboard",
    client: "Schools",
    year: "—",
  },
  {
    title: "E-Commerce Application",
    category: "E-Commerce",
    categoryIcon: Globe,
    description:
      "A complete e-commerce platform with product catalog, cart, checkout, order management, and admin panel. Responsive design and secure payment integration for online retail.",
    tags: ["E-Commerce", "Payments", "Admin Panel", "Responsive"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
    imageAlt: "E-commerce website on laptop",
    client: "SKILLSPRO LTD",
    clientUrl: "",
    year: "—",
  },
  {
    title: "Database Management System",
    category: "Database",
    categoryIcon: Server,
    description:
      "A custom database management system for storing, querying, and reporting on organisational data. Secure access controls, backups, and an intuitive interface for non-technical users.",
    tags: ["Database", "Reports", "Security", "Backup"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Database management system interface",
    client: "SourceOne Engineering And Logistics Services",
    clientUrl: "",
    year: "—",
  },
  {
    title: "CWU of TUC Website",
    category: "Websites",
    categoryIcon: Globe,
    description:
      "Corporate website for the Communication Workers Union (CWU) of TUC — news, membership information, resources, and a clean, accessible design that reflects the union's mission and values.",
    tags: ["Website", "CMS", "Accessible", "Responsive"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Communication Workers Union website",
    client: "Communication Workers Union (CWU) of TUC",
    year: "—",
  },
  {
    title: "CBMWU of TUC — Website",
    category: "Websites",
    categoryIcon: Globe,
    description:
      "Professional website for the Construction and Building Materials Workers Union. Information on membership, campaigns, events, and contact — built for clarity and easy navigation.",
    tags: ["Website", "Union", "Responsive", "Contact"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Union website on desktop",
    client: "Construction and Building Materials Workers Union",
    year: "—",
  },
  {
    title: "SourceOne Engineering And Logistics Services (SEALS) — Website",
    category: "Websites",
    categoryIcon: Globe,
    description:
      "Corporate website for SourceOne Engineering And Logistics Services (SEALS) — services, about, and contact. Modern, responsive design with clear messaging and a professional look that builds trust with visitors.",
    tags: ["Website", "Corporate", "Responsive", "SEO"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop",
    imageAlt: "SourceOne Engineering And Logistics Services corporate website",
    client: "SourceOne Engineering And Logistics Services",
    clientUrl: "https://sealsghana.com",
    year: "—",
  },
  {
    title: "SKILLSPRO LTD — Website",
    category: "Websites",
    categoryIcon: Globe,
    description:
      "Website for SKILLSPRO LTD showcasing services, training programmes, and company information. Fast, mobile-friendly, and easy to update.",
    tags: ["Website", "Services", "Responsive", "Training"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
    imageAlt: "SKILLSPRO LTD website",
    client: "SKILLSPRO LTD",
    clientUrl: "https://skillsproltd.com",
    year: "—",
  },
];

const stats = [
  { value: "5+", label: "Clients served" },
  { value: "7+", label: "Projects delivered" },
  { value: "4", label: "Project types" },
  { value: "100%", label: "Client focus" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero — text left, image right */}
      <Section className="relative overflow-hidden pt-28 pb-12 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 left-1/3 h-[500px] w-[600px] rounded-full bg-primary/6 blur-3xl" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="max-w-xl">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Work that{" "}
              <span className="text-primary">speaks for itself</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A selection of projects we&apos;re proud of — school management
              systems, e-commerce applications, websites, and database management
              systems for organisations including SourceOne Engineering And Logistics Services, SKILLSPRO LTD, CWU of
              TUC, and more.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-primary/5 lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop"
                alt="Portfolio and project work"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/6 blur-2xl"
            />
          </AnimatedSection>
        </div>
      </Section>

      {/* Stats bar */}
      <div className="border-y border-border/40 bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Category pills */}
      <Section className="pb-0 pt-16 sm:pt-20">
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex cursor-default items-center rounded-full border border-border/50 bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                {cat}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Projects grid */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const CatIcon = p.categoryIcon;
            return (
              <AnimatedSection key={p.title} delay={(i % 3) * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Category badge on image */}
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      <CatIcon className="h-3 w-3 text-primary" />
                      {p.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold">
                        {p.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {"clientUrl" in p && p.clientUrl ? (
                        <>
                          <a
                            href={p.clientUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary"
                          >
                            {p.client}
                          </a>
                          {" "}&middot; {p.year}
                        </>
                      ) : (
                        <>{p.client} &middot; {p.year}</>
                      )}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-muted/20">
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
                Want to be our next success story?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
                Let&apos;s discuss your project and see how FlowRiver can bring
                your vision to life.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="min-w-[180px] text-base font-semibold"
                >
                  <Link href="/contact">
                    Start a project
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
