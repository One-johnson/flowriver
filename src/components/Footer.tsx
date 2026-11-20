import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  RESPONSE_TIME,
  SITE_EMAIL,
  navLinks,
  socialLinks,
} from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="theme-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 lg:col-span-4">
            <Link to="/" className="inline-flex rounded-md bg-white p-1.5">
              <img
                src="/logo.png"
                alt="FlowRiver Technologies"
                width={150}
                height={100}
                loading="lazy"
                className="h-14 w-auto"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A design and development studio in Accra. We build websites, apps
              and business systems for organisations in Ghana and abroad.
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                {SITE_EMAIL}
              </a>
              <p className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Accra, Ghana
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
            <h3 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-widest">
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
              <Button asChild className="mt-5">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} FlowRiver Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
