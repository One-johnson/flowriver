import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Component,
  PenTool,
  BrainCircuit,
  Smartphone,
  Wrench,
} from "lucide-react";
import { getContentEntries, getContentEntry } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Component,
  PenTool,
  BrainCircuit,
  Smartphone,
  Wrench,
};

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your business, your users and what the project needs to do, then agree scope, timeline and price.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes and mockups you can review and comment on. We revise until you're happy before building.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "We build and test in stages and share progress as we go, so there are no surprises at the end.",
  },
  {
    step: "04",
    title: "Deliver & Support",
    description:
      "We launch, train your team and hand over documentation, then stay on for fixes and updates.",
  },
];

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
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
  icon: string;
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
    icon: iconMap[data.icon] ?? Globe,
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
