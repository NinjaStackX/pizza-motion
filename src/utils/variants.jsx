import { animate } from "motion/react";

import { motion } from "motion/react";
export const slideUp = {
  hidden: {
    fontSize: "32px",
    y: "-40vh",
    opacity: 0,
  },
  animate: {
    y: [0, 100, 0],
    opacity: [0, 0, 0, 0, 0, 1],
    transition: { duration: 0.8 },
  },
  hover: {
    scale: 1.1,
    x: [30, 0, -30],
    textShadow: "0 0 8px white",
    boxShadow: "0 0 8px white",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export const containerVariants = {
  hidden: {
    fontSize: "32px",
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 1 },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5 },
  },
};
export const containerVariantsOrders = {
  hidden: {
    fontSize: "50px",
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5 },
  },
};
export const nextVariants = {
  hidden: {
    fontSize: "32px",
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};
export const childVariants = {
  hidden: {
    fontSize: "32px",
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const containerToppingVariants = {
  hidden: {
    fontSize: "28px",
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};
export const svgVariants = {
  hidden: {
    rotate: -180,
    opacity: 0,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};
export const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
export const loaderVariants = {
  animationOne: {
    x: [0, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [-30, 0, 30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.25,
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};
