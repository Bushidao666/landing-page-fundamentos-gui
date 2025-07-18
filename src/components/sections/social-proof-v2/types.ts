export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  description: string;
  image: string;
  highlight: boolean;
  layout: 'square' | 'horizontal' | 'vertical';
}

export interface MosaicGroup {
  id: number;
  testimonials: [Testimonial, Testimonial, Testimonial]; // [left, center, right]
  pattern: 'A' | 'B' | 'C'; // Diferentes padrões de disposição
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  isCenter: boolean;
  position: 'center' | 'left' | 'right' | 'hidden';
}

export interface Benefit {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Tipos específicos para Mosaic Implementation
export interface MosaicCarouselProps {
  mosaicGroups: MosaicGroup[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export interface MosaicCardProps {
  testimonial: Testimonial;
  size: 'large' | 'medium' | 'small';
  position: 'left' | 'center' | 'right';
  isActive: boolean;
}

export interface CarouselConfig {
  slidesPerView: number | 'auto';
  spaceBetween: number;
  centeredSlides: boolean;
  loop: boolean;
  autoplay: {
    delay: number;
    disableOnInteraction: boolean;
    pauseOnMouseEnter: boolean;
  };
  pagination: {
    clickable: boolean;
    dynamicBullets: boolean;
  };
  navigation: {
    enabled: boolean;
  };
  breakpoints: {
    [key: number]: {
      slidesPerView: number | 'auto';
      spaceBetween: number;
      centeredSlides: boolean;
    };
  };
  lazy: {
    loadPrevNext: boolean;
    loadOnTransitionStart: boolean;
  };
  keyboard: {
    enabled: boolean;
    onlyInViewport: boolean;
  };
  mousewheel: {
    enabled: boolean;
    forceToAxis: boolean;
  };
  touchRatio: number;
  threshold: number;
  longSwipesRatio: number;
}