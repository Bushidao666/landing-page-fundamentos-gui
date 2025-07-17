import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: typeof window !== 'undefined' && window.innerWidth < 640 ? 0.08 : 0.15,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { 
    y: typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 30, 
    opacity: 0, 
    scale: 0.95,
    filter: typeof window !== 'undefined' && window.innerWidth < 640 ? "blur(2px)" : "blur(5px)"
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: typeof window !== 'undefined' && window.innerWidth < 640 ? 150 : 100,
      damping: typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 15,
      mass: typeof window !== 'undefined' && window.innerWidth < 640 ? 0.8 : 1
    }
  },
};

export const carouselVariants: Variants = {
  center: {
    x: "0%",
    scale: 1,
    opacity: 1,
    zIndex: 3,
    filter: "blur(0px)",
    transition: { 
      type: "spring", 
      stiffness: typeof window !== 'undefined' && window.innerWidth < 640 ? 200 : 300, 
      damping: typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 30,
      mass: 0.8
    },
  },
  left: {
    x: "-60%",
    scale: typeof window !== 'undefined' && window.innerWidth < 640 ? 0.85 : 0.8,
    opacity: typeof window !== 'undefined' && window.innerWidth < 640 ? 0.6 : 0.5,
    zIndex: 2,
    filter: typeof window !== 'undefined' && window.innerWidth < 640 ? "blur(0.5px)" : "blur(1px)",
    transition: { 
      type: "spring", 
      stiffness: typeof window !== 'undefined' && window.innerWidth < 640 ? 200 : 300, 
      damping: typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 30,
      mass: 0.8
    },
  },
  right: {
    x: "60%",
    scale: typeof window !== 'undefined' && window.innerWidth < 640 ? 0.85 : 0.8,
    opacity: typeof window !== 'undefined' && window.innerWidth < 640 ? 0.6 : 0.5,
    zIndex: 1,
    filter: typeof window !== 'undefined' && window.innerWidth < 640 ? "blur(0.5px)" : "blur(1px)",
    transition: { 
      type: "spring", 
      stiffness: typeof window !== 'undefined' && window.innerWidth < 640 ? 200 : 300, 
      damping: typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 30,
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
      stiffness: typeof window !== 'undefined' && window.innerWidth < 640 ? 200 : 300, 
      damping: typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 30,
      mass: 0.8
    },
  },
};