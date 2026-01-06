import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/**
 * Page Transition Variants
 * 
 * Pre-defined animation configurations for page transitions
 */
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  },
};

/**
 * Container Variants for Staggering Children
 */
export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Item Variants for Staggering
 */
export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/**
 * AnimatedPage Component
 * 
 * Wraps pages with automatic transitions
 * 
 * @component
 * @param {React.ReactNode} children - Page content
 * @param {Object} variants - Custom animation variants
 * 
 * @example
 * <AnimatedPage>
 *   <YourPageContent />
 * </AnimatedPage>
 */
export const AnimatedPage = ({
  children,
  variants = pageVariants,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

/**
 * Page Transition Overlay
 * 
 * Full-screen overlay for route transitions
 */
export const PageTransitionOverlay = ({ isActive }) => {
  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #3e93fe, #96bae6)',
        zIndex: 9998,
      }}
    />
  );
};

export default { pageVariants, containerVariants, itemVariants };
