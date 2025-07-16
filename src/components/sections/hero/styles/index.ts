/**
 * @file: index.ts
 * @responsibility: Hero Section shared styles and utilities
 * @exports: heroStyles, getResponsiveClasses, cn
 * @layer: styles
 */

import { HERO_TYPOGRAPHY, HERO_SPACING } from "../constants";

type ResponsiveValue = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export const getResponsiveClasses = (
  baseClass: string,
  values: ResponsiveValue
): string => {
  const classes: string[] = [];
  
  if (values.xs) classes.push(values.xs);
  if (values.sm) classes.push(`sm:${values.sm.replace(/^(text-|p-|py-|px-|gap-|m-|my-|mx-|h-|w-)/, '')}`);
  if (values.md) classes.push(`md:${values.md.replace(/^(text-|p-|py-|px-|gap-|m-|my-|mx-|h-|w-)/, '')}`);
  if (values.lg) classes.push(`lg:${values.lg.replace(/^(text-|p-|py-|px-|gap-|m-|my-|mx-|h-|w-)/, '')}`);
  if (values.xl) classes.push(`xl:${values.xl.replace(/^(text-|p-|py-|px-|gap-|m-|my-|mx-|h-|w-)/, '')}`);
  
  return classes.join(' ');
};

export const heroStyles = {
  section: `relative min-h-screen w-full overflow-hidden`,
  
  container: `relative z-10 container mx-auto px-4 sm:px-6 md:px-8 ${getResponsiveClasses('py', HERO_SPACING.section)}`,
  
  contentWrapper: `flex items-center justify-center min-h-[85vh]`,
  
  contentColumn: `space-y-6 md:space-y-8 lg:space-y-10 text-center max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto`,
  
  badge: `inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 backdrop-blur-xl border border-[#D4AF37]/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl hover:shadow-[#D4AF37]/20 transition-shadow duration-300`,
  
  headlineWrapper: `space-y-3 sm:space-y-4`,
  
  headline: `font-serif font-black leading-tight sm:leading-[0.9] tracking-tight text-white ${getResponsiveClasses('text', HERO_TYPOGRAPHY.headline)}`,
  
  shimmerText: `block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] via-[#FFA500] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]`,
  
  metric: `flex items-center justify-center gap-2 sm:gap-3 text-[#D4AF37] font-bold max-w-4xl mx-auto ${getResponsiveClasses('text', HERO_TYPOGRAPHY.body)}`,
  
  valueProp: `text-gray-200 leading-relaxed max-w-4xl mx-auto font-light ${getResponsiveClasses('text', HERO_TYPOGRAPHY.body)}`,
  
  uspContainer: `flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap max-w-4xl mx-auto`,
  
  uspItem: `flex items-center gap-2 text-gray-300 ${getResponsiveClasses('text', HERO_TYPOGRAPHY.caption)} font-medium`,
  
  ctaWrapper: `flex justify-center pt-6 sm:pt-8`,
  
  ctaButton: `relative overflow-hidden text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-bold shadow-2xl shadow-[#D4AF37]/40 border-2 border-[#D4AF37]/30 rounded-2xl transition-all duration-500 backdrop-blur-sm`,
  
  trustContainer: `flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-8 sm:pt-10 text-gray-200 max-w-4xl mx-auto ${getResponsiveClasses('text', HERO_TYPOGRAPHY.caption)}`,
  
  trustBadge: `flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl px-3 sm:px-4 md:px-5 py-3 sm:py-4 rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:from-white/15 hover:to-white/10 transition-all duration-300`,
  
  scrollIndicator: `absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2`,
  
  scrollIndicatorOuter: `w-6 h-10 sm:w-8 sm:h-12 border-2 border-[#D4AF37]/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5 hover:border-[#D4AF37]/80 transition-colors duration-300`,
  
  scrollIndicatorInner: `w-1 h-3 sm:w-1.5 sm:h-4 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full mt-2 sm:mt-3`,
  
  iconSmall: `w-3 h-3 sm:w-4 sm:h-4`,
  iconMedium: `w-4 h-4 sm:w-5 sm:h-5`,
  iconLarge: `w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`,
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};