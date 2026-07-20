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
    slug: "school-management-system",
    title: "School Management System",
    shortTitle: "School Management",
    category: "Systems",
    description:
      "A full-featured school management system for enrolment, attendance, grades, timetables, staff and student portals, reports, and fee management.",
    longDescription:
      "A comprehensive school management platform built to streamline daily operations for educational institutions. From enrolment and attendance to grades, timetables, fee management, and dedicated staff and student portals — the system brings school administration into one clear, reliable workspace. Currently in final development ahead of launch.",
    highlights: [
      "Enrolment, attendance, and grade management",
      "Staff and student portals with role-based access",
      "Timetables, reports, and fee tracking",
      "Designed for schools of different sizes",
    ],
    tags: ["Web App", "Dashboard", "Reports", "Coming Soon"],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop",
    imageAlt: "School management system dashboard",
    client: "Schools",
    year: "—",
    status: "coming-soon",
  },
  {
    slug: "ells-import-ecommerce",
    title: "Ell's Import — E-Commerce Application",
    shortTitle: "Ell's Import",
    category: "E-Commerce",
    description:
      "A complete e-commerce platform with product catalog, cart, checkout, order management, and admin panel for Ell's Import.",
    longDescription:
      "We're building a full e-commerce experience for Ell's Import — product catalog, cart and checkout flows, order management, and an admin panel for day-to-day retail operations. The platform is designed to feel premium, load fast on mobile, and scale as the brand grows. Currently in active development.",
    highlights: [
      "Product catalog with rich product detail pages",
      "Cart, checkout, and order management",
      "Admin panel for inventory and orders",
      "Responsive storefront experience",
    ],
    tags: ["E-Commerce", "Payments", "Admin Panel", "In Development"],
    image: "/new.png",
    imageAlt: "Ell's Import e-commerce application logo",
    client: "Ell's Import",
    year: "—",
    logoImage: true,
    logoImageDark: true,
    status: "in-development",
  },
  {
    slug: "cwu-ghana-website",
    title: "CWU of TUC Website",
    shortTitle: "CWU Ghana",
    category: "Websites",
    description:
      "Corporate website for the Communication Workers Union (CWU) of TUC — news, membership, resources, and accessible design.",
    longDescription:
      "A professional corporate website for the Communication Workers Union (CWU) of TUC. The site presents news, membership information, and resources with a clean, accessible design that reflects the union's mission and makes it easy for members and the public to stay informed.",
    highlights: [
      "Clear membership and resources sections",
      "News and updates for union members",
      "Accessible, responsive layout",
      "Brand-aligned visual identity",
    ],
    tags: ["Website", "CMS", "Accessible", "Responsive"],
    image: "/cwulog.png",
    imageAlt: "Communication Workers Union (CWU Ghana) logo",
    client: "Communication Workers Union (CWU) of TUC",
    year: "—",
    clientUrl: "https://cwughana.com",
    logoImage: true,
    logoImageDark: true,
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
  "E-Commerce",
  "Events",
] as const;
