import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Component,
  PenTool,
  BrainCircuit,
  Smartphone,
  Server,
  MousePointerClick,
  Palette,
  Code,
  Layers,
} from "lucide-react";

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

export const sharedTestimonials: {
  quote: string;
  author: string;
  role: string;
}[] = [
  {
    quote:
      "FlowRiver transformed how our engineering team collaborates. We shipped 40% faster in the first quarter.",
    author: "Simon Annan",
    role: "CEO, SEALS",
  },
  {
    quote:
      "The integrations are seamless. We went from 6 disconnected tools to one unified workflow overnight.",
    author: "Osei Kwame",
    role: "General Secretary, CBMWU of TUC",
  },
  {
    quote:
      "Finally, a platform that understands how modern teams actually work. The analytics alone are worth it.",
    author: "Kwame Asare",
    role: "General Secretary, CWU of TUC",
  },
  {
    quote:
      "Professional, responsive, and they delivered on time. Our new website has made a real difference to how we reach our members.",
    author: "Sarah Mensah",
    role: "Communications Lead, CBMWU of TUC",
  },
];

export const services: ServiceItem[] = [
  {
    slug: "web-design-development",
    icon: Globe,
    title: "Web Design & Development",
    tagline: "Websites that work as hard as you do",
    description:
      "We design and build fast, responsive, and SEO-friendly websites — from sleek landing pages to complex web applications. Every pixel is intentional, every interaction is smooth.",
    longDescription:
      "Whether you need a simple landing page or a full-scale web application, we combine strong design with solid engineering. We focus on performance, accessibility, and SEO so your site not only looks great but reaches the right people and converts.",
    features: [
      "Custom responsive websites",
      "E-commerce & SaaS platforms",
      "CMS integration (WordPress, Headless)",
      "Performance optimisation & SEO",
      "Ongoing maintenance & support",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Modern website on a laptop screen",
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=85&auto=format&fit=crop",
    approach: [
      "We start with your goals and audience so the site is built for results, not just looks.",
      "Design and development happen in sync — no handoff surprises or last-minute changes.",
      "We use modern stacks (Next.js, React, etc.) so your site is fast and maintainable.",
      "Launch includes training, documentation, and a clear support path so you're never stuck.",
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "How long does a typical website project take?",
        answer:
          "A simple marketing site often takes 2–4 weeks; a larger site or web app can take 6–12 weeks. We'll give you a clear timeline and milestones in the proposal.",
      },
      {
        question: "Do you work with existing sites or only new builds?",
        answer:
          "Both. We can redesign and rebuild your current site, add new features, or integrate with other tools. We'll assess your codebase and recommend the best approach.",
      },
    ],
  },
  {
    slug: "ui-design",
    icon: Component,
    title: "UI Design",
    tagline: "Interfaces users love to use",
    description:
      "User-centred interface design grounded in research and refined through iteration. We create intuitive, accessible designs backed by design systems that scale with your product.",
    longDescription:
      "Great UI reduces friction and helps users achieve their goals. We combine research, wireframes, and high-fidelity design with reusable systems so your product stays consistent and scalable as it grows.",
    features: [
      "User research & wireframing",
      "High-fidelity UI mockups",
      "Interactive prototyping",
      "Design systems & component libraries",
      "Usability testing & iteration",
    ],
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80&auto=format&fit=crop",
    imageAlt: "UI design wireframes and components",
    heroImage:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=85&auto=format&fit=crop",
    approach: [
      "We align every screen with user goals and business outcomes, not just aesthetics.",
      "Wireframes and prototypes let you test flows before a single line of code is written.",
      "Design systems keep your product consistent and speed up future development.",
      "We iterate based on feedback and usability testing so the final UI truly works.",
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "Do you provide design-only or design + development?",
        answer:
          "We offer both. You can hire us for UI design only (handoff to your dev team) or for full design and development so one team owns the whole product.",
      },
    ],
  },
  {
    slug: "graphic-design",
    icon: PenTool,
    title: "Graphic Design",
    tagline: "Visuals that tell your story",
    description:
      "From brand identities to marketing collateral, we craft bold, memorable visuals. Whether it's a logo, social media kit, or full brand guide — we make you look exceptional.",
    longDescription:
      "Strong visuals build recognition and trust. We create logos, brand guidelines, marketing assets, and print-ready materials so your brand looks professional everywhere it appears.",
    features: [
      "Logo & brand identity design",
      "Marketing & social media graphics",
      "Illustrations & iconography",
      "Print design (brochures, packaging)",
      "Brand guidelines & style guides",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Creative graphic design workspace",
    heroImage:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=85&auto=format&fit=crop",
    approach: [
      "We start with your story and audience so every asset supports your message.",
      "From concept to final files, we deliver print- and digital-ready work.",
      "Brand guidelines ensure your team and partners use the brand consistently.",
      "We work in your tools (e.g. Canva, Figma) when needed so you can iterate yourself.",
    ],
    testimonials: sharedTestimonials,
  },
  {
    slug: "ai-integrations",
    icon: BrainCircuit,
    title: "AI Integrations",
    tagline: "Smarter software, less manual work",
    description:
      "We integrate AI and machine learning into your existing products and workflows — chatbots, recommendation engines, intelligent automation, and more.",
    longDescription:
      "AI can automate repetitive tasks, personalise experiences, and surface insights. We help you choose the right use cases and integrate models and APIs safely into your stack.",
    features: [
      "AI-powered chatbots & assistants",
      "Natural language processing",
      "Predictive analytics & recommendations",
      "Workflow automation with AI",
      "Custom model training & fine-tuning",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&auto=format&fit=crop",
    imageAlt: "AI neural network visualization",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=85&auto=format&fit=crop",
    approach: [
      "We identify where AI adds real value instead of adding tech for its own sake.",
      "We use proven APIs and platforms where possible to reduce cost and risk.",
      "Data privacy and security are built in from the start.",
      "We design for iteration so you can improve models and prompts over time.",
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "Do we need our own data to get started with AI?",
        answer:
          "It depends. Some solutions work with public or third-party data; others need your data for training or personalisation. We'll outline what's needed in the proposal.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Apps for iOS, Android, and beyond",
    description:
      "Native and cross-platform mobile apps designed for performance and delight. From concept to App Store, we handle the full lifecycle.",
    longDescription:
      "We build mobile apps that users love and that fit your business. From UX and UI to backend APIs and store submission, we take care of the full journey so you can focus on growth.",
    features: [
      "iOS & Android development",
      "Cross-platform (React Native, Flutter)",
      "App UI/UX design",
      "Backend & API development",
      "App Store submission & optimisation",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Mobile app on a smartphone",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=85&auto=format&fit=crop",
    approach: [
      "We choose native vs cross-platform based on your goals, timeline, and budget.",
      "Performance and battery impact are part of the design, not an afterthought.",
      "We design for both iOS and Android guidelines so the app feels at home on each platform.",
      "We handle store listings, screenshots, and submission so you can launch on time.",
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "How long does it take to build an app?",
        answer:
          "A simple app might take 8–12 weeks; a more complex product can take 4–6 months. We'll break the work into phases and give you a clear timeline and milestones.",
      },
    ],
  },
  {
    slug: "systems-software",
    icon: Server,
    title: "Systems & Software",
    tagline: "Robust systems built to scale",
    description:
      "Custom backend systems, APIs, databases, and cloud infrastructure — engineered for reliability, security, and growth. We build the engine behind your product.",
    longDescription:
      "Behind every great product is solid infrastructure. We design and build APIs, databases, and cloud systems that are secure, scalable, and maintainable so your business can grow without technical debt holding you back.",
    features: [
      "Custom software development",
      "API design & integration",
      "Cloud infrastructure & DevOps",
      "Database architecture",
      "Security & performance audits",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Server infrastructure and cloud systems",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85&auto=format&fit=crop",
    approach: [
      "We design for scale and maintenance from day one, not just the first release.",
      "APIs are documented and versioned so frontends and partners can integrate reliably.",
      "We use industry-standard security practices and can run audits when needed.",
      "Infrastructure is defined as code so deployments are repeatable and traceable.",
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "Do you take over existing systems?",
        answer:
          "Yes. We can refactor, extend, or migrate existing systems. We'll review your stack and recommend the best path — whether that's incremental improvement or a planned rewrite.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getRelatedServices(currentSlug: string, limit = 3): ServiceItem[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
