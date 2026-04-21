"use client";

import { motion, type MotionProps } from "framer-motion";

type MotionInViewProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function MotionInView({
  children,
  className,
  delay = 0,
  ...props
}: MotionInViewProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
