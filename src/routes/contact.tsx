import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RESPONSE_TIME, SITE_EMAIL } from "@/lib/site-config";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact",
      description:
        "Contact FlowRiver Technologies in Accra about a website, app, system or design project.",
      path: "/contact",
    }),
  component: ContactPage,
});

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

const replyTime = RESPONSE_TIME.charAt(0).toUpperCase() + RESPONSE_TIME.slice(1);

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project"
        description={`Send a message with whatever detail you have. We reply ${RESPONSE_TIME}.`}
      />

      <Section tone="tint" className="pt-0 sm:pt-0 lg:pt-0">
        <div className="-mt-10 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="surface p-6 shadow-xl sm:p-8 lg:col-span-3">
            <h2 className="font-display text-xl font-bold">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6 pt-10 lg:col-span-2">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Accra, Ghana</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Reply time</p>
                  <p className="font-medium">{replyTime}</p>
                </div>
              </li>
            </ul>

            <div className="surface px-6 py-2">
              <h2 className="pt-4 font-display text-lg font-semibold">
                Common questions
              </h2>
              <FaqAccordion items={contactFaqs} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
