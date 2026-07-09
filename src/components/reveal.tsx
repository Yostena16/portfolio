"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** delay in seconds before the animation starts */
  delay?: number;
  /** slide-in direction */
  direction?: "up" | "left" | "right";
  className?: string;
};

const offset = {
  up: { x: 0, y: 32 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const from = offset[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
