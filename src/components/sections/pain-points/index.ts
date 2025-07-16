/**
 * @file: index.ts
 * @responsibility: pain points module exports
 * @exports: PainPointsSection (default), all components
 * @imports: all module components
 * @layer: exports
 */

export { default as PainPointsSection } from "./PainPointsSection";
export { SectionHeader } from "./components/SectionHeader";
export { PainPointTimeline } from "./components/PainPointTimeline";
export { PainPointCard } from "./components/PainPointCard";
export { TransformationSection } from "./components/TransformationSection";
export { AnimatedCounter } from "./components/AnimatedCounter";
export { FloatingElements } from "./components/FloatingElements";
export { useCounterAnimation } from "./hooks/useCounterAnimation";
export { useScrollProgress } from "./hooks/useScrollProgress";
export { painPointsData, statisticsData } from "./data/painPointsData";
export type { PainPoint, StatisticItem } from "./data/painPointsData";