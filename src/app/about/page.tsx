import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Target, Heart, Lightbulb, Rocket, Linkedin, Twitter, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about FlowRiver Technologies — our mission, values, and the team building the future of work.",
};

const placeholderImage = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=0ea5e9&color=fff`;

const values = [
  {
    icon: Target,
    title: "Clarity over complexity",
    description:
      "We believe the best software disappears into your workflow. Every feature earns its place.",
  },
  {
    icon: Heart,
    title: "Customer obsession",
    description:
      "We build what our customers need, not what looks good in a pitch deck. Every decision starts with you.",
  },
  {
    icon: Lightbulb,
    title: "Relentless iteration",
    description:
      "Ship, learn, improve. We release weekly and listen daily. Perfection is a direction, not a destination.",
  },
  {
    icon: Rocket,
    title: "Bold ambition",
    description:
      "We're not here to make incremental improvements. We're here to redefine how teams operate.",
  },
];

const team = [
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About us"
        title={
          <>
            Built by builders,{" "}
            <span className="gradient-text">for builders</span>
          </>
        }
        description="FlowRiver Technologies was founded on a simple belief: the best teams deserve software that works as hard as they do. We're a team of engineers, designers, and operators who've lived the pain of disconnected tools — and decided to fix it."
        image={{
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
          alt: "FlowRiver team collaboration",
        }}
      />

      <Section className="bg-muted/30 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedSection>
            <div className="glass-card h-full p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Our mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                To eliminate the friction between ideas and execution. We&apos;re
                building the operating system for modern teams — a single
                platform where work flows naturally from plan to delivery.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card h-full p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Our vision
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A world where teams spend zero time on process and 100% of their
                energy on meaningful work. Where software adapts to people, not
                the other way around.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader
            badge="Values"
            title="What we stand for"
            align="left"
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.08}>
              <div className="glass-card card-hover flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <AnimatedSection>
          <SectionHeader
            badge="Team"
            title="Meet the team"
            description={
              <>
                A small but mighty team building and scaling digital products for
                our clients.{" "}
                <Link
                  href="/team"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  View full team page
                </Link>
              </>
            }
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div className="glass-card card-hover group flex flex-col gap-6 p-6 sm:flex-row">
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-muted sm:h-auto sm:w-40">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-lg font-bold">{t.name}</h3>
                  <p className="text-sm font-medium text-primary">{t.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t.bio}
                  </p>
                  <div className="mt-4 flex gap-2">
                    {t.socials.linkedin && (
                      <a
                        href={t.socials.linkedin}
                        aria-label={`${t.name} LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {t.socials.twitter && (
                      <a
                        href={t.socials.twitter}
                        aria-label={`${t.name} Twitter`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {t.socials.github && (
                      <a
                        href={t.socials.github}
                        aria-label={`${t.name} GitHub`}
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
    </>
  );
}
