import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Section } from "@/components/Section";
import { FlowLines } from "@/components/FlowLines";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  RESPONSE_TIME,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site-config";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact",
      description:
        "Contact FlowRiver Technologies in Accra about a website, web app, custom system, hosting or IT consultancy. WhatsApp, call, email or send a message.",
      path: "/contact",
    }),
  component: ContactPage,
});

const contactFaqs = [
  {
    question: "What should I include in my message?",
    answer:
      "A short description of what you need, who it's for, and any deadline or budget you have in mind. Links to sites you like are helpful too. Don't worry if you don't have all the details yet.",
  },
  {
    question: "What happens after I get in touch?",
    answer:
      "I'll reply with a few questions or suggest a short call. After that I send a proposal with scope, timeline and price. There's no obligation and no payment needed to start the conversation.",
  },
  {
    question: "Do you take on small projects?",
    answer:
      "Yes. I work on everything from single landing pages to full custom systems.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes. Maintenance, updates, troubleshooting and new features are all available after launch.",
  },
];

const channels = [
  {
    label: "WhatsApp",
    value: "Chat now",
    detail: SITE_PHONE_DISPLAY,
    href: WHATSAPP_URL,
    external: true,
    icon: MessageCircle,
    featured: true,
  },
  {
    label: "Call",
    value: SITE_PHONE_DISPLAY,
    detail: "Talk it through by phone",
    href: `tel:${SITE_PHONE}`,
    external: false,
    icon: Phone,
    featured: false,
  },
  {
    label: "Email",
    value: SITE_EMAIL,
    detail: `Reply ${RESPONSE_TIME}`,
    href: `mailto:${SITE_EMAIL}`,
    external: false,
    icon: Mail,
    featured: false,
  },
];

const nextSteps = [
  {
    title: "I read your message",
    description: `You get a reply ${RESPONSE_TIME}, usually with a few questions.`,
  },
  {
    title: "We have a short call",
    description:
      "A quick conversation to understand what you need. Free, with no obligation.",
  },
  {
    title: "You get a proposal",
    description:
      "A written scope, timeline and price, including what's out of scope.",
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function ContactPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <Section
        tone="ink"
        className="overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24"
      >
        <FlowLines className="opacity-70" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <AnimatedSection className="min-w-0">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Let&apos;s talk about your project.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Message me on WhatsApp, call, or send the form below with
              whatever detail you have. You&apos;ll be talking to me, the
              person who will build it.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              Accra, Ghana · working with clients in Ghana and abroad
            </p>
          </AnimatedSection>

          <ul className="grid min-w-0 gap-3">
            {channels.map((c, i) => (
              <motion.li
                key={c.label}
                initial={reduce ? false : { opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
              >
                <motion.a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  className={cn(
                    "group flex items-center gap-4 rounded-2xl border p-4 transition-colors sm:p-5",
                    c.featured
                      ? "border-transparent bg-[#0E7A3E] text-white shadow-lg shadow-black/30 hover:bg-[#0c6b36]"
                      : "border-white/10 bg-[#111c36] hover:border-primary/50 hover:bg-[#16233f]"
                  )}
                >
                  <span
                    className={cn(
                      "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                      c.featured
                        ? "bg-white/15"
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    {c.featured && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-xl bg-white/25 motion-safe:animate-ping"
                        style={{ animationDuration: "2.4s" }}
                      />
                    )}
                    <c.icon className="relative h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-xs font-semibold uppercase tracking-widest",
                        c.featured ? "text-white/80" : "text-muted-foreground"
                      )}
                    >
                      {c.label}
                    </span>
                    <span className="block font-display text-lg font-semibold break-all sm:break-normal sm:truncate">
                      {c.value}
                    </span>
                    <span
                      className={cn(
                        "block text-sm",
                        c.featured ? "text-white/80" : "text-muted-foreground"
                      )}
                    >
                      {c.detail}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-14">
          <AnimatedSection className="lg:col-span-3">
            <div className="surface p-6 shadow-xl sm:p-8">
              <h2 className="font-display text-2xl font-bold">
                Send a message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Prefer writing it down? Fill this in and I&apos;ll reply by
                email.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>

          <div className="lg:col-span-2 lg:pt-8">
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-xl font-bold">
                What happens next
              </h2>
            </AnimatedSection>
            <ol className="relative mt-8 space-y-8">
              <motion.span
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-[19px] w-px origin-top bg-gradient-to-b from-primary via-indigo to-cyan"
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease }}
              />
              {nextSteps.map((step, i) => (
                <AnimatedSection
                  as="li"
                  key={step.title}
                  delay={0.2 + i * 0.18}
                  className="relative flex gap-5"
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground ring-8 ring-tint">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </ol>

            <AnimatedSection delay={0.6} className="mt-10">
              <div className="surface flex items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <p className="text-sm text-muted-foreground">
                  Need it urgently?{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    WhatsApp is fastest
                  </a>
                  .
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <AnimatedSection delay={0.1} className="surface px-6 lg:col-span-2">
            <FaqAccordion items={contactFaqs} />
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
