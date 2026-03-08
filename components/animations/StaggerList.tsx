"use client";

import { motion, useReducedMotion } from "framer-motion";

interface StaggerListProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  itemDelay?: number;
  direction?: "up" | "none";
  className?: string;
  itemClassName?: string;
}

export function StaggerList({
  children,
  staggerDelay = 0.08,
  itemDelay = 0,
  direction = "up",
  className = "",
  itemClassName = "",
}: StaggerListProps) {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: itemDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: direction === "up" ? 20 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={item} className={itemClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
