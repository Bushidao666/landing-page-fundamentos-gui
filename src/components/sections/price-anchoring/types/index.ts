/**
 * @file: types.ts
 * @responsibility: Shared type definitions for PriceAnchoring section
 * @exports: All price anchoring related types and interfaces
 * @layer: types
 */

import { LucideIcon } from "lucide-react";

// Payment options
export type PaymentOption = 'installments' | 'cash';

// Value item structure
export interface ValueItem {
  id: string;
  name: string;
  value: number;
  icon: LucideIcon;
  gradient: string;
  description: string;
  highlight?: string;
  order: number;
}

// Payment details
export interface PaymentDetails {
  id: PaymentOption;
  icon: LucideIcon;
  label: string;
  price: string;
  description: string;
  badge?: string;
  savings?: string;
  discount?: number;
}

// Security badge
export interface SecurityBadge {
  icon: LucideIcon;
  label: string;
  color: string;
  ariaLabel: string;
}

// Animation configurations
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: number[] | string;
  staggerChildren?: number;
}

// Section state
export interface PriceAnchoringState {
  totalValue: number;
  priceRevealed: boolean;
  selectedPayment: PaymentOption;
  isLoading: boolean;
  hasError: boolean;
}

// Component props interfaces
export interface OfferHeaderProps {
  className?: string;
  animationConfig?: AnimationConfig;
}

export interface ValueBreakdownProps {
  items?: ValueItem[];
  onTotalCalculated: (total: number) => void;
  className?: string;
  animationConfig?: AnimationConfig;
}

export interface TotalValueProps {
  total: number;
  className?: string;
  animationConfig?: AnimationConfig;
}

export interface PaymentOptionsProps {
  selectedOption: PaymentOption;
  onOptionChange: (option: PaymentOption) => void;
  options?: PaymentDetails[];
  className?: string;
}

export interface PriceRevealProps {
  isRevealed: boolean;
  paymentOption: PaymentOption;
  basePrice?: number;
  className?: string;
  onCtaClick?: () => void;
}

export interface SecurityBadgesProps {
  badges?: SecurityBadge[];
  className?: string;
  animationDelay?: number;
}

// Theme configuration
export interface PriceAnchoringTheme {
  colors: {
    primary: string;
    primaryGradient: string;
    background: string;
    backgroundGradient: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    border: string;
    overlay: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  animation: {
    fast: number;
    normal: number;
    slow: number;
    easing: {
      smooth: number[];
      bounce: number[];
      expo: string;
    };
  };
}