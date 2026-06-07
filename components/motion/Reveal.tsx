"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export interface RevealProps {
  children: ReactNode;
  /** seconds */
  delay?: number;
  /** px of upward travel on entrance */
  y?: number;
  className?: string;
  as?: "div" | "li" | "span";
}

/**
 * PURPOSE: hierarchy — content settles into place as the reader reaches it,
 * guiding the eye top-to-bottom without stealing attention.
 * Respects prefers-reduced-motion via Framer's reduced-motion hook.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: reduce ? 0.2 : 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
