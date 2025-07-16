/**
 * @file: designSystem.ts
 * @responsibility: design tokens and responsive system configuration
 * @exports: responsive utilities, design tokens, breakpoint definitions
 * @imports: none (pure types and constants)
 * @layer: types
 */

// Breakpoint System - Mobile First
export const breakpoints = {
  xs: '320px',   // Mobile small
  sm: '640px',   // Mobile large
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop small
  xl: '1280px',  // Desktop large
  '2xl': '1536px' // Desktop extra large
} as const;

// Typography Scale System
export const typography = {
  // Mobile-first progressive enhancement
  sizes: {
    xs: 'text-xs',      // 12px
    sm: 'text-sm',      // 14px
    base: 'text-base',  // 16px
    lg: 'text-lg',      // 18px
    xl: 'text-xl',      // 20px
    '2xl': 'text-2xl',  // 24px
    '3xl': 'text-3xl',  // 30px
    '4xl': 'text-4xl',  // 36px
    '5xl': 'text-5xl',  // 48px
  },
  // Responsive typography patterns
  responsive: {
    // Small text (descriptions, captions)
    small: 'text-xs md:text-sm lg:text-base',
    // Body text (paragraphs, content)
    body: 'text-sm md:text-base lg:text-lg',
    // Subheadings (section titles)
    subheading: 'text-base md:text-lg lg:text-xl xl:text-2xl',
    // Main headings (card titles)
    heading: 'text-lg md:text-xl lg:text-2xl xl:text-3xl',
    // Major headings (section headers)
    major: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl',
    // Hero text (main headlines)
    hero: 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
  }
} as const;

// Spacing Scale System
export const spacing = {
  // Base spacing units
  units: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
  },
  // Responsive spacing patterns
  responsive: {
    // Tight spacing (mobile)
    tight: 'gap-2 md:gap-3 lg:gap-4',
    // Comfortable spacing
    comfortable: 'gap-3 md:gap-4 lg:gap-6',
    // Loose spacing (desktop)
    loose: 'gap-4 md:gap-6 lg:gap-8',
    // Section spacing
    section: 'space-y-6 md:space-y-8 lg:space-y-12',
    // Card padding
    cardPadding: 'p-4 md:p-6 lg:p-8 xl:p-10',
    // Container margins
    containerMargin: 'mb-6 md:mb-8 lg:mb-10',
  }
} as const;

// Component Size System
export const componentSizes = {
  // Icon sizes
  icon: {
    small: 'w-4 h-4 md:w-5 md:h-5',
    medium: 'w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7',
    large: 'w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10',
    xlarge: 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12',
  },
  // Badge sizes
  badge: {
    small: 'w-6 h-6 md:w-8 md:h-8',
    medium: 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12',
    large: 'w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16',
  },
  // Touch targets (minimum 44px for accessibility)
  touchTarget: 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12',
} as const;

// Animation System
export const animations = {
  // Duration tokens
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
    slower: 800,
  },
  // Easing tokens
  easing: {
    easeOut: 'easeOut' as const,
    easeIn: 'easeIn' as const,
    easeInOut: 'easeInOut' as const,
    spring: [0.25, 0.46, 0.45, 0.94] as const,
  },
  // Stagger patterns
  stagger: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  }
} as const;

// Color System
export const colors = {
  // Brand colors
  primary: '#D4AF37',
  primaryDark: '#B8941F',
  secondary: '#0A192F',
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  // Gradient patterns
  gradients: {
    primary: 'from-[#D4AF37] to-yellow-400',
    gold: 'from-[#D4AF37] via-[#FFD700] to-[#D4AF37]',
    success: 'from-green-500 to-emerald-600',
    info: 'from-blue-500 to-cyan-600',
    warning: 'from-orange-500 to-red-600',
    purple: 'from-purple-500 to-pink-600',
  }
} as const;

// Layout System
export const layout = {
  // Container max widths
  containers: {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
  },
  // Grid patterns
  grid: {
    responsive2Col: 'grid lg:grid-cols-2',
    responsive3Col: 'grid md:grid-cols-2 lg:grid-cols-3',
    responsiveCards: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  },
  // Border radius
  borderRadius: {
    small: 'rounded-md md:rounded-lg',
    medium: 'rounded-lg md:rounded-xl',
    large: 'rounded-xl md:rounded-2xl lg:rounded-3xl',
  }
} as const;

// Utility Types
export type TypographySize = keyof typeof typography.sizes;
export type TypographyResponsive = keyof typeof typography.responsive;
export type SpacingUnit = keyof typeof spacing.units;
export type SpacingResponsive = keyof typeof spacing.responsive;
export type ComponentSize = keyof typeof componentSizes.icon;
export type ColorGradient = keyof typeof colors.gradients;
export type ContainerSize = keyof typeof layout.containers;

// Responsive Utility Functions
export const getResponsiveClasses = {
  typography: (variant: TypographyResponsive) => typography.responsive[variant],
  spacing: (variant: SpacingResponsive) => spacing.responsive[variant],
  iconSize: (size: ComponentSize) => componentSizes.icon[size],
  container: (size: ContainerSize) => layout.containers[size],
  gradient: (variant: ColorGradient) => `bg-gradient-to-br ${colors.gradients[variant]}`,
};

const designSystem = {
  breakpoints,
  typography,
  spacing,
  componentSizes,
  animations,
  colors,
  layout,
  getResponsiveClasses,
};

export default designSystem; 