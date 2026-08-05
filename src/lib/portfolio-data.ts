import { reader } from "@/lib/keystatic";
import type { PortfolioProject, ProjectStatus } from "@/lib/portfolio-types";

export type { PortfolioProject, ProjectStatus } from "@/lib/portfolio-types";
export { statusLabels, portfolioCategories } from "@/lib/portfolio-types";

function mapProject(
  slug: string,
  entry: NonNullable<
    Awaited<ReturnType<typeof reader.collections.portfolio.read>>
  >
): PortfolioProject {
  return {
    slug,
    title: entry.title,
    shortTitle: entry.shortTitle,
    category: entry.category,
    description: entry.description,
    longDescription: entry.longDescription,
    highlights: [...entry.highlights],
    tags: [...entry.tags],
    image: entry.image,
    imageAlt: entry.imageAlt,
    client: entry.client,
    year: entry.year,
    clientUrl: entry.clientUrl ?? undefined,
    logoImage: entry.logoImage || undefined,
    logoImageDark: entry.logoImageDark || undefined,
    status: entry.status as ProjectStatus,
  };
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const entries = await reader.collections.portfolio.all();
  return entries
    .map(({ slug, entry }) => ({
      project: mapProject(slug, entry),
      order: entry.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ project }) => project);
}

export async function getPortfolioBySlug(slug: string) {
  const entry = await reader.collections.portfolio.read(slug);
  if (!entry) return undefined;
  return mapProject(slug, entry);
}

export async function getPortfolioSlugs() {
  const projects = await getPortfolioProjects();
  return projects.map((p) => p.slug);
}

export async function getRelatedProjects(slug: string, limit = 6) {
  const projects = await getPortfolioProjects();
  return projects.filter((p) => p.slug !== slug).slice(0, limit);
}
