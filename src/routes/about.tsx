import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { ClientMarquee } from "@/components/ClientMarquee";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About",
      description:
        "FlowRiver Technologies is a design and development studio in Accra, Ghana. Meet the team and see how we work.",
      path: "/about",
    }),
  component: AboutPage,
});

const values = [
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
    title: "Work that lasts",
    description:
      "Maintainable code and documented designs, so your site or system keeps working after handover.",
  },
  {
    title: "Support after launch",
    description:
      "We stay available for fixes, updates and new features once the project is live.",
  },
];

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/team/prince-johnson.jpg". Initials are shown when absent. */
  photo?: string;
  socials: { linkedin?: string; twitter?: string; github?: string };
};

// TODO: add real photos to /public/team and real profile URLs.
const team: TeamMember[] = [
  {
    name: "Prince Johnson",
    role: "Founder and CEO",
    bio: "Runs FlowRiver, leads client relationships and oversees every project from scoping to delivery. Also works as an IT and ERP consultant on a public-sector implementation.",
    socials: {},
  },
  {
    name: "Ernest Des-Border",
    role: "Senior Developer and Mentor",
    bio: "Leads technical decisions and code quality, and mentors the developers who work with us.",
    socials: {},
  },
];

const socialIcons = {
  linkedin: { icon: Linkedin, label: "LinkedIn" },
  twitter: { icon: Twitter, label: "Twitter" },
  github: { icon: Github, label: "GitHub" },
} as const;

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small studio in Accra that builds and looks after software."
        description="FlowRiver Technologies designs and builds websites, apps and business systems for businesses, unions, schools and NGOs. We're a small team, so the people you talk to are the people doing the work."
      />

      <Section>
        <SectionHeader eyebrow="Values" title="How we work with clients" />
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

      <Section id="team" tone="tint" className="scroll-mt-20">
        <SectionHeader eyebrow="Team" title="The people you'll work with" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((person, i) => {
            const socials = (
              Object.keys(socialIcons) as (keyof typeof socialIcons)[]
            ).filter((key) => person.socials[key]);
            return (
              <AnimatedSection key={person.name} delay={i * 0.06}>
                <div className="surface flex h-full gap-5 p-6">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo to-cyan font-display text-xl font-semibold text-white">
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <span aria-hidden="true">{initials(person.name)}</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="font-display text-lg font-semibold">
                      {person.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {person.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {person.bio}
                    </p>
                    {socials.length > 0 && (
                      <div className="mt-4 flex gap-2">
                        {socials.map((key) => {
                          const { icon: Icon, label } = socialIcons[key];
                          return (
                            <a
                              key={key}
                              href={person.socials[key]}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${person.name} on ${label}`}
                              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary"
                            >
                              <Icon className="h-4 w-4" />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeader
          eyebrow="Clients"
          title="Who we've built for"
          description="Unions, foundations, conferences and businesses across Ghana."
        />
        <ClientMarquee className="mt-12" />
      </Section>

      <CTABanner
        title="Want to work with us?"
        description="Clients and developers are both welcome to get in touch."
        primaryLabel="Contact us"
        primaryTo="/contact"
      />
    </>
  );
}
