import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { StatsBar } from "@/components/StatsBar";
import { CTABanner } from "@/components/CTABanner";
import { CategoryPills } from "./CategoryPills";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Globe, Server } from "lucide-react";

type ProjectStatus = "live" | "in-development" | "coming-soon";

type PortfolioProject = {
  title: string;
  category: string;
  categoryIcon: LucideIcon;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  client: string;
  year: string;
  clientUrl?: string;
  logoImage?: boolean;
  logoImageDark?: boolean;
  status?: ProjectStatus;
};

const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  "in-development": "In development",
  "coming-soon": "Not yet launched",
};

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "FlowRiver Technologies portfolio — school management systems, e-commerce applications, websites, and database management systems. Clients include NPSC Ghana, SourceOne Engineering And Logistics Services, SKILLSPRO LTD, CWU of TUC, and more.",
};

const projects: PortfolioProject[] = [
  {
    title: "School Management System",
    category: "Systems",
    categoryIcon: Server,
    description:
      "A full-featured school management system for enrolment, attendance, grades, timetables, staff and student portals, reports, and fee management. Currently in final development — launch coming soon.",
    tags: ["Web App", "Dashboard", "Reports", "Coming Soon"],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop",
    imageAlt: "School management system dashboard",
    client: "Schools",
    year: "—",
    status: "coming-soon",
  },
  {
    title: "EU's Import — E-Commerce Application",
    category: "E-Commerce",
    categoryIcon: Globe,
    description:
      "A complete e-commerce platform with product catalog, cart, checkout, order management, and admin panel. Currently in active development for EU's Import.",
    tags: ["E-Commerce", "Payments", "Admin Panel", "In Development"],
    image: "/new.png",
    imageAlt: "EU's Import e-commerce application logo",
    client: "EU's Import",
    year: "—",
    logoImage: true,
    logoImageDark: true,
    status: "in-development",
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
    image: "/cwulog.png",
    imageAlt: "Communication Workers Union (CWU Ghana) logo",
    client: "Communication Workers Union (CWU) of TUC",
    clientUrl: "https://cwughana.com",
    year: "—",
    logoImage: true,
    logoImageDark: true,
    status: "live",
  },
  {
    title: "SourceOne Engineering And Logistics Services (SEALS) — Website",
    category: "Websites",
    categoryIcon: Globe,
    description:
      "Corporate website for SourceOne Engineering And Logistics Services (SEALS) — services, about, and contact. Modern, responsive design with clear messaging and a professional look that builds trust with visitors.",
    tags: ["Website", "Corporate", "Responsive", "SEO"],
    image: "/seals.png",
    imageAlt: "SourceOne Engineering And Logistics Services (SEALS) logo",
    client: "SourceOne Engineering And Logistics Services",
    clientUrl: "https://sealsghana.com",
    year: "—",
    logoImage: true,
    status: "live",
  },
  {
    title: "SKILLSPRO LTD — Website",
    category: "Websites",
    categoryIcon: Globe,
    description:
      "Website for SKILLSPRO LTD showcasing services, training programmes, and company information. Fast, mobile-friendly, and easy to update.",
    tags: ["Website", "Services", "Responsive", "Training"],
    image: "/skillspro-logo.png",
    imageAlt: "SKILLSPRO LTD logo",
    client: "SKILLSPRO LTD",
    clientUrl: "https://skillsproltd.com",
    year: "—",
    logoImage: true,
    logoImageDark: true,
    status: "live",
  },
  {
    title: "National Procurement and Supply Conference — Website",
    category: "Websites",
    categoryIcon: Globe,
    description:
      "Official website for the National Procurement and Supply Conference (NPSC) — event information, registration, speakers, and resources for Ghana's procurement and supply community.",
    tags: ["Website", "Conference", "Responsive", "Events"],
    image: "/npsc.png",
    imageAlt: "National Procurement and Supply Conference logo",
    client: "National Procurement and Supply Conference (NPSC)",
    clientUrl: "https://www.npscghana.com",
    year: "—",
    logoImage: true,
    status: "live",
  },
];

const stats = [
  { value: "5+", label: "Clients served" },
  { value: "7+", label: "Projects delivered" },
  { value: "4", label: "Project types" },
  { value: "100%", label: "Client focus" },
];

type PageProps = {
  searchParams?: Promise<{ category?: string }> | { category?: string };
};

export default async function PortfolioPage(props: PageProps) {
  const params =
    props.searchParams instanceof Promise
      ? await props.searchParams
      : props.searchParams ?? {};
  const categoryParam = params?.category ?? "All";
  const categories = ["All", "Websites", "Systems", "E-Commerce", "Database"];
  const category =
    typeof categoryParam === "string" && categories.includes(categoryParam)
      ? categoryParam
      : "All";
  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        badge="Portfolio"
        title={
          <>
            Work that{" "}
            <span className="gradient-text">speaks for itself</span>
          </>
        }
        description="A selection of projects we're proud of — school management systems, e-commerce applications, websites, and database management systems for organisations across Ghana and beyond."
        image={{
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
          alt: "Portfolio and project work",
        }}
      />

      <StatsBar stats={stats} />

      <Section className="pt-16 sm:pt-20">
        <AnimatedSection className="space-y-12">
          <CategoryPills />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => {
              const CatIcon = p.categoryIcon;
              return (
                <AnimatedSection key={p.title} delay={(i % 3) * 0.08}>
                  <div className="glass-card card-hover group flex h-full flex-col overflow-hidden">
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={cn(
                          "transition-transform duration-500 group-hover:scale-105",
                          p.logoImage
                            ? "object-contain p-8"
                            : "object-cover"
                        )}
                      />
                      <div
                        className={cn(
                          "absolute inset-0",
                          p.logoImage
                            ? "bg-gradient-to-t from-black/10 via-transparent to-transparent"
                            : "bg-gradient-to-t from-black/50 via-transparent to-transparent"
                        )}
                      />
                      {p.status && p.status !== "live" && (
                        <div
                          className={cn(
                            "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md",
                            p.status === "in-development" &&
                              "border border-amber-500/30 bg-amber-500/15 text-amber-700 dark:text-amber-300",
                            p.status === "coming-soon" &&
                              "border border-primary/30 bg-primary/15 text-primary"
                          )}
                        >
                          {statusLabels[p.status]}
                        </div>
                      )}
                      <div
                        className={cn(
                          "absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md",
                          p.logoImage
                            ? p.logoImageDark
                              ? "border border-white/20 bg-black/50 text-white"
                              : "border border-border/50 bg-background/90 text-foreground"
                            : "border border-white/20 bg-black/30 text-white"
                        )}
                      >
                        <CatIcon className="h-3 w-3" />
                        {p.category}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-bold">
                          {p.title}
                        </h3>
                        {p.clientUrl && (
                          <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {p.clientUrl ? (
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
                          <>
                            {p.client}
                            {p.status && p.status !== "live" && (
                              <> &middot; {statusLabels[p.status]}</>
                            )}
                            {(!p.status || p.status === "live") && (
                              <> &middot; {p.year}</>
                            )}
                          </>
                        )}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/50 bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
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
        </AnimatedSection>
      </Section>

      <CTABanner
        className="bg-muted/30"
        title="Want to be our next success story?"
        description="Let's discuss your project and see how FlowRiver can bring your vision to life."
        primaryLabel="Start a project"
        primaryHref="/contact"
      />
    </>
  );
}
