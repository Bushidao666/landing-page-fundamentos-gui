import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
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

export const carouselVariants: Variants = {
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
};