// Exports centralizados para Social Proof Section V2
// Implementação profissional com Swiper.js

export { default as SocialProofSection } from './SocialProofSection';
export { StaticMosaic } from './StaticMosaic';
export { MosaicCarousel } from './MosaicCarousel';
export { MosaicCard } from './MosaicCard';
export { SwiperCarousel } from './SwiperCarousel';
export { TestimonialCardV2 } from './TestimonialCardV2';
// PatternSection and FloatingElements removed - integrated into main section
export { testimonials, benefits, mosaicGroups } from './data';
export { containerVariants, itemVariants } from './animationsV2';
export type { 
  Testimonial, 
  TestimonialCardProps, 
  Benefit,
  MosaicGroup,
  MosaicCarouselProps,
  MosaicCardProps,
  SwiperCarouselProps,
  CarouselConfig
} from './types';