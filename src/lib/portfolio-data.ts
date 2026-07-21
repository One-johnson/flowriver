export type ProjectStatus = "live" | "in-development" | "coming-soon";

export type PortfolioProject = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Websites" | "Systems" | "E-Commerce" | "Events";
  description: string;
  longDescription: string;
  highlights: string[];
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

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  "in-development": "In development",
  "coming-soon": "Not yet launched",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "tendzu-ventures-inventory-system",
    title: "Tendzu Ventures — Inventory & Sales Management System",
    shortTitle: "Tendzu Ventures",
    category: "Systems",
    description:
      "A full-stack inventory and sales management system built for a heavy-equipment company, covering stock, restocking, sales, profits, reports, alerts, and administration.",
    longDescription:
      "We built a responsive operations dashboard for Tendzu Ventures to manage its heavy-equipment catalog and day-to-day commercial activity in one place. The system tracks machines and stock levels, supports restocking and sales workflows, calculates profit, surfaces reports and alerts, and gives administrators control over business settings. It was developed with Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Convex.",
    highlights: [
      "Machine catalog and real-time stock management",
      "Restocking and end-to-end sales workflows",
      "Profit tracking, reports, and operational alerts",
      "Responsive dashboard with administrative controls",
    ],
    tags: ["Next.js", "TypeScript", "Convex", "Shadcn UI"],
    image: "/tendzu-ventures-logo.png",
    imageAlt: "Tendzu Ventures logo",
    client: "Tendzu Ventures",
    year: "2026",
    logoImage: true,
    logoImageDark: true,
    status: "live",
  },
  {
    slug: "homecoming-convention",
    title: "Mountain of the Lord — The Homecoming",
    shortTitle: "The Homecoming",
    category: "Events",
    description:
      "Official event website for Mountain of the Lord: The Homecoming — registration, schedules, and information for Dag Heward-Mills Ministries' global gathering at Anagkazo Campus.",
    longDescription:
      "We designed and built the official website for Mountain of the Lord — The Homecoming, a landmark gathering hosted by Dag Heward-Mills Ministries. The site captures the energy of the event with bold typography, immersive visuals, and a clear registration journey so attendees from around the world can find dates, venue details, and secure their place at Anagkazo Campus, Mampong, Ghana (November 2026).",
    highlights: [
      "Bold event branding with high-impact hero visuals",
      "Clear registration and event information architecture",
      "Mobile-first experience for international visitors",
      "Host, venue, and schedule sections for the full convention story",
    ],
    tags: ["Website", "Events", "Registration", "Responsive"],
    image: "/homecoming-banner.png",
    imageAlt: "Mountain of the Lord — The Homecoming event banner",
    client: "Dag Heward-Mills Ministries (DHMM)",
    year: "2026",
    clientUrl: "https://www.homecomingconvention.com",
    status: "live",
  },
  {
    slug: "seals-website",
    title: "SEALS — Corporate Website",
    shortTitle: "SEALS Ghana",
    category: "Websites",
    description:
      "Corporate website for SourceOne Engineering And Logistics Services (SEALS) — services, about, and contact.",
    longDescription:
      "We delivered a modern corporate website for SourceOne Engineering And Logistics Services (SEALS). The site communicates services and company credibility with clear messaging, responsive layouts, and a professional look that builds trust with visitors and partners.",
    highlights: [
      "Service-focused corporate storytelling",
      "Responsive design across devices",
      "Clear contact and enquiry paths",
      "SEO-friendly structure",
    ],
    tags: ["Website", "Corporate", "Responsive", "SEO"],
    image: "/seals.png",
    imageAlt: "SourceOne Engineering And Logistics Services (SEALS) logo",
    client: "SourceOne Engineering And Logistics Services",
    year: "—",
    clientUrl: "https://sealsghana.com",
    logoImage: true,
    status: "live",
  },
  {
    slug: "skillspro-website",
    title: "SKILLSPRO LTD — Website",
    shortTitle: "SkillsPro",
    category: "Websites",
    description:
      "Website for SKILLSPRO LTD showcasing services, training programmes, and company information.",
    longDescription:
      "A fast, mobile-friendly website for SKILLSPRO LTD that showcases services, training programmes, and company information. Built for clarity and easy updates so the team can keep content fresh without friction.",
    highlights: [
      "Services and training programme pages",
      "Mobile-first performance",
      "Easy-to-update content structure",
      "Clean modern brand presentation",
    ],
    tags: ["Website", "Services", "Responsive", "Training"],
    image: "/skillspro-logo.png",
    imageAlt: "SKILLSPRO LTD logo",
    client: "SKILLSPRO LTD",
    year: "—",
    clientUrl: "https://skillsproltd.com",
    logoImage: true,
    logoImageDark: true,
    status: "live",
  },
  {
    slug: "npsc-website",
    title: "National Procurement and Supply Conference",
    shortTitle: "NPSC Ghana",
    category: "Websites",
    description:
      "Official website for the National Procurement and Supply Conference (NPSC) — events, speakers, and resources.",
    longDescription:
      "The official website for the National Procurement and Supply Conference (NPSC), built for Ghana's procurement and supply community. Visitors can find event information, registration details, speakers, and resources in a clear, professional experience.",
    highlights: [
      "Conference information and registration paths",
      "Speakers and programme visibility",
      "Resources for attendees",
      "Clean, professional visual identity",
    ],
    tags: ["Website", "Conference", "Responsive", "Events"],
    image: "/npsc.png",
    imageAlt: "National Procurement and Supply Conference logo",
    client: "National Procurement and Supply Conference (NPSC)",
    year: "—",
    clientUrl: "https://www.npscghana.com",
    logoImage: true,
    status: "live",
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getPortfolioSlugs() {
  return portfolioProjects.map((p) => p.slug);
}

export function getRelatedProjects(slug: string, limit = 6) {
  return portfolioProjects.filter((p) => p.slug !== slug).slice(0, limit);
}

export const portfolioCategories = [
  "All",
  "Websites",
  "Systems",
  "Events",
] as const;
