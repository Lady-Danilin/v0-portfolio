"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: Direction;
  blur?: boolean;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

function getVariants(direction: Direction, blur: boolean, distance: number): Variants {
  const offsets: Record<Direction, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      filter: blur ? "blur(8px)" : "blur(0px)",
      ...offsets[direction],
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
    },
  };
}

export function RevealOnScroll({
  children,
  direction = "up",
  blur = false,
  delay = 0,
  duration = 0.6,
  distance = 24,
  className = "",
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={getVariants(direction, blur, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
