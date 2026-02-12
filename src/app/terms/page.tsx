import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "FlowRiver Technologies terms of service — terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <Section className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl pt-28 pb-16 sm:pt-36">
      <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      <p className="text-muted-foreground">Last updated: February 2025</p>

      <h2 className="font-display text-xl font-semibold mt-8">1. Agreement</h2>
      <p>
        By accessing or using the FlowRiver Technologies website and services, you agree to be bound by these Terms
        of Service. If you do not agree, please do not use our site or services.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">2. Use of the website</h2>
      <p>
        You may use our website for lawful purposes only. You must not use it in any way that violates applicable
        laws, infringes others&apos; rights, or disrupts the operation or security of our systems.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">3. Services and projects</h2>
      <p>
        Specific projects (web design, development, etc.) are governed by separate agreements or statements of work.
        Proposals and quotes are subject to acceptance and may be revised by mutual agreement.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">4. Intellectual property</h2>
      <p>
        Content on this website (including text, graphics, and logos) is owned by FlowRiver Technologies or
        licensors. Deliverables under client projects are assigned as set out in the relevant project agreement.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">5. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, FlowRiver Technologies shall not be liable for indirect, incidental,
        or consequential damages arising from your use of the website or our services. Our liability is limited as
        set out in any applicable project agreement.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">6. Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the website after changes constitutes
        acceptance of the updated terms.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">7. Contact</h2>
      <p>
        For questions about these Terms of Service, please contact us via our{" "}
        <a href="/contact" className="text-primary underline-offset-4 hover:underline">Contact</a> page.
      </p>
    </Section>
  );
}
