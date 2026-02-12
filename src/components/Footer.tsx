import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const secondaryLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { href: "https://twitter.com/flowrivertech", label: "Twitter", icon: "𝕏" },
  { href: "https://linkedin.com/company/flowrivertech", label: "LinkedIn", icon: "in" },
  { href: "https://instagram.com/flowrivertech", label: "Instagram", icon: "ig" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="FlowRiver Technologies"
                width={180}
                height={45}
                className="h-10 w-auto sm:h-11"
              />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Empowering businesses with intelligent software that flows
              seamlessly into your workflow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
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

          {/* Legal & Social */}
          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                Legal
              </h3>
              <ul className="space-y-2">
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
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                Follow us
              </h3>
              <ul className="flex gap-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} FlowRiver Technologies. All rights reserved.</p>
          <p>Built with purpose. Designed to flow.</p>
        </div>
      </div>
    </footer>
  );
}
