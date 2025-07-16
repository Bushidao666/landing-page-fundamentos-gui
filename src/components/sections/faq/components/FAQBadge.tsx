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
    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full mb-6 sm:mb-8"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      whileHover={{ scale: 1.1 }}
    >
      <HelpCircle className="w-5 h-5 sm:w-5 sm:h-5 text-[#D4AF37]" />
    </motion.div>
    <span className="text-[#D4AF37] font-semibold text-sm sm:text-sm uppercase tracking-wider">
      Perguntas Frequentes
    </span>
  </motion.div>
);

export default FAQBadge;