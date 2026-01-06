/**
 * Animation Performance Utilities
 * 
 * Best practices for optimized animations
 */

/**
 * Enable GPU acceleration on element
 * @param {HTMLElement} element
 */
export const enableGPUAcceleration = (element) => {
  if (!element) return;
  element.style.willChange = 'transform';
  element.style.transform = 'translateZ(0)';
  element.style.backfaceVisibility = 'hidden';
};

/**
 * Disable GPU acceleration on element
 * @param {HTMLElement} element
 */
export const disableGPUAcceleration = (element) => {
  if (!element) return;
  element.style.willChange = 'auto';
  element.style.transform = 'none';
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get optimized animation settings based on user preference
 * @returns {Object} - Animation configuration
 */
export const getAnimationConfig = () => {
  if (prefersReducedMotion()) {
    return {
      duration: 0,
      delay: 0,
      enabled: false,
    };
  }

  return {
    duration: 0.8,
    delay: 0,
    enabled: true,
  };
};

/**
 * Batch DOM reads/writes using requestAnimationFrame
 * @param {Function} callback - Function to execute in next frame
 */
export const batchAnimation = (callback) => {
  requestAnimationFrame(() => {
    callback();
  });
};

/**
 * Throttle function for scroll/resize events
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */
export const throttle = (func, wait) => {
  let timeout;
  let previous = 0;

  return function executedFunction(...args) {
    const now = Date.now();
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element
 * @param {number} offset - Offset from bottom of viewport
 * @returns {boolean}
 */
export const isInViewport = (element, offset = 0) => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight - offset &&
    rect.bottom > 0
  );
};

export default {
  enableGPUAcceleration,
  disableGPUAcceleration,
  prefersReducedMotion,
  getAnimationConfig,
  batchAnimation,
  throttle,
  isInViewport,
};
