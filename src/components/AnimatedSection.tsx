import { motion, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Render as a list item when used directly inside <ul>/<ol>. */
  as?: "div" | "li";
}

const directionMap = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

/** Fades and slides its children in the first time they scroll into view. */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      initial={reduce ? false : { opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </Component>
  );
}
