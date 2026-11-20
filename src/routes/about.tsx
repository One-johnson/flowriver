import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { ClientMarquee } from "@/components/ClientMarquee";
import { SITE_EMAIL, WHATSAPP_URL } from "@/lib/site-config";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About",
      description:
        "FlowRiver Technologies is an independent design and development studio in Accra, Ghana, run by Prince Johnson.",
      path: "/about",
    }),
  component: AboutPage,
});

const values = [
  {
    title: "You work with me directly",
    description:
      "No account managers or handoffs. The person you brief is the person who designs, builds and supports your project.",
  },
  {
    title: "Clear scope and pricing",
    description:
      "You know what you're getting, when, and what it costs before any work begins.",
  },
  {
    title: "Plain communication",
    description:
      "Regular updates in plain language. If something changes, you hear about it early.",
  },
  {
    title: "Support after launch",
    description:
      "I stay available for fixes, updates and new features once the project is live, and I document everything so your site or system keeps working.",
  },
];

const founder = {
  name: "Prince Johnson",
  role: "Founder, designer and developer",
  /** Path under /public, e.g. "/team/prince-johnson.jpg". Initials are shown when absent. */
  photo: undefined as string | undefined,
  /** Personal LinkedIn profile URL. The icon is hidden while this is empty. */
  linkedin: "",
};

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An independent studio in Accra, run by one developer."
        description="FlowRiver Technologies is me, Prince Johnson. I design, build, host and look after websites, web apps and business systems for businesses, unions, schools and NGOs. Every project gets my full attention, from the first call to support after launch."
      />

      <Section id="founder" className="scroll-mt-20">
        <div className="grid items-start gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <AnimatedSection className="flex flex-col items-center text-center lg:w-64">
            <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo to-cyan font-display text-4xl font-semibold text-white">
              {founder.photo ? (
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <span aria-hidden="true">PJ</span>
              )}
            </div>
            <h2 className="mt-5 font-display text-xl font-bold">{founder.name}</h2>
            <p className="text-sm font-medium text-primary">{founder.role}</p>
            <div className="mt-4 flex gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Prince on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_EMAIL}`}
                aria-label="Email Prince"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Prince Johnson on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="max-w-2xl">
            <p className="eyebrow">Who you&apos;ll work with</p>
            <div className="mt-4 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I started FlowRiver to give organisations in Ghana websites and
                systems that are fast, easy to manage and properly looked after.
                I handle every project myself: scoping, design, development,
                hosting and support.
              </p>
              <p>
                Working with one person means there&apos;s nobody in between.
                You always know who is doing the work, decisions are quick, and
                the person who built your system is the one who fixes it.
              </p>
              <p>
                Alongside FlowRiver, I&apos;m an IT Consultant with SourceOne
                Management Services, currently the ERP consultant at Tema
                Development Company. That work feeds directly into the{" "}
                <Link
                  to="/services/$slug"
                  params={{ slug: "it-consultancy" }}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  IT consultancy
                </Link>{" "}
                I offer.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeader eyebrow="Values" title="How I work with clients" />
        <dl className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <AnimatedSection
              key={v.title}
              delay={i * 0.06}
              className="surface border-l-4 border-l-primary p-6"
            >
              <dt className="font-display text-lg font-semibold">{v.title}</dt>
              <dd className="mt-2 text-muted-foreground">{v.description}</dd>
            </AnimatedSection>
          ))}
        </dl>
      </Section>

      <Section tone="ink">
        <SectionHeader
          eyebrow="Clients"
          title="Who I've built for"
          description="Unions, foundations, conferences and businesses across Ghana."
        />
        <ClientMarquee className="mt-12" />
      </Section>

      <CTABanner
        title="Want to work together?"
        description="Tell me about your project and I'll reply with questions or a proposal."
        primaryLabel="Get in touch"
        primaryTo="/contact"
      />
    </>
  );
}
