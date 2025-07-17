/**
 * @file: index.ts
 * @responsibility: bonus stack section exports
 * @exports: BonusStackSection and all components
 * @imports: all bonus stack components
 * @layer: exports
 */

export { default as BonusStackSection } from "./BonusStackSection";

// Original components
export { default as BackgroundEffects } from "./components/BackgroundEffects";
export { default as BonusHeader } from "./components/BonusHeader";
export { default as CommunityBonus } from "./components/CommunityBonus";
export { default as PassportBonus } from "./components/PassportBonus";
export { default as GPTsBonus } from "./components/GPTsBonus";
export { default as FinalCTA } from "./components/FinalCTA";
export { default as BonusCard } from "./components/BonusCard";

// New optimized components v2.0
export { default as ValueStack, calculateValueMetrics } from "./components/ValueStack";
export { default as GPTCard } from "./components/GPTCard";
export { default as UrgencyBar } from "./components/UrgencyBar";
export { default as BonusCardV2 } from "./components/BonusCardV2";
export { default as BonusHeaderV2 } from "./components/BonusHeaderV2";
export { default as BonusStackSectionV2 } from "./BonusStackSectionV2";
export { default as ResponsiveLayout } from "./components/ResponsiveLayout";