import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the FlowRiver Technologies team — designers, developers, and strategists building exceptional digital experiences.",
};

const placeholderImage = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=0ea5e9&color=fff`;

const teamMembers = [
  {
    name: "Prince Johnson",
    role: "CEO and Founder",
    bio: "Leading FlowRiver Technologies with a vision to deliver exceptional digital solutions. Focused on building lasting client relationships and a team that ships quality work.",
    image: placeholderImage("Prince Johnson"),
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Ernest Des-Border",
    role: "Senior Developer and Mentor",
    bio: "Brings deep technical expertise and a passion for mentoring. Ensures our codebase and practices stay sharp while helping the team grow.",
    image: placeholderImage("Ernest Des-Border"),
    socials: { linkedin: "#", github: "#" },
  },
];

const values = [
  {
    title: "Craft over speed",
    description:
      "We move fast, but never at the expense of quality. Every detail matters.",
  },
  {
    title: "Radical transparency",
    description:
      "No hidden agendas. We share progress, challenges, and decisions openly with clients and each other.",
  },
  {
    title: "Continuous growth",
    description:
      "Weekly learning sessions, conference budgets, and a culture that celebrates curiosity.",
  },
  {
    title: "Work-life balance",
    description:
      "Flexible hours, remote-first, and unlimited PTO that people actually use.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        badge="Our team"
        title={
          <>
            The people behind{" "}
            <span className="gradient-text">the pixels</span>
          </>
        }
        description="We're a tight-knit team of designers, developers, and strategists who genuinely love what we do. Meet the people building FlowRiver."
        image={{
          src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop",
          alt: "FlowRiver team",
        }}
      />

      <Section>
        <AnimatedSection>
          <SectionHeader
            badge="Team"
            title="Our team"
            description="The people behind FlowRiver Technologies — building, shipping, and supporting great digital products."
            align="left"
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {teamMembers.map((person, i) => (
            <AnimatedSection key={person.name} delay={i * 0.08}>
              <div className="glass-card card-hover group flex flex-col gap-6 p-6 sm:flex-row">
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-muted sm:h-auto sm:w-40">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-lg font-bold">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {person.role}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {person.bio}
                  </p>
                  <div className="mt-4 flex gap-2">
                    {person.socials.linkedin && (
                      <a
                        href={person.socials.linkedin}
                        aria-label={`${person.name} LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {person.socials.twitter && (
                      <a
                        href={person.socials.twitter}
                        aria-label={`${person.name} Twitter`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {person.socials.github && (
                      <a
                        href={person.socials.github}
                        aria-label={`${person.name} GitHub`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <AnimatedSection>
          <SectionHeader
            badge="Culture"
            title="How we work together"
            description="Our culture isn't something we hang on a wall — it's how we show up every day."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.08}>
              <div className="glass-card card-hover h-full p-6">
                <h3 className="font-display text-base font-semibold">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="glass-card flex flex-col items-center gap-8 p-8 text-center sm:p-12 lg:flex-row lg:text-left">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Want to join the team?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                We&apos;re always looking for talented people who care about
                craft. Even if we don&apos;t have an open role that fits,
                we&apos;d love to hear from you.
              </p>
            </div>
            <div className="flex shrink-0">
              <Button asChild size="lg" className="rounded-xl text-base">
                <Link href="/contact">
                  <Mail className="mr-1 h-4 w-4" />
                  Get in touch
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
