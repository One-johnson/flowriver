import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Component,
  PenTool,
  BrainCircuit,
  Smartphone,
  Wrench,
  MousePointerClick,
  Palette,
  Code,
  Layers,
} from "lucide-react";
import { reader } from "@/lib/keystatic";

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
      "We learn about your business, goals, audience, and technical requirements through an in-depth consultation.",
    icon: MousePointerClick,
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create wireframes, mockups, and prototypes — iterating with your feedback until the vision is pixel-perfect.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Our engineers build your solution using modern, scalable technologies with clean code and best practices.",
    icon: Code,
  },
  {
    step: "04",
    title: "Deliver & Support",
    description:
      "We launch, test, and optimise — then provide ongoing support to keep everything running smoothly.",
    icon: Layers,
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
  testimonials: { quote: string; author: string; role: string }[];
  faqs?: { question: string; answer: string }[];
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
};

export async function getTestimonials(): Promise<TestimonialItem[]> {
  const entries = await reader.collections.testimonials.all();
  return entries
    .map(({ entry }) => ({
      author: entry.author,
      role: entry.role,
      quote: entry.quote,
      order: entry.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ quote, author, role }) => ({ quote, author, role }));
}

function mapService(
  slug: string,
  entry: {
    title: string;
    tagline: string;
    description: string;
    longDescription: string;
    icon: string;
    features: readonly string[];
    approach: readonly string[];
    image: string;
    imageAlt: string;
    heroImage: string;
    faqs: readonly { question: string; answer: string }[];
  },
  testimonials: TestimonialItem[]
): ServiceItem {
  return {
    slug,
    icon: iconMap[entry.icon] ?? Globe,
    title: entry.title,
    tagline: entry.tagline,
    description: entry.description,
    longDescription: entry.longDescription || undefined,
    features: [...entry.features],
    image: entry.image,
    imageAlt: entry.imageAlt,
    heroImage: entry.heroImage,
    approach: [...entry.approach],
    testimonials,
    faqs: entry.faqs?.length
      ? entry.faqs.map((f) => ({ question: f.question, answer: f.answer }))
      : undefined,
  };
}

export async function getServices(): Promise<ServiceItem[]> {
  const [entries, testimonials] = await Promise.all([
    reader.collections.services.all(),
    getTestimonials(),
  ]);

  return entries
    .map(({ slug, entry }) => ({
      service: mapService(slug, entry, testimonials),
      order: entry.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ service }) => service);
}

export async function getServiceBySlug(
  slug: string
): Promise<ServiceItem | undefined> {
  const [entry, testimonials] = await Promise.all([
    reader.collections.services.read(slug),
    getTestimonials(),
  ]);
  if (!entry) return undefined;
  return mapService(slug, entry, testimonials);
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
