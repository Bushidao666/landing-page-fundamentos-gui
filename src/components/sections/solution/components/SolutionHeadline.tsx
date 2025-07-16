/**
 * @file: SolutionHeadline.tsx
 * @responsibility: Animated headline component with shimmer effect
 * @exports: SolutionHeadline
 * @imports: motion (from framer-motion)
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";

interface SolutionHeadlineProps {
  preTitle: string;
  mainTitle: string;
  subTitle: string;
  className?: string;
}

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function SolutionHeadline({
  preTitle,
  mainTitle,
  subTitle,
  className = ""
}: SolutionHeadlineProps) {
  return (
    <motion.div className={`space-y-3 md:space-y-4 lg:space-y-5 ${className}`} variants={itemVariants}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-black leading-tight md:leading-tight lg:leading-tight tracking-tight text-[#0A192F]">
        <span className="block text-gray-600 text-base md:text-lg lg:text-xl font-normal mb-2 md:mb-3 lg:mb-4">
          {preTitle}
        </span>
        <motion.span 
          className="block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] via-[#FFA500] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {mainTitle}
        </motion.span>
        <span className="block text-gray-700 text-lg md:text-xl lg:text-2xl font-light mt-1 md:mt-2">
          {subTitle}
        </span>
      </h2>
    </motion.div>
  );
}