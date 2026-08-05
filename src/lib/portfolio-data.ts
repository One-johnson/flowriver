import { getContentEntries, getContentEntry } from "@/lib/content";
import type { PortfolioProject, ProjectStatus } from "@/lib/portfolio-types";

export type { PortfolioProject, ProjectStatus } from "@/lib/portfolio-types";
export { statusLabels, portfolioCategories } from "@/lib/portfolio-types";

type PortfolioData = {
  title: string;
  shortTitle: string;
  category: PortfolioProject["category"];
  description: string;
  longDescription: string;
  highlights?: string[];
  tags?: string[];
  image: string;
  imageAlt: string;
  client: string;
  year: string;
  clientUrl?: string | null;
  logoImage?: boolean;
  logoImageDark?: boolean;
  status?: ProjectStatus;
  order?: number;
};

function mapProject(slug: string, data: PortfolioData): PortfolioProject {
  return {
    slug,
    title: data.title,
    shortTitle: data.shortTitle,
    category: data.category,
    description: data.description,
    longDescription: data.longDescription,
    highlights: [...(data.highlights ?? [])],
    tags: [...(data.tags ?? [])],
    image: data.image,
    imageAlt: data.imageAlt,
    client: data.client,
    year: data.year,
    clientUrl: data.clientUrl ?? undefined,
    logoImage: data.logoImage || undefined,
    logoImageDark: data.logoImageDark || undefined,
    status: data.status,
  };
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const entries = await getContentEntries<PortfolioData>("portfolio");
  return entries
    .map(({ slug, data }) => ({
      project: mapProject(slug, data),
      order: data.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ project }) => project);
}

export async function getPortfolioBySlug(slug: string) {
  const entry = await getContentEntry<PortfolioData>("portfolio", slug);
  if (!entry) return undefined;
  return mapProject(slug, entry.data);
}

export async function getPortfolioSlugs() {
  const projects = await getPortfolioProjects();
  return projects.map((p) => p.slug);
}

export async function getRelatedProjects(slug: string, limit = 6) {
  const projects = await getPortfolioProjects();
  return projects.filter((p) => p.slug !== slug).slice(0, limit);
}
