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

export const portfolioCategories = [
  "All",
  "Websites",
  "Systems",
  "Events",
] as const;
