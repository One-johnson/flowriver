import { getContentEntries, getContentEntry } from "@/lib/content";

export type ServiceItem = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  features: string[];
  image: string;
  imageAlt: string;
  heroImage: string;
  approach: string[];
  faqs?: { question: string; answer: string }[];
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
};

type TestimonialData = {
  author: string;
  role: string;
  quote: string;
  order?: number;
};

type ServiceData = {
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  features?: string[];
  approach?: string[];
  image: string;
  imageAlt: string;
  heroImage: string;
  faqs?: { question: string; answer: string }[];
  order?: number;
};

export async function getTestimonials(): Promise<TestimonialItem[]> {
  const entries = await getContentEntries<TestimonialData>("testimonials");
  return entries
    .map(({ data }) => ({
      author: data.author,
      role: data.role,
      quote: data.quote,
      order: data.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ quote, author, role }) => ({ quote, author, role }));
}

function mapService(slug: string, data: ServiceData): ServiceItem {
  return {
    slug,
    title: data.title,
    tagline: data.tagline,
    description: data.description,
    longDescription: data.longDescription || undefined,
    features: [...(data.features ?? [])],
    image: data.image,
    imageAlt: data.imageAlt,
    heroImage: data.heroImage,
    approach: [...(data.approach ?? [])],
    faqs: data.faqs?.length
      ? data.faqs.map((f) => ({ question: f.question, answer: f.answer }))
      : undefined,
  };
}

export async function getServices(): Promise<ServiceItem[]> {
  const entries = await getContentEntries<ServiceData>("services");

  return entries
    .map(({ slug, data }) => ({
      service: mapService(slug, data),
      order: data.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ service }) => service);
}

export async function getServiceBySlug(
  slug: string
): Promise<ServiceItem | undefined> {
  const entry = await getContentEntry<ServiceData>("services", slug);
  if (!entry) return undefined;
  return mapService(slug, entry.data);
}

export async function getServiceSlugs(): Promise<string[]> {
  const services = await getServices();
  return services.map((s) => s.slug);
}

export async function getRelatedServices(
  currentSlug: string,
  limit = 3
): Promise<ServiceItem[]> {
  const services = await getServices();
  return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
