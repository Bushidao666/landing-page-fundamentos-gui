"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, 
  AlertCircle, 
  DollarSign, 
  Brain, 
  Award, 
  CheckCircle,
  ChevronDown,
  Users
} from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Button } from "@/components/ui/button";

const qualifications = [
  {
    text: "Você é **iniciante total** no Google Ads e quer começar com o pé direito.",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    priority: 1
  },
  {
    text: "Você **já anuncia**, mas se sente **inseguro** e opera no \"achismo\".",
    icon: AlertCircle,
    color: "from-orange-500 to-orange-600",
    priority: 2
  },
  {
    text: "Seu **orçamento é limitado** e cada real precisa ser investido com inteligência.",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
    priority: 3
  },
  {
    text: "Você está **cansado de dicas soltas** e busca um método com começo, meio e fim.",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    priority: 4
  },
  {
    text: "Você quer ter **conhecimento sólido** para gerenciar melhor um futuro gestor de tráfego.",
    icon: Award,
    color: "from-amber-500 to-amber-600",
    priority: 5
  },
];

export function QualificationList() {
  const [showAll, setShowAll] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const visibleQualifications = showAll ? qualifications : qualifications.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
      },
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="mb-12 md:mb-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <motion.div
          className="inline-flex items-center gap-2 md:gap-3 bg-blue-50 border border-blue-200 px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8"
          whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
        >
          <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
          <span className="text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-wider">
            Qualificação
          </span>
        </motion.div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-3 md:mb-4">
          Este Alicerce é Para Você Se:
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 font-light">
          (Qualificação clara e direta)
        </p>
      </div>

      {/* Lista de Qualificações */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="sync">
          <motion.div className="space-y-4 md:space-y-6">
            {visibleQualifications.map((qualification) => {
              const Icon = qualification.icon;
              
              return (
                <motion.div
                  key={qualification.priority}
                  className="group"
                  variants={itemVariants}
                  whileHover={!prefersReducedMotion ? { x: 4 } : {}}
                  layout
                >
                  <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-white border border-gray-200 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-md">
                    {/* Ícone */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${qualification.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 transition-transform duration-300 ${!prefersReducedMotion ? 'group-hover:scale-105' : ''}`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    
                    {/* Texto */}
                    <div className="flex-1">
                      <p 
                        className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: qualification.text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-slate-900">$1</span>')
                        }}
                      />
                    </div>

                    {/* Check */}
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Botão Ver Mais */}
        {!showAll && (
          <motion.div
            className="mt-6 md:mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="group border-amber-300 hover:bg-amber-50 text-amber-700 hover:text-amber-800 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Ver mais qualificações
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${!prefersReducedMotion ? 'group-hover:translate-y-0.5' : ''}`} />
              </span>
            </Button>
          </motion.div>
        )}

        {/* Indicador de Scroll */}
        {showAll && (
          <motion.p
            className="text-center mt-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Todas as qualificações foram exibidas
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}