/**
 * @file: index.ts
 * @responsibility: Type definitions for Hero Section components
 * @exports: HeroAnimationVariants, HeroBreakpoints, HeroTypography, HeroSpacing
 * @layer: types
 */

import { Variants } from "framer-motion";

export interface HeroAnimationVariants {
  container: Variants;
  item: Variants;
  floating: Variants;
  shimmer: Variants;
}

export interface HeroBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface HeroTypographyScale {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface HeroTypography {
  headline: HeroTypographyScale;
  subheadline: HeroTypographyScale;
  body: HeroTypographyScale;
  caption: HeroTypographyScale;
}

export interface HeroSpacingScale {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface HeroSpacing {
  section: HeroSpacingScale;
  gap: HeroSpacingScale;
  component: HeroSpacingScale;
}

export interface HeroColors {
  primary: string;
  primaryGradient: string;
  background: {
    base: string;
    overlay: string;
    accent: string;
  };
  text: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface HeroContent {
  badge: {
    icon: string;
    text: string;
    trailingIcon: string;
  };
  headline: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  metric: {
    icon: string;
    text: string;
  };
  valueProp: {
    main: string;
    highlight1: string;
    highlight2: string;
  };
  usps: Array<{
    icon: string;
    text: string;
  }>;
  cta: {
    text: string;
    icon: string;
    trailingIcon: string;
  };
  trust: Array<{
    icon: string;
    text: string;
  }>;
}