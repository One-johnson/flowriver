export const SITE_EMAIL = "support@flowrivertechnologies.com";

/** Promised reply time, shown on the contact page, form and footer. */
export const RESPONSE_TIME = "within 4 business hours";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

// TODO: confirm these handles exist before launch.
export const socialLinks = [
  { href: "https://twitter.com/flowrivertech", label: "Twitter" },
  { href: "https://linkedin.com/company/flowrivertech", label: "LinkedIn" },
  { href: "https://instagram.com/flowrivertech", label: "Instagram" },
] as const;
