import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/app/contact/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RESPONSE_TIME, SITE_EMAIL } from "@/lib/site-config";

const contactFaqs = [
  {
    question: "What should I include in my message?",
    answer:
      "A short description of what you need, who it's for, and any deadline or budget you have in mind. Links to sites you like are helpful too. Don't worry if you don't have all the details yet.",
  },
  {
    question: "What happens after I get in touch?",
    answer:
      "We'll reply with a few questions or suggest a short call. After that we send a proposal with scope, timeline and price. There's no obligation and no payment needed to start the conversation.",
  },
  {
    question: "Do you take on small projects?",
    answer:
      "Yes. We work on everything from single landing pages and logo designs to full custom systems.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes. Maintenance, updates, troubleshooting and new features are all available after launch.",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FlowRiver Technologies in Accra about a website, app, system or design project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project"
        description={`Send a message with whatever detail you have. We reply ${RESPONSE_TIME}.`}
      />

      <Section className="border-t border-border pt-12 sm:pt-12 lg:pt-12">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="surface p-6 sm:p-8 lg:col-span-3">
            <h2 className="font-display text-xl font-bold">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <dl className="space-y-6">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {SITE_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Location
                </dt>
                <dd className="mt-1 font-medium">Accra, Ghana</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Reply time
                </dt>
                <dd className="mt-1 font-medium">
                  {RESPONSE_TIME.charAt(0).toUpperCase() + RESPONSE_TIME.slice(1)}
                </dd>
              </div>
            </dl>

            <div className="mt-12 border-t border-border pt-8">
              <h2 className="font-display text-lg font-semibold">
                Common questions
              </h2>
              <div className="mt-4">
                <FaqAccordion items={contactFaqs} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
