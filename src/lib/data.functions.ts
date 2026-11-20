import { createServerFn } from "@tanstack/react-start";
import { notFound } from "@tanstack/react-router";
import {
  getServices,
  getServiceBySlug,
  getRelatedServices,
  getTestimonials,
} from "@/lib/services-data";
import {
  getPortfolioProjects,
  getPortfolioBySlug,
  getRelatedProjects,
} from "@/lib/portfolio-data";

export const getHomeData = createServerFn({ method: "GET" }).handler(
  async () => {
    const [testimonials, services, projects] = await Promise.all([
      getTestimonials(),
      getServices(),
      getPortfolioProjects(),
    ]);
    return { testimonials, services, projects };
  }
);

export const getServicesList = createServerFn({ method: "GET" }).handler(() =>
  getServices()
);

export const getService = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const service = await getServiceBySlug(slug);
    if (!service) throw notFound();
    const related = await getRelatedServices(slug);
    return { service, related };
  });

export const getProjects = createServerFn({ method: "GET" }).handler(() =>
  getPortfolioProjects()
);

export const getProject = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const project = await getPortfolioBySlug(slug);
    if (!project) throw notFound();
    const related = await getRelatedProjects(slug);
    return { project, related };
  });
