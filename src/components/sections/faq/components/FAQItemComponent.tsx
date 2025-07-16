"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FAQIcon from "./FAQIcon";
import FAQToggle from "./FAQToggle";
import type { FAQItem as FAQItemType } from "@/lib/faq-data";

/**
 * @file: FAQItemComponent.tsx
 * @responsibility: Individual FAQ item with expand/collapse functionality
 * @exports: FAQItemComponent
 * @imports: FAQIcon, FAQToggle, motion, FAQItemType
 * @layer: components
 */

interface FAQItemComponentProps {
  faq: FAQItemType;
  index: number;
}

const FAQItemComponent: React.FC<FAQItemComponentProps> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  // Format answer with proper styling
  const formatAnswer = (text: string) => {
    return text
      .replace(/\*(.*?)\*/g, '<span class="text-white font-medium">$1</span>')
      .replace(/\*\*(.*?)\*\*/g, '<span class="text-[#D4AF37] font-semibold">$1</span>');
  };

  return (
    <motion.div
      className="group bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Question Button */}
      <button
        className="w-full p-5 sm:p-6 lg:p-7 text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0A192F] rounded-xl sm:rounded-2xl transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <div className="flex items-start gap-4 sm:gap-4 lg:gap-5">
          {/* Icon */}
          <FAQIcon icon={faq.icon} />
          
          {/* Question Text */}
          <div className="flex-1 pt-0.5">
            <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-white leading-relaxed">
              <span className="text-[#D4AF37] mr-1">P:</span> 
              <span className="group-hover:text-[#D4AF37] transition-colors duration-300">
                {faq.question}
              </span>
            </h3>
          </div>
          
          {/* Toggle Button */}
          <FAQToggle isOpen={isOpen} />
        </div>
      </button>

      {/* Answer Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: contentHeight, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="px-5 pb-5 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4 sm:mb-5" />
              
              {/* Answer Text */}
              <div className="pl-14 sm:pl-15 lg:pl-17">
                <p 
                  className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: `<span class="text-[#D4AF37] font-semibold mr-1">R:</span> ${formatAnswer(faq.answer)}`
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItemComponent;