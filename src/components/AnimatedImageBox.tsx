"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AnimatedImageBoxProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function AnimatedImageBox({
  src,
  alt,
  sizes = "(max-width: 1024px) 90vw, 45vw",
  priority = false,
  className = "",
  imageClassName = "object-cover",
}: AnimatedImageBoxProps) {
  return (
    <motion.div
      className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-primary/5 ${className}`}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.03 }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { type: "spring", stiffness: 300, damping: 25 },
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}
