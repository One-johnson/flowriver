import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/app/contact/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SITE_EMAIL } from "@/lib/site-config";
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
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
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
      <PageHero
        badge="Contact"
        title={
          <>
            Let&apos;s{" "}
            <span className="gradient-text">start a conversation</span>
          </>
        }
        description="Whether you're ready to dive in or just exploring — we'd love to hear from you. No sales pitch, just honest answers."
        image={{
          src: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80&auto=format&fit=crop",
          alt: "Get in touch",
        }}
      />

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-3" direction="left">
            <div className="glass-card p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" direction="right" delay={0.15}>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="glass-card flex gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card mt-8 p-6">
              <h3 className="font-display text-base font-semibold">
                Frequently asked questions
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Quick answers to common questions.
              </p>
              <div className="mt-4">
                <FaqAccordion items={contactFaqs} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
