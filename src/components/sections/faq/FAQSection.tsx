"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { faqData } from "@/lib/faq-data";
import FAQBadge from "./components/FAQBadge";
import FAQItemComponent from "./components/FAQItemComponent";

const FAQSection = () => {
  return (
    <section 
      id="faq"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-[#0f1419] to-[#0A192F]"
      aria-labelledby="faq-heading"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      {/* Gradient masks for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-transparent to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-2xl">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-4 sm:mb-5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Suas Dúvidas Respondidas
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Eliminando qualquer hesitação que possa estar te impedindo de transformar seu negócio
            </motion.p>
          </motion.div>

          {/* FAQ Items Container */}
          <motion.div 
            className="space-y-4 sm:space-y-5 lg:space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {faqData.slice(0, 5).map((faq, index) => (
              <FAQItemComponent key={faq.id} faq={faq} index={index} />
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
            <p className="text-base sm:text-lg text-gray-400 mb-4">
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