import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * useParallax Hook
 * 
 * Create parallax effects with GPU-optimized transforms
 * Background moves slower than foreground for depth effect
 * 
 * @param {Object} config - Configuration object
 * @param {number} config.speed - Parallax speed (0-1, lower = slower)
 * @param {string} config.direction - 'vertical' or 'horizontal'
 * @param {number} config.distance - Maximum distance to move in pixels
 * @param {boolean} config.scrub - Scrub to scrollbar
 * 
 * @returns {Object} - { ref: ref }
 */
export const useParallax = ({
  speed = 0.5,
  direction = 'vertical',
  distance = 100,
  scrub = true,
} = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const animationConfig = {};

    if (direction === 'vertical') {
      animationConfig.y = distance;
    } else {
      animationConfig.x = distance;
    }

    const parallaxTrigger = gsap.to(element, {
      ...animationConfig,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: scrub,
        markers: false,
      },
    });

    return () => {
      parallaxTrigger.scrollTrigger?.kill();
      parallaxTrigger.kill();
    };
  }, [speed, direction, distance, scrub]);

  return { ref: elementRef };
};

export default useParallax;
