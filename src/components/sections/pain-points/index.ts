/**
 * @file: index.ts
 * @responsibility: pain points module exports
 * @exports: PainPointsSection (default), all components
 * @imports: all module components
 * @layer: exports
 */

export { default as PainPointsSection } from "./PainPointsSection";

// New components
export { HeroStatisticsGrid } from "./components/HeroStatisticsGrid";
export { PainPointBentoGrid } from "./components/PainPointBentoGrid";
export { BentoPainCard } from "./components/BentoPainCard";
export { EmotionalTransition } from "./components/EmotionalTransition";
export { TransformationHero } from "./components/TransformationHero";

// Legacy components still in use
export { AnimatedCounter } from "./components/AnimatedCounter";
export { FloatingElements } from "./components/FloatingElements";


// Hooks
export { useCounterAnimation } from "./hooks/useCounterAnimation";
export { useScrollProgress } from "./hooks/useScrollProgress";

// Data
export { painPointsData, statisticsData } from "./data/painPointsData";
export type { PainPoint, StatisticItem } from "./data/painPointsData";