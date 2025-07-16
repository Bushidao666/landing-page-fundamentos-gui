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