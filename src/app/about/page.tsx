import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Target, Heart, Lightbulb, Rocket, Linkedin, Twitter, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about FlowRiver Technologies — our mission, values, and the team building the future of work.",
};

// Placeholder images: same as team page — replace with /team/name.jpg when ready
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
  {
    name: "John Adanini",
    role: "System Administrator",
    bio: "Keeps our infrastructure and client systems running smoothly. Responsible for servers, security, deployments, and reliability.",
    image: placeholderImage("John Adanini"),
    socials: { linkedin: "#" },
  },
  {
    name: "Kelvin Osei-Mensah Bonsu",
    role: "Software Engineer",
    bio: "Builds and maintains the software that powers our clients' products. Full-stack focus with an eye for clean code and user experience.",
    image: placeholderImage("Kelvin Osei-Mensah Bonsu"),
    socials: { linkedin: "#", github: "#" },
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — text left, image right */}
      <Section className="relative overflow-hidden pt-28 pb-12 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 left-1/3 h-[500px] w-[600px] rounded-full bg-primary/6 blur-3xl" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="max-w-xl">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Built by builders,{" "}
              <span className="text-primary">for builders</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              FlowRiver Technologies was founded on a simple belief: the best
              teams deserve software that works as hard as they do. We&apos;re a
              team of engineers, designers, and operators who&apos;ve lived the
              pain of disconnected tools — and decided to fix it.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-primary/5 lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                alt="FlowRiver team collaboration"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/6 blur-2xl"
            />
          </AnimatedSection>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-muted/20 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Our mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              To eliminate the friction between ideas and execution. We&apos;re
              building the operating system for modern teams — a single
              platform where work flows naturally from plan to delivery.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Our vision
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A world where teams spend zero time on process and 100% of their
              energy on meaningful work. Where software adapts to people, not
              the other way around.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What we stand for
          </h2>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Team — same card layout as team page */}
      <Section>
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Meet the team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A small but mighty team building and scaling digital products for
            our clients. <Link href="/team" className="font-medium text-primary underline-offset-4 hover:underline">View full team page</Link>
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="group flex flex-col gap-6 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:flex-row">
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:h-auto sm:w-40">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover"
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
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {t.socials.twitter && (
                      <a
                        href={t.socials.twitter}
                        aria-label={`${t.name} Twitter`}
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {t.socials.github && (
                      <a
                        href={t.socials.github}
                        aria-label={`${t.name} GitHub`}
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
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
