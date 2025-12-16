import type { Variants } from "motion/react";
import { cubicBezier } from "motion/react";

export const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  animate: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  }),
} satisfies Variants;

export const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.5,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  }),
} satisfies Variants;

export const fadeRightVariants = {
  initial: {
    opacity: 0,
    x: 20,
    scale: 0.8,
  },
  animate: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.6 + custom * 0.1,
      duration: 0.4,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  }),
} satisfies Variants;
