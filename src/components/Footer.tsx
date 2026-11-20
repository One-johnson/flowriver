import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  RESPONSE_TIME,
  SITE_EMAIL,
  navLinks,
  socialLinks,
} from "@/lib/site-config";

const secondaryLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="FlowRiver Technologies"
                width={180}
                height={45}
                className="h-10 w-auto sm:h-11"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A design and development studio in Accra. We build websites,
              apps and business systems for organisations in Ghana and abroad.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                {SITE_EMAIL}
              </a>
              <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Accra, Ghana
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {secondaryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-widest text-foreground">
              Follow us
            </h3>
            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="surface p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us what you need. We reply {RESPONSE_TIME}.
              </p>
              <Button asChild className="mt-5 w-full sm:w-auto">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="opacity-50" />

        <div className="py-6 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FlowRiver Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
