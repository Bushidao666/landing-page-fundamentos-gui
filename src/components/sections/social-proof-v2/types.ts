export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  description: string;
  image: string;
  highlight: boolean;
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

// Tipos específicos para Swiper.js Implementation
export interface SwiperCarouselProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
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