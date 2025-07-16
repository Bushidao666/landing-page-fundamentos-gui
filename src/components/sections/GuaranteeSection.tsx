"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, ArrowRight, ShoppingCart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Atomic Components
const GuaranteeBadge = () => (
  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4">
    <motion.div 
      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center border-2 sm:border-3 lg:border-4 border-white shadow-lg"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
    >
      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
    </motion.div>
  </div>
);

const GuaranteeIcon = () => (
  <motion.div 
    className="flex items-center justify-center mb-4 sm:mb-5 lg:mb-6"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
  >
    <div className="relative">
      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#0A192F] rounded-full flex items-center justify-center shadow-inner">
        <Shield className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#D4AF37]" />
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-xl animate-pulse" />
    </div>
  </motion.div>
);

const TrustIndicator = ({ icon: Icon, text, color }: { icon: React.ComponentType<{className?: string}>, text: string, color: string }) => (
  <motion.div 
    className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} />
    <span className="text-xs sm:text-sm lg:text-base text-white/90 font-medium">{text}</span>
  </motion.div>
);

const GuaranteeSection = () => {
  return (
    <section
      id="guarantee"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden"
      aria-labelledby="guarantee-heading"
    >
      {/* Optimized Background - Single gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0f1419]" />

      {/* Content Container - Optimized spacing */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Content Wrapper */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Guarantee Seal - Responsive and Proportional */}
            <motion.div 
              className="inline-block mb-6 sm:mb-8 lg:mb-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            >
              <div className="relative">
                <motion.div 
                  className="relative bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Guarantee Icon */}
                  <GuaranteeIcon />

                  {/* Guarantee Text - Proportional Typography */}
                  <div className="text-center space-y-2 sm:space-y-3">
                    <h2 
                      id="guarantee-heading"
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#0A192F] leading-none"
                    >
                      GARANTIA BLINDADA
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0A192F]/90">
                      DE 7 DIAS
                    </p>
                    <motion.div 
                      className="inline-block bg-[#0A192F] text-[#D4AF37] px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black uppercase tracking-wide">
                        Risco ZERO Absoluto!
                      </span>
                    </motion.div>
                  </div>

                  {/* Verification Badge */}
                  <GuaranteeBadge />
                </motion.div>

                {/* Shadow enhancement for depth */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-transparent to-black/20 -z-10 translate-y-2 blur-xl" />
              </div>
            </motion.div>

            {/* Guarantee Description - Optimized Container */}
            <motion.div 
              className="mb-6 sm:mb-8 lg:mb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 border border-white/10 shadow-xl">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed sm:leading-relaxed md:leading-loose">
                  Sua satisfação ou seu dinheiro de volta. Você tem{" "}
                  <span className="text-[#D4AF37] font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">7 dias inteiros</span>{" "}
                  para mergulhar no curso, usar os GPTs, entrar na comunidade. Se você não sentir que este material é o melhor e mais completo ponto de partida que você já viu, é só me mandar{" "}
                  <span className="text-[#D4AF37] font-bold">UM e-mail</span>. Devolvo{" "}
                  <span className="text-[#D4AF37] font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">CADA CENTAVO</span>{" "}
                  dos seus R$ 47. Sem perguntas, sem estresse.{" "}
                  <span className="text-[#D4AF37] font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl block mt-3 sm:mt-4">
                    Você não tem absolutamente NADA a perder, e um negócio lucrativo a ganhar.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* CTA Section - Fully Responsive */}
            <motion.div
              className="space-y-4 sm:space-y-5 lg:space-y-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {/* CTA Button - Optimized for all devices */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="relative w-full sm:w-auto text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-12 lg:py-7 xl:px-14 xl:py-8 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-bold shadow-2xl rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden group"
                  aria-label="Comprar curso com garantia de 7 dias por R$ 47"
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="relative flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    <span className="flex flex-col items-center leading-tight">
                      <span className="block">PEGAR MEU KIT COMPLETO</span>
                      <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black mt-1">
                        POR R$ 47 AGORA!
                      </span>
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>

              {/* Trust Indicators - Responsive Grid */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                <TrustIndicator icon={CheckCircle} text="Acesso Instantâneo" color="text-green-400" />
                <TrustIndicator icon={Shield} text="100% Garantido" color="text-[#D4AF37]" />
                <TrustIndicator icon={Clock} text="Sem Pegadinhas" color="text-blue-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;