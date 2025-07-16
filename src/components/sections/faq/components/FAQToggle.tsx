"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/**
 * @file: FAQToggle.tsx
 * @responsibility: FAQ expand/collapse toggle button
 * @exports: FAQToggle
 * @imports: motion (framer-motion), Plus, Minus (lucide-react)
 * @layer: components
 */

interface FAQToggleProps {
  isOpen: boolean;
}

const FAQToggle: React.FC<FAQToggleProps> = ({ isOpen }) => (
  <motion.div 
    className="w-10 h-10 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    whileTap={{ scale: 0.95 }}
  >
    {isOpen ? (
      <Minus className="w-5 h-5 sm:w-5 sm:h-5 text-[#D4AF37]" />
    ) : (
      <Plus className="w-5 h-5 sm:w-5 sm:h-5 text-[#D4AF37]" />
    )}
  </motion.div>
);

export default FAQToggle;