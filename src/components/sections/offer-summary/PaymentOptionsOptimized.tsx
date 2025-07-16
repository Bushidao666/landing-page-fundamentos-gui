"use client";

import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import { Calendar, DollarSign, Check, Percent } from "lucide-react";
import { PaymentOptionsProps, PaymentDetails } from "./types";
import { COLORS, SPACING, TYPOGRAPHY, ANIMATION, TOUCH_TARGET } from "./constants";
import { usePriceAnchoring } from "./hooks/usePriceAnchoring";

const defaultPaymentOptions: PaymentDetails[] = [
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
    savings: '5% OFF',
    discount: 5
  }
];

const PaymentOptionsOptimized = memo(({ 
  selectedOption, 
  onOptionChange,
  options = defaultPaymentOptions,
  className = ""
}: PaymentOptionsProps) => {
  const { setSelectedPayment } = usePriceAnchoring();
  
  const handleOptionChange = (option: 'installments' | 'cash') => {
    setSelectedPayment(option);
    onOptionChange(option);
  };

  return (
    <div 
      className={`w-full max-w-2xl mx-auto ${className}`}
      style={{ paddingInline: SPACING.md }}
      role="radiogroup"
      aria-label="Opções de pagamento"
    >
      {/* Section title */}
      <motion.h3 
        className="text-center font-medium"
        style={{
          fontSize: TYPOGRAPHY.body.lg,
          color: COLORS.text.muted,
          marginBottom: SPACING.lg
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIMATION.duration.normal / 1000 }}
      >
        Escolha a melhor forma de pagamento
      </motion.h3>

      {/* Payment options container */}
      <div className="relative">
        {/* Background track */}
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            backgroundColor: COLORS.surface.glass,
            border: `1px solid ${COLORS.border.default}`
          }}
        />

        {/* Options grid */}
        <div 
          className="relative grid grid-cols-1 sm:grid-cols-2"
          style={{
            gap: SPACING.sm,
            padding: SPACING.sm
          }}
        >
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            
            return (
              <motion.button
                key={option.id}
                className="relative group text-left w-full"
                onClick={() => handleOptionChange(option.id)}
                whileTap={{ scale: 0.98 }}
                role="radio"
                aria-checked={isSelected}
                aria-label={`${option.label} - ${option.price} - ${option.description}`}
                style={{ minHeight: TOUCH_TARGET.large }}
              >
                {/* Card background */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl border-2 transition-all duration-300"
                  style={{
                    padding: SPACING.md,
                    backgroundColor: isSelected ? `${COLORS.primary}10` : COLORS.surface.glass,
                    borderColor: isSelected ? `${COLORS.primary}50` : COLORS.border.default
                  }}
                  layout
                  whileHover={{
                    borderColor: isSelected ? `${COLORS.primary}60` : COLORS.border.hover
                  }}
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

                  {/* Badge */}
                  {option.badge && (
                    <motion.div
                      className="absolute top-3 right-3"
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring",
                        delay: 0.1
                      }}
                    >
                      <span 
                        className="inline-flex items-center font-bold uppercase tracking-wider rounded-full shadow-lg"
                        style={{
                          padding: `${SPACING.xs} ${SPACING.sm}`,
                          background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primaryLight})`,
                          color: COLORS.background.dark,
                          fontSize: TYPOGRAPHY.body.sm
                        }}
                      >
                        {option.badge}
                      </span>
                    </motion.div>
                  )}

                  {/* Savings badge */}
                  {option.savings && (
                    <motion.div
                      className="absolute top-3 right-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                    >
                      <span 
                        className="inline-flex items-center gap-1 font-bold rounded-full"
                        style={{
                          padding: `${SPACING.xs} ${SPACING.sm}`,
                          backgroundColor: 'rgba(34, 197, 94, 0.2)',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                          color: '#86efac',
                          fontSize: TYPOGRAPHY.body.sm
                        }}
                      >
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
                        className="flex-shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300"
                        style={{
                          width: '3rem',
                          height: '3rem',
                          background: isSelected 
                            ? `linear-gradient(to bottom right, ${COLORS.primary}, ${COLORS.primaryLight})`
                            : COLORS.surface.glassHover,
                          boxShadow: isSelected ? '0 8px 24px rgba(0,0,0,0.2)' : 'none'
                        }}
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
                          style={{
                            width: '1.5rem',
                            height: '1.5rem',
                            color: isSelected ? COLORS.background.dark : COLORS.primary
                          }}
                        />
                      </motion.div>

                      {/* Text content */}
                      <div className="flex-1">
                        <h4 
                          className="font-semibold transition-colors duration-300"
                          style={{
                            fontSize: TYPOGRAPHY.heading.sm,
                            color: isSelected ? COLORS.primary : COLORS.text.primary
                          }}
                        >
                          {option.label}
                        </h4>
                        <p 
                          style={{
                            fontSize: TYPOGRAPHY.body.sm,
                            color: COLORS.text.muted,
                            marginTop: '0.125rem'
                          }}
                        >
                          {option.description}
                        </p>
                      </div>

                      {/* Selection indicator */}
                      <motion.div
                        className="flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                        style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          borderColor: isSelected ? COLORS.primary : `${COLORS.text.primary}30`,
                          backgroundColor: isSelected ? COLORS.primary : 'transparent'
                        }}
                      >
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <Check 
                                style={{
                                  width: '1rem',
                                  height: '1rem',
                                  color: COLORS.background.dark
                                }}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Price display */}
                    <motion.div 
                      className="border-t"
                      style={{
                        paddingTop: SPACING.sm,
                        borderColor: `${COLORS.text.primary}08`
                      }}
                      layout
                    >
                      <p 
                        className="font-black transition-colors duration-300"
                        style={{
                          fontSize: TYPOGRAPHY.heading.xl,
                          color: isSelected ? COLORS.primary : COLORS.text.secondary
                        }}
                      >
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

      </div>

      {/* Helper text */}
      <motion.p 
        className="text-center"
        style={{
          fontSize: TYPOGRAPHY.body.sm,
          color: COLORS.text.disabled,
          marginTop: SPACING.lg
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: ANIMATION.duration.normal / 1000 }}
      >
        Pagamento 100% seguro • Acesso imediato após confirmação
      </motion.p>
    </div>
  );
});

PaymentOptionsOptimized.displayName = 'PaymentOptionsOptimized';

export default PaymentOptionsOptimized;