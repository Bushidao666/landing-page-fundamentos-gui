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
    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    {isOpen ? (
      <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
    ) : (
      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
    )}
  </motion.div>
);

export default FAQToggle;