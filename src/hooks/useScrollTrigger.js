import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * useScrollTrigger Hook
 * 
 * Trigger animations based on scroll position
 * Perfect for reveal animations, parallax, counters
 * 
 * @param {Object} config - Configuration object
 * @param {string} config.trigger - Selector or ref for trigger element
 * @param {Object} config.animation - GSAP animation config
 * @param {string} config.start - ScrollTrigger start position (default: "top center")
 * @param {string} config.end - ScrollTrigger end position (default: "bottom center")
 * @param {boolean} config.once - Trigger only once (default: false)
 * @param {number} config.scrub - Scrub animation to scrollbar (default: false)
 * @param {Function} config.onEnter - Callback when entering viewport
 * @param {Function} config.onLeave - Callback when leaving viewport
 * 
 * @returns {Object} - { trigger: ref, kill: function }
 */
export const useScrollTrigger = ({
  trigger,
  animation = {},
  start = 'top center',
  end = 'bottom center',
  once = false,
  scrub = false,
  onEnter,
  onLeave,
} = {}) => {
  const elementRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const element = trigger || elementRef.current;
    if (!element) return;

    const config = {
      trigger: element,
      start,
      end,
      scrub,
      once,
      markers: false, // Set to true for debugging
    };

    if (onEnter) {
      config.onEnter = onEnter;
    }

    if (onLeave) {
      config.onLeave = onLeave;
    }

    // Create GSAP animation with ScrollTrigger
    scrollTriggerRef.current = gsap.to(element, {
      ...animation,
      scrollTrigger: config,
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.scrollTrigger?.kill();
        scrollTriggerRef.current.kill();
      }
    };
  }, [trigger, animation, start, end, once, scrub, onEnter, onLeave]);

  return {
    trigger: elementRef,
    kill: () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.scrollTrigger?.kill();
        scrollTriggerRef.current.kill();
      }
    },
  };
};

export default useScrollTrigger;
