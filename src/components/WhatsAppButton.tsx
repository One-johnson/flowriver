import { useRouterState } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";

const message = encodeURIComponent(
  "Hi Prince, I found FlowRiver Technologies online and I'd like to talk about a project."
);

/** Fixed WhatsApp chat button. Hidden on /contact, which has its own. */
export function WhatsAppButton() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/contact") return null;

  return (
    <a
      href={`${WHATSAPP_URL}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#0E7A3E] p-3.5 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7A3E] sm:right-6 sm:bottom-6 sm:px-5 print:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
