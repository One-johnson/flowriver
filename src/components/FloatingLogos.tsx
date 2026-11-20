import { motion, useReducedMotion } from "framer-motion";
import { clientLogos } from "@/components/ClientMarquee";
import { cn } from "@/lib/utils";

/** Grid of client logos that drift gently up and down. */
export function FloatingLogos({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const logos = clientLogos.slice(0, 6);
  return (
    <ul className={cn("grid grid-cols-2 gap-4 sm:grid-cols-3", className)}>
      {logos.map((logo, i) => (
        <motion.li
          key={logo.src}
          initial={{ opacity: 0, y: 16 }}
          animate={
            reduce
              ? { opacity: 1, y: 0 }
              : { opacity: 1, y: [0, i % 2 ? -10 : 10, 0] }
          }
          transition={{
            opacity: { duration: 0.5, delay: i * 0.08 },
            y: reduce
              ? { duration: 0.5, delay: i * 0.08 }
              : {
                  duration: 5 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                },
          }}
          className={cn(
            "flex aspect-[4/3] items-center justify-center rounded-2xl bg-white p-4 shadow-xl shadow-black/20 ring-1 ring-white/10",
            i % 3 === 1 && "sm:translate-y-6"
          )}
        >
          <img
            src={logo.src}
            alt={logo.name}
            decoding="async"
            className="max-h-full max-w-full object-contain"
          />
        </motion.li>
      ))}
    </ul>
  );
}
