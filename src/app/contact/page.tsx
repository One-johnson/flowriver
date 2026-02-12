import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/app/contact/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Mail, MapPin, Clock } from "lucide-react";

const contactFaqs = [
  {
    question: "What services does FlowRiver Technologies provide?",
    answer:
      "We specialize in innovative technology solutions tailored to your business needs. Our core offerings include custom software development, system integration, automation tools, and ongoing technical support—delivered directly to help your operations run smoothly and efficiently.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "It's simple: Reach out via our contact form, email, or phone. We'll schedule an initial consultation (no obligation) to understand your requirements and propose a tailored solution. No payment details are needed to begin the conversation.",
  },
  {
    question: "What is the typical response time for enquiries?",
    answer:
      "We aim to respond within 4 business hours during standard working days. For time-sensitive matters, please indicate urgency in your message—we prioritize accordingly to ensure prompt attention.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. We provide comprehensive post-delivery support, including maintenance, updates, troubleshooting, and enhancements as your needs evolve. Our goal is long-term partnership and reliable service you can count on.",
  },
];

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
      {/* Hero — text left, image right */}
      <Section className="relative overflow-hidden pt-28 pb-12 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 left-1/4 h-[500px] w-[600px] rounded-full bg-primary/6 blur-3xl" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="max-w-xl">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s{" "}
              <span className="text-primary">start a conversation</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Whether you&apos;re ready to dive in or just exploring — we&apos;d
              love to hear from you. No sales pitch, just honest answers.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-primary/5 lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80&auto=format&fit=crop"
                alt="Get in touch"
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

            {/* FAQs */}
            <div className="mt-12 rounded-xl border border-border/50 bg-muted/30 p-6">
              <h3 className="font-display text-base font-semibold mb-1">
                Frequently asked questions
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Quick answers to common questions.
              </p>
              <FaqAccordion items={contactFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
