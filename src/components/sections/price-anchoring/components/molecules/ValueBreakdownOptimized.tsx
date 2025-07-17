"use client";

import { memo, useEffect } from "react";
import { Target, Crown, Zap, Sparkles } from "lucide-react";
import { ValueCard } from "../atoms/ValueCard";
import { ValueItem, ValueBreakdownProps } from "../../types";
import { SPACING } from "../../data/constants";
import { usePriceAnchoring } from "../../hooks/usePriceAnchoring";

// Default value items with improved structure
const defaultValueItems: ValueItem[] = [
  {
    id: "course",
    name: "Curso Fundamentos Google Ads",
    value: 197,
    icon: Target,
    gradient: "from-blue-500 via-blue-600 to-purple-600",
    description: "Base completa para dominar Google Ads",
    order: 1
  },
  {
    id: "community",
    name: "Acesso Vitalício à Comunidade",
    value: 497,
    icon: Crown,
    gradient: "from-[#D4AF37] via-[#FFD700] to-[#F59E0B]",
    description: "Suporte premium para sempre",
    highlight: "VITALÍCIO",
    order: 2
  },
  {
    id: "passport",
    name: "Passaporte Aceleração",
    value: 97,
    icon: Zap,
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    description: "9 aulas + 9 ferramentas práticas",
    order: 3
  },
  {
    id: "ai-assistants",
    name: "7 Assistentes de IA Exclusivos",
    value: 297,
    icon: Sparkles,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    description: "Seu exército de inteligência artificial",
    order: 4
  },
];

const ValueBreakdownOptimized = memo(({ 
  items = defaultValueItems,
  onTotalCalculated,
  className = "",
  animationConfig
}: ValueBreakdownProps) => {
  const { setTotalValue } = usePriceAnchoring();
  const totalValue = items.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    setTotalValue(totalValue);
  }, [totalValue, setTotalValue]);
  
  useEffect(() => {
    if (onTotalCalculated) {
      onTotalCalculated(totalValue);
    }
  }, [totalValue]); // Removed onTotalCalculated from deps to prevent loops

  return (
    <div 
      className={`space-y-4 ${className}`}
      style={{ gap: SPACING.md }}
      role="list"
      aria-label="Detalhamento do valor da oferta"
    >
      {items.map((item, index) => (
        <ValueCard
          key={item.id}
          item={item}
          index={index}
          animationDelay={animationConfig?.delay || 0}
        />
      ))}
    </div>
  );
});

ValueBreakdownOptimized.displayName = 'ValueBreakdownOptimized';

export default ValueBreakdownOptimized;