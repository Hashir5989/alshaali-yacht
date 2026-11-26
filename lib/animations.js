export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

export const fadeUp = {
  initial: { opacity: 0, y: 35 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export const slideLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const slideRight = {
  initial: { opacity: 0, x: 40 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const scaleReveal = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0.1) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textReveal = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const imageReveal = {
  initial: { scale: 1.12, opacity: 0.4 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
  },
};
