import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "FlowRiver Technologies privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <Section className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl pt-28 pb-16 sm:pt-36">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: February 2025</p>

      <h2 className="font-display text-xl font-semibold mt-8">1. Introduction</h2>
      <p>
        FlowRiver Technologies (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
        This policy explains how we collect, use, and safeguard your information when you use our website or services.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">2. Information we collect</h2>
      <p>
        We may collect information you provide directly, such as name, email address, company name, and message content
        when you use our contact form. We may also collect usage data (e.g. pages visited, device type) via cookies or
        similar technologies where you have consented.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">3. How we use your information</h2>
      <p>
        We use your information to respond to enquiries, deliver services, improve our website and services, and
        communicate with you about projects and updates where relevant.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">4. Sharing and disclosure</h2>
      <p>
        We do not sell your personal information. We may share data with service providers (e.g. form handling,
        hosting) only as necessary to operate our business, subject to appropriate safeguards.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">5. Cookies</h2>
      <p>
        We may use cookies and similar technologies for essential site function, preferences (e.g. theme), and
        analytics. You can control cookies through your browser settings and our cookie notice.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">6. Security and retention</h2>
      <p>
        We take reasonable steps to protect your data. We retain your information only as long as needed for the
        purposes described in this policy or as required by law.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">7. Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or delete your personal data, or to
        object to or restrict certain processing. Contact us at the details on our Contact page to exercise these
        rights.
      </p>

      <h2 className="font-display text-xl font-semibold mt-8">8. Contact</h2>
      <p>
        For questions about this Privacy Policy or our practices, please contact us via our{" "}
        <a href="/contact" className="text-primary underline-offset-4 hover:underline">Contact</a> page.
      </p>
    </Section>
  );
}
