"use client"

import { motion } from "motion/react";

type AnimateSectionProps = React.ComponentProps<"section">;

const MotionSection = motion.create('section') as any

export default function AnimateSection({
  children,
  ...props
}: AnimateSectionProps) {
  return (
    <MotionSection
      {...props}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </MotionSection>
  );
}
