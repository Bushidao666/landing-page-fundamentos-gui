/**
 * @file: ComparisonCard.tsx
 * @responsibility: Comparison card showing traditional vs intelligent approach
 * @exports: ComparisonCard
 * @imports: motion (from framer-motion), Target (from lucide-react)
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

interface ComparisonItem {
  type: "traditional" | "intelligent";
  label: string;
  description: string;
}

interface ComparisonCardProps {
  title: string;
  items: ComparisonItem[];
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

export default function ComparisonCard({
  title,
  items,
  className = ""
}: ComparisonCardProps) {
  return (
    <motion.div 
      className={`bg-gradient-to-br from-gray-50 via-white to-gray-50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-gray-200/50 shadow-lg ${className}`}
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <h4 className="font-bold text-[#0A192F] mb-4 md:mb-6 text-base md:text-lg lg:text-xl flex items-center gap-2 md:gap-3">
        <Target className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
        {title}
      </h4>
      <div className="grid gap-3 md:gap-4">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            className={`flex gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl border ${
              item.type === "traditional" 
                ? "bg-red-50/50 border-red-100" 
                : "bg-green-50/50 border-green-100"
            }`}
            whileHover={{ x: 5 }}
          >
            <span className={`font-bold text-lg md:text-xl ${
              item.type === "traditional" ? "text-red-500" : "text-green-500"
            }`}>
              {item.type === "traditional" ? "❌" : "✅"}
            </span>
            <span className="text-gray-700 text-sm md:text-base">
              <strong className={item.type === "traditional" ? "text-red-600" : "text-green-600"}>
                {item.label}:
              </strong>{" "}
              {item.description}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}