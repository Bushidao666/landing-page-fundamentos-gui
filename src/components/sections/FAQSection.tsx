"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { faqData } from "@/lib/faq-data";

// Atomic Components
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

const FAQIcon = ({ icon: Icon }: { icon: React.ComponentType<any> }) => (
  <div className="relative flex-shrink-0">
    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A192F]" />
    </div>
    {/* Subtle glow on hover - handled by parent */}
    <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/20 blur-xl transition-all duration-300" />
  </div>
);

const FAQToggle = ({ isOpen }: { isOpen: boolean }) => (
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

const FAQItem = ({ faq, index }: { faq: typeof faqData[0], index: number }) => {
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
      className="group bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      {/* Question Button */}
      <button
        className="w-full p-4 sm:p-5 lg:p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0A192F] rounded-xl sm:rounded-2xl transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Icon */}
          <FAQIcon icon={faq.icon} />
          
          {/* Question Text */}
          <div className="flex-1 pt-0.5">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight">
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
            <div ref={contentRef} className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6">
              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3 sm:mb-4" />
              
              {/* Answer Text */}
              <div className="pl-12 sm:pl-14 lg:pl-15">
                <p 
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed"
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

const FAQSection = () => {
  return (
    <section 
      id="faq"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-[#0f1419] to-[#0A192F]"
      aria-labelledby="faq-heading"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-3xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <FAQBadge />

            {/* Title */}
            <motion.h2 
              id="faq-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Suas Dúvidas Respondidas
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Eliminando qualquer hesitação que possa estar te impedindo de transformar seu negócio
            </motion.p>
          </motion.div>

          {/* FAQ Items Container */}
          <motion.div 
            className="space-y-3 sm:space-y-4 lg:space-y-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {faqData.slice(0, 5).map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-8 sm:mt-10 lg:mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Ainda tem dúvidas?
            </p>
            <motion.a 
              href="mailto:suporte@exemplo.com"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Entre em contato conosco</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;