"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem as FAQItemType } from "@/lib/faq-data";

interface FAQItemProps {
  faq: FAQItemType;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export default function FAQItem({ faq, isExpanded, onToggle, index }: FAQItemProps) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <div 
        className={cn(
          "bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300",
          isExpanded ? "border-[#D4AF37]/40 shadow-lg" : "border-white/10 hover:border-white/20"
        )}
      >
        {/* Pergunta - Header Clicável com melhor acessibilidade */}
        <button
          onClick={onToggle}
          className="w-full p-4 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-xl"
          aria-expanded={isExpanded}
          aria-controls={`answer-${faq.id}`}
        >
          <div className="flex items-start gap-3 md:gap-4">
            {/* Ícone otimizado */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#D4AF37]/30 group-hover:to-[#D4AF37]/20 transition-colors">
              {(() => {
                const Icon = faq.icon as React.ComponentType<{ className?: string }>;
                return <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />;
              })()}
            </div>
            
            {/* Pergunta com tipografia otimizada */}
            <h3 className="flex-1 text-base md:text-lg font-semibold text-gray-100 leading-snug pr-2">
              {faq.question}
            </h3>
            
            {/* Indicador de expansão minimalista */}
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isExpanded ? (
                  <Minus className="w-4 h-4 text-[#D4AF37]" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-400 group-hover:text-[#D4AF37] transition-colors" />
                )}
              </motion.div>
            </div>
          </div>
        </button>

        {/* Resposta - Com animação suave */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={`answer-${faq.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                {/* Separador sutil */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                
                {/* Resposta com formatação melhorada */}
                <div className="pl-12 md:pl-16 text-sm md:text-base text-gray-300 leading-relaxed">
                  <p dangerouslySetInnerHTML={{
                    __html: faq.answer
                      .replace(/\*(.*?)\*/g, '<em class="text-gray-100 font-medium not-italic">$1</em>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#D4AF37] font-semibold">$1</strong>')
                  }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}