"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

/**
 * @file: FAQBadge.tsx
 * @responsibility: FAQ section badge with animated icon
 * @exports: FAQBadge
 * @imports: motion (framer-motion), HelpCircle (lucide-react)
 * @layer: components
 */

const FAQBadge = () => (
  <motion.div
    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
    </motion.div>
    <span className="text-[#D4AF37] font-semibold text-xs sm:text-sm uppercase tracking-wider">
      Perguntas Frequentes
    </span>
  </motion.div>
);

export default FAQBadge;