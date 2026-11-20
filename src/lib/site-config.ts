export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://flowrivertechnologies.com"
).replace(/\/$/, "");

export const SITE_NAME = "FlowRiver Technologies";

export const SITE_EMAIL = "support@flowrivertechnologies.com";

/** Promised reply time, shown on the contact page, form and footer. */
export const RESPONSE_TIME = "within 4 business hours";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

// TODO: confirm these handles exist before launch.
export const socialLinks = [
  { href: "https://twitter.com/flowrivertech", label: "Twitter" },
  { href: "https://linkedin.com/company/flowrivertech", label: "LinkedIn" },
  { href: "https://instagram.com/flowrivertech", label: "Instagram" },
] as const;
