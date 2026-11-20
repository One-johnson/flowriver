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

/** Phone and WhatsApp number, in international format and as displayed. */
export const SITE_PHONE = "+233553301044";
export const SITE_PHONE_DISPLAY = "055 330 1044";
export const WHATSAPP_URL = "https://wa.me/233553301044";

// Company social accounts. Add entries once the accounts exist; the
// footer hides the "Follow us" list while this is empty.
export const socialLinks: { href: string; label: string }[] = [];
