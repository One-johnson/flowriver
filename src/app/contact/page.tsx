import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/app/contact/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FlowRiver Technologies. Start a free trial, book a demo, or ask us anything.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@flowriver.tech",
    href: "mailto:hello@flowriver.tech",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Accra, Ghana",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "We typically reply within 4 business hours",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-28 pb-12 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 left-1/4 h-[500px] w-[600px] rounded-full bg-primary/6 blur-3xl" />
        </div>

        <AnimatedSection className="max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s{" "}
            <span className="text-primary">start a conversation</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Whether you&apos;re ready to dive in or just exploring — we&apos;d
            love to hear from you. No sales pitch, just honest answers.
          </p>
        </AnimatedSection>
      </Section>

      {/* Form + Info */}
      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3" direction="left">
            <div className="rounded-xl border border-border/50 bg-card p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you
                shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact info sidebar */}
          <AnimatedSection className="lg:col-span-2" direction="right" delay={0.15}>
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-0.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ teaser */}
            <div className="mt-12 rounded-xl border border-border/50 bg-muted/30 p-6">
              <h3 className="font-display text-base font-semibold">
                Common questions
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    Is there a free plan?
                  </strong>{" "}
                  — Yes! Our Starter plan is free for up to 5 users.
                </li>
                <li>
                  <strong className="text-foreground">
                    How long is the trial?
                  </strong>{" "}
                  — 14 days, full access, no credit card required.
                </li>
                <li>
                  <strong className="text-foreground">
                    Can I cancel anytime?
                  </strong>{" "}
                  — Absolutely. No contracts, no cancellation fees.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
