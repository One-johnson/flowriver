import { cn } from "@/lib/utils";

export const clientLogos = [
  { src: "/cwulog.png", name: "Communication Workers Union Ghana" },
  { src: "/simon-annan-foundation-logo.png", name: "Simon Annan Foundation" },
  { src: "/goldenmark-logo.png", name: "Goldenmark Ghana" },
  { src: "/seals.png", name: "SEALS Ghana" },
  { src: "/skillspro-logo.png", name: "SkillsPro Ltd" },
  { src: "/npsc.png", name: "National Procurement and Supply Conference" },
  { src: "/tendzu-ventures-logo.png", name: "Tendzu Ventures" },
];

/** Continuously scrolling row of client logos; pauses on hover. */
export function ClientMarquee({ className }: { className?: string }) {
  const row = [...clientLogos, ...clientLogos];
  return (
    <div
      className={cn(
        "group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <ul className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {row.map((logo, i) => (
          <li
            key={`${logo.src}-${i}`}
            aria-hidden={i >= clientLogos.length}
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5"
          >
            <img
              src={logo.src}
              alt={i >= clientLogos.length ? "" : logo.name}
              loading="lazy"
              decoding="async"
              className="max-h-full max-w-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
