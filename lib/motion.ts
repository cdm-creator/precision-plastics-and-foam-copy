import type { Variants } from "framer-motion";

export const motionTimings = {
  fadeUp: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  hero: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  drawer: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  luxuryHover: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  hoverY: -4
} as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const heroMediaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 }
};

export const drawerVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 }
};
