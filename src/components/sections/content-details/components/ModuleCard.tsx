/**
 * @file: ModuleCard.tsx
 * @responsibility: individual module card component
 * @exports: ModuleCard
 * @imports: React, motion, MotionWrapper, ModuleHighlights, ModuleLessons, useFloatingAnimation, createFloatingVariants
 * @layer: components
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";
import { ModuleHighlights } from "./ModuleHighlights";
import { ModuleLessons } from "./ModuleLessons";
import { useFloatingAnimation, createFloatingVariants } from "../../../../hooks/useFloatingAnimation";
import type { ModuleCardProps } from "../types";
import Image from "next/image";

// Componente para Mockup limpo com Shimmer + Floating
function ModuleMockup({ module, size = "desktop" }: { module: any; size?: "desktop" | "mobile" }) {
  const isFloating = useFloatingAnimation(2 + module.id);
  const floatingVariants = createFloatingVariants(4 + module.id, 3);

  const mockupImages = {
    1: "/images/Mockups/mockup-modulo-1-entendendo-jogo.png",
    2: "/images/Mockups/mockup-modulo-2-planejamento-estrategico.png", 
    3: "/images/Mockups/mockup-modulo-3-estrutura-campanhas.png",
    4: "/images/Mockups/mockup-modulo-4-criacao-anuncios.png"
  };

  return (
    <motion.div 
      className={cn(
        "relative mx-auto",
        size === "desktop" ? "w-full max-w-md" : "w-full max-w-xs"
      )}
      variants={isFloating ? floatingVariants : {}}
      animate={isFloating ? "animate" : "initial"}
    >
      {/* Mockup Image com Shimmer Effect */}
      <div className={cn(
        "relative overflow-hidden rounded-2xl shadow-2xl",
        size === "desktop" ? "aspect-[2/3]" : "aspect-[2/3]"
      )}>
        {/* Shimmer effect DA ESQUERDA PARA DIREITA diretamente na imagem */}
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
          initial={{ x: "-150%" }}
          animate={{ x: "150%" }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        />

        <Image
          src={mockupImages[module.id as keyof typeof mockupImages]}
          alt={`Mockup ${module.title}`}
          width={1024}
          height={1536}
          className="w-full h-full object-contain object-center rounded-2xl"
          onError={(e) => {
            // Fallback para placeholder se imagem não existir
            const target = e.currentTarget;
            const fallback = target.nextElementSibling;
            if (target && fallback && fallback instanceof HTMLElement) {
              target.style.display = 'none';
              fallback.style.display = 'flex';
            }
          }}
        />
        
        {/* Fallback Placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-2xl flex items-center justify-center" style={{ display: 'none' }}>
          <div className="text-center space-y-3">
            <module.icon className={cn(
              "mx-auto text-gray-400",
              size === "desktop" ? "w-12 h-12" : "w-8 h-8"
            )} />
            <div className="space-y-2">
              <div className={cn(
                "bg-gray-300 rounded mx-auto animate-pulse",
                size === "desktop" ? "h-3 w-24" : "h-2 w-16"
              )} />
              <div className={cn(
                "bg-gray-300 rounded mx-auto animate-pulse",
                size === "desktop" ? "h-2 w-32" : "h-1.5 w-20"
              )} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Parser avançado para formatação da descrição
function EnhancedDescription({ text, moduleId }: { text: string; moduleId: number }) {
  // Mapeamento de palavras-chave especiais por módulo
  const keywordMappings = {
    1: {
      // Módulo 1 - Entendendo o Jogo
      bold: ['Google', 'algoritmo', 'leilão', 'ansiedade', 'cliente', 'Google Ads'],
      italic: ['Lógica do Algoritmo', 'Aprendizado de Campanha', 'Jornada de Compra', 'Funil de Marketing'],
      highlight: ['maior aliado', 'pagar caro', 'controlar'],
      special: ['mente', 'inimigo', 'DENTRO']
    },
    2: {
      // Módulo 2 - Planejamento Estratégico  
      bold: ['ROAS Mínimo', 'métricas', 'metas', 'planilha', 'método'],
      italic: ['Planejamento de Métricas', 'achismo'],
      highlight: ['pagando pra trabalhar', 'colocando dinheiro no bolso'],
      special: ['profissional', 'ambiciosas mas realistas', 'quanto investir']
    },
    3: {
      // Módulo 3 - Estrutura de Campanhas
      bold: ['primeira campanha', 'e-commerce', 'controle', 'tipo de campanha'],
      italic: ['Critérios Essenciais', 'Melhores Práticas'],
      highlight: ['resultados mais rápidos', 'potencial de comprar'],
      special: ['Medo', 'resolve', 'curiosos']
    },
    4: {
      // Módulo 4 - Criação de Anúncios
      bold: ['clique qualificado', 'reprovado', 'Central de Transparência', 'anúncio'],
      italic: ['Remarketing', 'Especificações'],
      highlight: ['se destacam', 'língua do seu cliente'],
      special: ['De nada adianta', 'nunca mais', 'besteira']
    }
  };

  const keywords = keywordMappings[moduleId as keyof typeof keywordMappings] || keywordMappings[1];

  // Função para criar quebras de linha naturais
  const addNaturalBreaks = (text: string) => {
    // Pontos de quebra natural baseados em conectores e pontuação
    return text
      .replace(/\. (Vai|Vamos|Você|Também|Aqui|De nada)/g, '.\n\n$1') // Quebra após frases completas
      .replace(/, (para você|e o mais importante|incluindo)/g, ',\n$1') // Quebras em explicações importantes
      .replace(/\. (É o número|Chega de)/g, '.\n\n$1') // Quebra antes de conclusões
      .replace(/(Google Ads)\./g, '$1.\n') // Quebra final suave
  };

  const formatText = (text: string) => {
    // Primeiro, adicionar quebras naturais
    let formattedText = addNaturalBreaks(text);
    
    const elements: React.ReactElement[] = [];
    let elementIndex = 0;

    // 1. Processar negritos já existentes (**texto**)
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, (match, content) => {
      const key = `bold-existing-${elementIndex++}`;
      elements.push(
        <span key={key} className="text-[#D4AF37] font-bold">
          {content}
        </span>
      );
      return `__ELEMENT_${key}__`;
    });

    // 2. Adicionar negritos para palavras-chave
    keywords.bold.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
      formattedText = formattedText.replace(regex, (match) => {
        if (match.includes('__ELEMENT_')) return match; // Evitar formatação dupla
        const key = `bold-${elementIndex++}`;
        elements.push(
          <span key={key} className="font-bold text-white">
            {match}
          </span>
        );
        return `__ELEMENT_${key}__`;
      });
    });

    // 3. Adicionar itálicos para conceitos
    keywords.italic.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
      formattedText = formattedText.replace(regex, (match) => {
        if (match.includes('__ELEMENT_')) return match;
        const key = `italic-${elementIndex++}`;
        elements.push(
          <span key={key} className="italic font-semibold text-[#D4AF37]">
            {match}
          </span>
        );
        return `__ELEMENT_${key}__`;
      });
    });

    // 4. Adicionar background highlights
    keywords.highlight.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
      formattedText = formattedText.replace(regex, (match) => {
        if (match.includes('__ELEMENT_')) return match;
        const key = `highlight-${elementIndex++}`;
        elements.push(
          <span key={key} className="bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded font-semibold">
            {match}
          </span>
        );
        return `__ELEMENT_${key}__`;
      });
    });

    // 5. Adicionar cores especiais
    keywords.special.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
      formattedText = formattedText.replace(regex, (match) => {
        if (match.includes('__ELEMENT_')) return match;
        const key = `special-${elementIndex++}`;
        elements.push(
          <span key={key} className="text-blue-300 font-medium underline decoration-blue-300/50">
            {match}
          </span>
        );
        return `__ELEMENT_${key}__`;
      });
    });

    // 6. Reconstruir o texto com elementos formatados e quebras de linha
    const parts = formattedText.split(/(__ELEMENT_[^_]+__|\n)/);
    
    return parts.map((part, index) => {
      if (part.startsWith('__ELEMENT_')) {
        const elementKey = part.replace(/__ELEMENT_|__/g, '');
        const element = elements.find(el => el.key === elementKey);
        return element || part;
      } else if (part === '\n') {
        return <br key={`br-${index}`} />;
      }
      return part;
    });
  };

  return (
    <motion.div 
      className="text-lg text-gray-300 leading-relaxed space-y-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="text-center lg:text-left">
        {formatText(text)}
      </div>
    </motion.div>
  );
}

export function ModuleCard({ module, index }: ModuleCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Desktop Layout - Grid 50/50 Alternado SEM CARDS */}
      <div className="hidden lg:block">
        <div className={cn(
          "grid grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]"
        )}>
          {/* Content Column */}
          <div className={cn(
            "space-y-8",
            isEven ? "order-2" : "order-1"
          )}>
            {/* Module Header */}
            <div className="space-y-6">
              {/* Title and Subtitle */}
              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                  {module.title}
                </h3>
                
                <p className="text-xl text-gray-200 font-medium leading-relaxed">
                  {module.subtitle}
                </p>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="text-center lg:text-left">
              <EnhancedDescription text={module.description} moduleId={module.id} />
            </div>

            {/* Highlights and Lessons */}
            <div className="space-y-8">
              <ModuleHighlights highlights={module.highlights} />
              <ModuleLessons lessons={module.lessons} />
            </div>
          </div>

          {/* Mockup Column */}
          <div className={cn(
            "flex items-center justify-center",
            isEven ? "order-1" : "order-2"
          )}>
            <ModuleMockup module={module} size="desktop" />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stack Vertical SEM CARDS */}
      <div className="lg:hidden space-y-8">
        {/* Mobile Mockup */}
        <ModuleMockup module={module} size="mobile" />

        {/* Header Content */}
        <div className="space-y-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {module.title}
          </h3>
          
          <p className="text-lg text-gray-200 font-medium leading-relaxed">
            {module.subtitle}
          </p>
        </div>

        {/* Mobile Content */}
        <div className="space-y-8">
          {/* Enhanced Description */}
          <div className="text-center lg:text-left">
            <EnhancedDescription text={module.description} moduleId={module.id} />
          </div>

          {/* Highlights and Lessons */}
          <div className="space-y-8">
            <ModuleHighlights highlights={module.highlights} />
            <ModuleLessons lessons={module.lessons} />
          </div>
        </div>
      </div>
    </div>
  );
}