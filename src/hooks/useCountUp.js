import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useCountUp Hook
 * 
 * Animate number counting up on scroll trigger
 * Used for stats, metrics, achievements
 * 
 * @param {Object} config - Configuration object
 * @param {number} config.end - Final number value
 * @param {number} config.duration - Animation duration in seconds
 * @param {string} config.separator - Thousands separator (default: ',')
 * @param {Function} config.format - Custom format function
 * 
 * @returns {Object} - { ref: ref, value: currentValue }
 */
export const useCountUp = ({
  end = 100,
  duration = 2,
  separator = ',',
  format,
} = {}) => {
  const elementRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const countRef = useRef({ value: 0 });

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const animation = gsap.to(countRef.current, {
      value: end,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
        markers: false,
      },
      onUpdate: () => {
        let displayVal = Math.ceil(countRef.current.value);

        if (format) {
          displayVal = format(displayVal);
        } else {
          // Add separator for thousands
          displayVal = displayVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        }

        setDisplayValue(displayVal);
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [end, duration, separator, format]);

  return {
    ref: elementRef,
    value: displayValue,
  };
};

export default useCountUp;
