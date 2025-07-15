"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, Variants, AnimatePresence, LayoutGroup } from "framer-motion";
import { CheckCircle, Star, Users, TrendingUp, Award, Target, ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// === INTERFACES E TIPOS === //
interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  description: string;
  image: string;
  highlight: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isCenter: boolean;
  position: 'center' | 'left' | 'right' | 'hidden';
}

// === VARIANTS DE ANIMAÇÃO OTIMIZADAS === //
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    y: 30, 
    opacity: 0, 
    scale: 0.95,
    filter: "blur(5px)"
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  },
};

// === DADOS DOS DEPOIMENTOS === //
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "MK",
    title: "Aluno Zero a 100k",
    quote: "Sem dúvidas melhor curso de Google Ads do Brasil",
    description: "Já fiz alguns e não tem nem comparação. Outro nível",
    image: "/images/IMG_0899.jpg",
    highlight: true
  },
  {
    id: 2,
    name: "Nicolas",
    title: "Aluno Zero a 100k", 
    quote: "Material e conteúdo muito rico que você só encontra em cursos bem mais caros",
    description: "Opa Guilherme, ja zerei todos os módulos, terminei hoje inclusive o de traqueamento, já tinha feito diversos cursos e mentorias, e posso dizer com 100% de certeza que essa foi a melhor custo benefício de todas.",
    image: "/images/IMG_1074.jpg",
    highlight: false
  },
  {
    id: 3,
    name: "Tharsis",
    title: "Aluno Zero a 100k",
    quote: "O primeiro módulo já é fenomenal, entender como funciona algoritmo, como o google trabalha é top demais",
    description: "Perfeito, sem problemas, muito obrigado Guilherme, sobre o curso do Google eu estou indo devagar, mas cara, é de explodir a cabeça.",
    image: "/images/IMG_0327.jpg",
    highlight: false
  },
  {
    id: 4,
    name: "Danilo",
    title: "Aluno Zero a 100k",
    quote: "Cara o curso é top d+ eu já tô conseguindo obter resultados. Somente com a teoria.",
    description: "Achei muito bom o aprendizado. Eu consegui ajustar o aprendizado de umas campanhas aqui e começaram a cair vendas.",
    image: "/images/IMG_1328.jpg",
    highlight: true
  },
  {
    id: 5,
    name: "Allan",
    title: "Aluno Zero a 100k",
    quote: "Já vi diversos cursos, e esse seu é de longe o melhor",
    description: "Estou finalizando a introdução do curso e, cara, o conteúdo está bom demaaaaais! Toda a didática, mostrando no início na introdução, fazendo entender a fundo as lógicas do Google ads.",
    image: "/images/IMG_0434.jpg",
    highlight: false
  },
  {
    id: 6,
    name: "Biel",
    title: "Aluno Zero a 100k",
    quote: "Você é o google em pessoa",
    description: "A forma como tu explicou como a pmax funciona quais os conceitos como que ela trabalha. Foi um divisor de águas. Pra quem já é intermediário no google é uma explosão na mente. E pra quem é iniciante já ajuda muito na questão.",
    image: "/images/IMG_1874.jpg",
    highlight: false
  },
  {
    id: 7,
    name: "Lucas",
    title: "Aluno Zero a 100k",
    quote: "O Curso te ensina TUDO de estratégia e planejamento empresarial",
    description: "Cara, so pra te passar um feedback do curso do 0 ao 100k - O Curso te ensina TUDO de estratégia e planejamento empresarial, mais que uma facul, e o quanto isso acaba refletindo nas campanhas do Google, fazendo tudo bem feito, como você explicou ali é IMPOSSÍVEL não ter resultado.",
    image: "/images/IMG_9512.jpg",
    highlight: true
  },
];

const benefits = [
  {
    text: "Clareza Mental: Finalmente entenderam como e por que o Google Ads funciona",
    icon: Target
  },
  {
    text: "Resultados Práticos: Começaram a ver melhorias nas campanhas ainda durante o curso",
    icon: TrendingUp
  },
  {
    text: "Confiança: Pararam de operar no \"achismo\" e passaram a tomar decisões baseadas em fundamentos sólidos",
    icon: Award
  },
  {
    text: "Custo-Benefício: Reconheceram que receberam conteúdo de nível premium por uma fração do preço",
    icon: Star
  },
];

// === COMPONENTE DE PARTÍCULAS ULTRA-OTIMIZADO === //
const FloatingElements = React.memo(() => {
  const particles = useMemo(() => 
    Array.from({ length: window.innerWidth < 640 ? 8 : 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [-10, -50, -10],
            x: [-8, 8, -8],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
        </motion.div>
      ))}
    </div>
  );
});

FloatingElements.displayName = "FloatingElements";

// === COMPONENTE DE CARD INDIVIDUAL OTIMIZADO === //
const TestimonialCard = React.memo<TestimonialCardProps>(({ testimonial, isCenter, position }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Pré-carregamento da imagem para melhor performance
  useEffect(() => {
    if (position === 'center' || position === 'left' || position === 'right') {
      const img = new window.Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = testimonial.image;
    }
  }, [testimonial.image, position]);

  return (
    <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-3 sm:px-4">
      <motion.div
        className={`
          relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl 
          rounded-2xl sm:rounded-3xl border shadow-2xl transition-all duration-300 overflow-hidden
          ${testimonial.highlight 
            ? 'border-[#D4AF37]/50 shadow-[#D4AF37]/20' 
            : 'border-gray-200/50'
          }
        `}
        style={{
          minHeight: window.innerWidth < 640 ? '350px' : window.innerWidth < 768 ? '400px' : window.innerWidth < 1024 ? '450px' : '500px',
          willChange: 'transform',
        }}
        whileHover={isCenter ? { y: -3, scale: 1.01 } : {}}
        layout
        layoutId={`testimonial-${testimonial.id}`}
      >
        
        {/* Badge de Destaque - Sempre Visível */}
        {testimonial.highlight && (
          <motion.div
            className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center border-2 sm:border-3 md:border-4 border-white shadow-xl z-20"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            layoutId={`badge-${testimonial.id}`}
          >
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#0A192F] fill-[#0A192F]" />
          </motion.div>
        )}

        {/* Grid Container com Altura Controlada */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch h-full p-4 sm:p-6 md:p-8"
          style={{
            gridTemplateRows: 'minmax(0, 1fr)',
          }}
        >
          
          {/* Coluna da Imagem - Lado Esquerdo */}
          <div className="order-2 md:order-1 flex flex-col justify-between">
            
            {/* Container da Imagem com Altura Flexível */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-xl sm:rounded-2xl border-2 border-gray-200/50 shadow-xl overflow-hidden">
                {/* Header WhatsApp Style */}
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-green-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">💬</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A192F] text-xs sm:text-sm">Depoimento WhatsApp</h4>
                    <p className="text-xs text-gray-500">Aluno Verificado ✓</p>
                  </div>
                </div>
                
                {/* Container da Imagem com Aspect Ratio Responsivo */}
                <div 
                  className="relative bg-white h-[200px] sm:h-[240px] md:h-[280px] w-full"
                >
                  {!imageError ? (
                    <Image
                      src={testimonial.image}
                      alt={`Print do depoimento de ${testimonial.name} no WhatsApp`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className={`
                        object-contain transition-all duration-500
                        ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      `}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      priority={position === 'center'}
                      quality={85}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="text-center text-gray-500">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                          📱
                        </div>
                        <p className="text-xs sm:text-sm">Imagem indisponível</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Loading State */}
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                      <motion.div
                        className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna do Conteúdo - Lado Direito */}
          <div className="order-1 md:order-2 flex flex-col justify-between text-center md:text-left h-full">
            
            {/* Quote Principal - Parte Superior */}
            <div className="flex-1 flex flex-col justify-center">
              <blockquote className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0A192F] mb-3 sm:mb-4 leading-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic line-clamp-3">
                  &ldquo;{testimonial.description}&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Seção Inferior - Sempre Visível */}
            <div className="flex-shrink-0 space-y-3 sm:space-y-4">
              {/* Divisor */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
              
              {/* Autor */}
              <div>
                <p className="font-bold text-[#0A192F] text-base sm:text-lg md:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-[#D4AF37] font-medium text-sm sm:text-base">
                  {testimonial.title}
                </p>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.5 + i * 0.1,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  </motion.div>
                ))}
              </div>

              {/* Badge de Autenticidade - Sempre Visível */}
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-green-100 border border-green-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  <span className="text-green-700 font-medium text-xs sm:text-sm">Depoimento Verificado</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";

// === CARROSSEL MOBILE-OPTIMIZED === //
const TestimonialsCarousel = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Debounced navigation para evitar clicks múltiplos
  const debouncedNavigation = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    
    // Reset transitioning state após animação
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % testimonials.length;
    debouncedNavigation(newIndex);
  }, [currentSlide, debouncedNavigation]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
    debouncedNavigation(newIndex);
  }, [currentSlide, debouncedNavigation]);
  
  // Auto-play inteligente mobile-optimized
  useEffect(() => {
    if (!isAutoPlaying) return;

    const isMobile = window.innerWidth < 640;
    const interval = setInterval(nextSlide, isMobile ? 3000 : 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play no hover
  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  // Variants do carrossel mobile-optimized
  const carouselVariants: Variants = useMemo(() => ({
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 3,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8
      },
    },
    left: {
      x: "-60%",
      scale: 0.8,
      opacity: 0.5,
      zIndex: 2,
      filter: "blur(1px)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8
      },
    },
    right: {
      x: "60%",
      scale: 0.8,
      opacity: 0.5,
      zIndex: 1,
      filter: "blur(1px)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8
      },
    },
    hidden: {
      x: "0%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
      filter: "blur(4px)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8
      },
    },
  }), []);

  return (
    <div 
      className="relative w-full flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container do Carrossel Responsivo */}
      <div className="relative w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl flex items-center justify-center mb-8 sm:mb-10 md:mb-12 min-h-[400px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[580px]">
        <LayoutGroup>
          <AnimatePresence mode="wait" initial={false}>
          {testimonials.map((testimonial, index) => {
              let variant: 'center' | 'left' | 'right' | 'hidden' = "hidden";
            const distance = index - currentSlide;

            if (index === currentSlide) {
              variant = "center";
            } else if (index === (currentSlide - 1 + testimonials.length) % testimonials.length) {
              variant = "left";
            } else if (index === (currentSlide + 1) % testimonials.length) {
              variant = "right";
            }

              // Renderiza apenas os cards visíveis
            if (variant === "hidden" && Math.abs(distance) > 1) {
              return null;
            }

            return (
              <motion.div
                key={testimonial.id}
                variants={carouselVariants}
                animate={variant}
                initial="hidden"
                  exit="hidden"
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  cursor: variant === "center" ? "default" : "pointer",
                    willChange: 'transform, opacity, filter',
                }}
                  onClick={() => variant !== "center" && !isTransitioning && debouncedNavigation(index)}
                whileHover={variant !== "center" ? { scale: 0.85, y: -5 } : {}}
              >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isCenter={variant === 'center'} 
                    position={variant}
                  />
              </motion.div>
            );
          })}
        </AnimatePresence>
        </LayoutGroup>
      </div>

      {/* Controles e Indicadores Mobile-Optimized */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full">
        {/* Controles de Navegação Touch-Friendly */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <motion.button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0A192F]" />
          </motion.button>
          
          {/* Auto-play Toggle */}
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300 touch-manipulation"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying ? (
              <Pause className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700" />
            ) : (
              <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700 ml-0.5" />
            )}
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0A192F]" />
          </motion.button>
        </div>
        
        {/* Indicadores de Posição Touch-Friendly */}
        <div className="flex justify-center gap-2 sm:gap-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => !isTransitioning && debouncedNavigation(index)}
              disabled={isTransitioning}
              className={`relative overflow-hidden rounded-full transition-all duration-300 disabled:cursor-not-allowed touch-manipulation ${
                index === currentSlide
                  ? 'w-8 h-3 sm:w-10 sm:h-3 md:w-12 md:h-3 bg-gradient-to-r from-[#D4AF37] to-yellow-400'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ 
                    duration: window.innerWidth < 640 ? 3 : 5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
});

TestimonialsCarousel.displayName = "TestimonialsCarousel";

// === COMPONENTES MOTION OTIMIZADOS === //
const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionSpan = motion.span;
const MotionP = motion.p;

export default function SocialProofSection() {
  return (
    <MotionSection
      id="social-proof"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático Responsivo */}
      <div className="absolute inset-0">
        {/* Camada Base - Gradiente Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
        
        {/* Overlay de Transição */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/5 to-[#0A192F]/15" />
        
        {/* Grid Pattern Sutil */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Nebulosa Premium Responsiva */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/3 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-l from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[150px] sm:h-[250px] md:h-[300px] bg-gradient-to-r from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-2xl" />
        </div>
        
        {/* Partículas Flutuantes */}
        <FloatingElements />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          
          {/* Header da Seção */}
          <MotionDiv className="text-center mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
            {/* Badge Premium */}
            <MotionDiv
              className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-[#D4AF37]/30 via-[#FFD700]/20 to-[#D4AF37]/30 backdrop-blur-2xl border border-[#D4AF37]/50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-2xl mb-6 sm:mb-8 md:mb-12"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                Quem experimentou, aprova
              </span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#D4AF37]" />
            </MotionDiv>

            {/* Headline Provocativa */}
            <MotionH2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-black leading-[0.9] tracking-tight text-[#0A192F] mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Não Precisa Acreditar Só na{" "}
              <MotionSpan 
                className="text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(to right, #D4AF37, #FFD700, #D4AF37)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 3s ease-in-out infinite"
                }}
              >
                Minha Palavra
              </MotionSpan>
            </MotionH2>

            <MotionP 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto"
              variants={itemVariants}
            >
              Veja o Que Dizem Quem Já Colocou em Prática:
            </MotionP>
          </MotionDiv>

          {/* Carrossel de Depoimentos Estratégicos */}
          <MotionDiv className="mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
            <TestimonialsCarousel />
          </MotionDiv>

          {/* Seção "Percebeu o Padrão?" */}
          <MotionDiv className="mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
            <MotionDiv 
              className="bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-[#D4AF37]/30 shadow-2xl"
              whileHover={{ scale: 1.01, y: -3 }}
            >
              {/* Header */}
              <MotionDiv className="text-center mb-8 sm:mb-10 md:mb-12" variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#0A192F] mb-4 sm:mb-6">
                  Percebeu o Padrão?
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
                  Estes não são apenas &ldquo;alunos satisfeitos&rdquo;. São{" "}
                  <span className="font-bold text-[#0A192F]">pessoas que já fizeram outros cursos</span>{" "}
                  e podem{" "}
                  <span className="font-bold text-[#0A192F]">comparar</span>. Pessoas que{" "}
                  <span className="font-bold text-[#0A192F]">já tinham experiência</span>{" "}
                  e ainda assim descobriram{" "}
                  <span className="text-[#D4AF37] font-bold">lacunas gigantes</span>{" "}
                  no conhecimento.
                </p>
              </MotionDiv>

              {/* O que todos têm em comum */}
              <MotionDiv className="mb-6 sm:mb-8 md:mb-10" variants={itemVariants}>
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0A192F] text-center mb-6 sm:mb-8">
                  O que todos eles têm em comum?
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {benefits.map((benefit, index) => (
                    <MotionDiv
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 hover:border-[#D4AF37]/30 transition-all duration-300 group"
                      custom={index}
                      variants={{
                        hidden: { x: -20, opacity: 0 },
                        visible: {
                          x: 0,
                          opacity: 1,
                        }
                      }}
                      transition={{
                        delay: 1.2 + index * 0.1,
                        duration: 0.6
                      }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0A192F]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 inline mr-2 mb-1" />
                          <span className="font-semibold text-[#0A192F]">
                            {benefit.text.split(':')[0]}:
                          </span>{" "}
                          {benefit.text.split(':')[1]}
                        </p>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>

          {/* Pergunta Provocativa Final */}
          <MotionDiv className="text-center mb-10 sm:mb-12 md:mb-16" variants={itemVariants}>
            <MotionDiv 
              className="bg-gradient-to-br from-gray-50 via-white to-gray-50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200/50 shadow-2xl"
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#D4AF37] mb-6 sm:mb-8 uppercase tracking-wide">
                A Pergunta Que Não Quer Calar:
              </h3>
              
              <div className="space-y-4 sm:space-y-6 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#0A192F] leading-relaxed font-medium">
                  <span className="font-bold">Se profissionais experientes, que já fizeram outros cursos e mentorias, tiveram resultados tão impactantes...</span>
                </p>
                
                <MotionP 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#D4AF37] leading-relaxed font-bold"
                  animate={{ 
                    textShadow: ["0 0 10px rgba(212, 175, 55, 0.3)", "0 0 20px rgba(212, 175, 55, 0.6)", "0 0 10px rgba(212, 175, 55, 0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ...imagine o que pode acontecer com você, que vai receber essa base desde o início?
                </MotionP>
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* CTA Contextualizado Mobile-Optimized */}
          <MotionDiv
            className="text-center"
            variants={itemVariants}
          >
            <MotionDiv
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Button 
                size="lg" 
                className="relative overflow-hidden w-full sm:w-auto text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-black shadow-2xl shadow-[#D4AF37]/50 border-2 sm:border-3 md:border-4 border-[#D4AF37]/30 rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-500 backdrop-blur-sm"
              >
                {/* Efeito de Brilho */}
                <MotionDiv
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
                
                <span className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4 z-10">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="tracking-wide text-center leading-tight">
                    <span className="hidden md:inline">EU QUERO FAZER PARTE DESSE GRUPO DE SUCESSO POR R$ 47!</span>
                    <span className="md:hidden">QUERO FAZER PARTE! R$ 47</span>
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#0A192F] group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </MotionDiv>

            {/* Indicadores de Pertencimento */}
            <MotionDiv 
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 text-gray-600"
              variants={itemVariants}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm">Junte-se aos Vencedores</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500" />
                <span className="text-xs sm:text-sm">Resultados Comprovados</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm">Satisfação Garantida</span>
              </div>
            </MotionDiv>
          </MotionDiv>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      `}</style>
    </MotionSection>
  );
} 