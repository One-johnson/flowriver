import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
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

// Placeholder images: replace with real photos in public/team/ (e.g. prince-johnson.jpg) when ready
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
      {/* Hero — text left, image right */}
      <Section className="relative overflow-hidden pt-28 pb-12 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 right-1/4 h-[500px] w-[600px] rounded-full bg-primary/6 blur-3xl" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="max-w-xl">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              The people behind{" "}
              <span className="text-primary">the pixels</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We&apos;re a tight-knit team of designers, developers, and
              strategists who genuinely love what we do. Meet the people building
              FlowRiver.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-primary/5 lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
                alt="FlowRiver team"
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

      {/* Team */}
      <Section>
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our team
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            The people behind FlowRiver Technologies — building, shipping, and
            supporting great digital products.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {teamMembers.map((person, i) => (
            <AnimatedSection key={person.name} delay={i * 0.1}>
              <div className="group flex flex-col gap-6 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:flex-row">
                {/* Photo — replace image path with /team/your-photo.jpg when ready */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:h-auto sm:w-40">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover"
                  />
                </div>

                {/* Info */}
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
                  {/* Socials */}
                  <div className="mt-4 flex gap-2">
                    {person.socials.linkedin && (
                      <a
                        href={person.socials.linkedin}
                        aria-label={`${person.name} LinkedIn`}
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {person.socials.twitter && (
                      <a
                        href={person.socials.twitter}
                        aria-label={`${person.name} Twitter`}
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {person.socials.github && (
                      <a
                        href={person.socials.github}
                        aria-label={`${person.name} GitHub`}
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

      {/* Culture / values */}
      <Section>
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How we work together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our culture isn&apos;t something we hang on a wall — it&apos;s how
            we show up every day.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-border/50 bg-card p-6">
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

      {/* Join CTA */}
      <Section className="bg-muted/20">
        <AnimatedSection>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Want to join the team?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                We&apos;re always looking for talented people who care about
                craft. Even if we don&apos;t have an open role that fits, we&apos;d love
                to hear from you.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button asChild size="lg" className="text-base">
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
