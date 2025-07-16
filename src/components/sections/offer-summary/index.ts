/**
 * @file: index.ts
 * @responsibility: Central export for all offer-summary components
 * @exports: All components, types, hooks and constants
 * @layer: exports
 */

// Components
export { default as OfferHeaderOptimized } from './OfferHeaderOptimized';
export { default as ValueBreakdownOptimized } from './ValueBreakdownOptimized';
export { default as TotalValueOptimized } from './TotalValueOptimized';
export { default as PaymentOptionsOptimized } from './PaymentOptionsOptimized';
export { default as PriceRevealOptimized } from './PriceRevealOptimized';
export { default as SecurityBadges } from './SecurityBadges';
export { default as PremiumBackground } from './PremiumBackground';

// Sub-components
export { ValueCard } from './components/ValueCard';

// Hooks
export { PriceAnchoringProvider, usePriceAnchoring } from './hooks/usePriceAnchoring';

// Types
export type {
  PaymentOption,
  ValueItem,
  PaymentDetails,
  SecurityBadge,
  AnimationConfig,
  PriceAnchoringState,
  OfferHeaderProps,
  ValueBreakdownProps,
  TotalValueProps,
  PaymentOptionsProps,
  PriceRevealProps,
  SecurityBadgesProps,
  PriceAnchoringTheme
} from './types';

// Constants
export {
  SPACING,
  TYPOGRAPHY,
  BREAKPOINTS,
  ANIMATION,
  COLORS,
  TOUCH_TARGET,
  Z_INDEX
} from './constants';