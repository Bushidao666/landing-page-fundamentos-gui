"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, DollarSign, Check, Percent } from "lucide-react";
import { useState } from "react";

interface PaymentOption {
  id: 'installments' | 'cash';
  icon: typeof Calendar | typeof DollarSign;
  label: string;
  price: string;
  description: string;
  badge?: string;
  savings?: string;
}

const paymentOptions: PaymentOption[] = [
  {
    id: 'installments',
    icon: Calendar,
    label: 'Parcelado',
    price: '12x R$ 4,70',
    description: 'Sem juros no cartão',
    badge: 'POPULAR'
  },
  {
    id: 'cash',
    icon: DollarSign,
    label: 'À Vista',
    price: 'R$ 47,00',
    description: 'Pagamento único',
    savings: '5% OFF'
  }
];

interface PaymentOptionsOptimizedProps {
  selectedOption: 'installments' | 'cash';
  onOptionChange: (option: 'installments' | 'cash') => void;
}

export default function PaymentOptionsOptimized({ 
  selectedOption, 
  onOptionChange 
}: PaymentOptionsOptimizedProps) {
  const [isHovering, setIsHovering] = useState<string | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      {/* Section title */}
      <motion.h3 
        className="text-center text-sm sm:text-base text-gray-400 
                   font-medium mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Escolha a melhor forma de pagamento
      </motion.h3>

      {/* Payment options container - Optimized for mobile */}
      <div className="relative">
        {/* Background track */}
        <div className="absolute inset-0 bg-white/[0.03] 
                        rounded-2xl sm:rounded-3xl 
                        border border-white/10" />

        {/* Options grid - Stack on mobile, side-by-side on desktop */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 
                        gap-3 sm:gap-4 p-2 sm:p-3">
          
          {paymentOptions.map((option) => {
            const isSelected = selectedOption === option.id;
            const isHovered = isHovering === option.id;
            
            return (
              <motion.button
                key={option.id}
                className="relative group text-left"
                onClick={() => onOptionChange(option.id)}
                onHoverStart={() => setIsHovering(option.id)}
                onHoverEnd={() => setIsHovering(null)}
                whileTap={{ scale: 0.98 }}
                aria-pressed={isSelected}
                aria-label={`${option.label} - ${option.price}`}
              >
                {/* Card background with conditional styling */}
                <motion.div
                  className={`
                    relative overflow-hidden
                    rounded-xl sm:rounded-2xl
                    p-4 sm:p-5 lg:p-6
                    border-2 transition-all duration-300
                    ${isSelected 
                      ? 'bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD700]/5 border-[#D4AF37]/50' 
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }
                  `}
                  layout
                >
                  {/* Selected indicator animation */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br 
                                   from-[#D4AF37]/5 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Badge if applicable */}
                  {option.badge && (
                    <motion.div
                      className="absolute top-2 right-2 sm:top-3 sm:right-3"
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring",
                        delay: 0.1
                      }}
                    >
                      <span className="inline-flex items-center px-2 py-0.5 
                                     bg-gradient-to-r from-[#D4AF37] to-[#FFD700]
                                     text-[#0A192F] text-[10px] sm:text-xs 
                                     font-bold uppercase tracking-wider
                                     rounded-full shadow-lg">
                        {option.badge}
                      </span>
                    </motion.div>
                  )}

                  {/* Savings badge */}
                  {option.savings && (
                    <motion.div
                      className="absolute top-2 right-2 sm:top-3 sm:right-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                    >
                      <span className="inline-flex items-center gap-1 
                                     px-2 py-0.5 
                                     bg-green-500/20 border border-green-500/30
                                     text-green-400 text-[10px] sm:text-xs 
                                     font-bold rounded-full">
                        <Percent className="w-3 h-3" />
                        {option.savings}
                      </span>
                    </motion.div>
                  )}

                  {/* Main content */}
                  <div className="relative space-y-3 sm:space-y-4">
                    {/* Icon and label */}
                    <div className="flex items-start gap-3">
                      {/* Icon container */}
                      <motion.div 
                        className={`
                          flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12
                          rounded-xl sm:rounded-2xl
                          flex items-center justify-center
                          transition-all duration-300
                          ${isSelected 
                            ? 'bg-gradient-to-br from-[#D4AF37] to-[#FFD700] shadow-lg' 
                            : 'bg-white/10'
                          }
                        `}
                        animate={isSelected ? {
                          boxShadow: [
                            "0 0 0 0 rgba(212, 175, 55, 0)",
                            "0 0 0 8px rgba(212, 175, 55, 0.1)",
                            "0 0 0 0 rgba(212, 175, 55, 0)"
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <option.icon 
                          className={`w-5 h-5 sm:w-6 sm:h-6 
                            ${isSelected ? 'text-[#0A192F]' : 'text-[#D4AF37]'}
                          `}
                        />
                      </motion.div>

                      {/* Text content */}
                      <div className="flex-1">
                        <h4 className={`
                          text-base sm:text-lg font-semibold
                          transition-colors duration-300
                          ${isSelected ? 'text-[#D4AF37]' : 'text-white'}
                        `}>
                          {option.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                          {option.description}
                        </p>
                      </div>

                      {/* Selection indicator */}
                      <motion.div
                        className={`
                          flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6
                          rounded-full border-2
                          flex items-center justify-center
                          transition-all duration-300
                          ${isSelected 
                            ? 'border-[#D4AF37] bg-[#D4AF37]' 
                            : 'border-white/30'
                          }
                        `}
                      >
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0A192F]" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Price display */}
                    <motion.div 
                      className="pt-2 sm:pt-3 border-t border-white/5"
                      layout
                    >
                      <p className={`
                        text-xl sm:text-2xl lg:text-3xl font-black
                        transition-colors duration-300
                        ${isSelected ? 'text-[#D4AF37]' : 'text-white/80'}
                      `}>
                        {option.price}
                      </p>
                    </motion.div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r 
                               from-[#D4AF37]/0 to-[#D4AF37]/5
                               opacity-0 group-hover:opacity-100
                               transition-opacity duration-300
                               pointer-events-none
                               rounded-xl sm:rounded-2xl"
                  />
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Active indicator animation */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
                     w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]
                     rounded-full mt-4"
          layoutId="activeIndicator"
          initial={false}
          animate={{
            x: selectedOption === 'installments' 
              ? 'calc(-50% - 80px)' 
              : 'calc(-50% + 80px)'
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Helper text */}
      <motion.p 
        className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Pagamento 100% seguro • Acesso imediato após confirmação
      </motion.p>
    </div>
  );
}