import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Reveal Component
 * 
 * Premium scroll-based reveal animations
 * Fade + translate animations with staggered children
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.direction - Animation direction: 'up', 'down', 'left', 'right'
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {boolean} props.stagger - Stagger children animations
 * @param {number} props.staggerDelay - Delay between staggered items
 * @param {string} props.className - Additional CSS classes
 * 
 * @example
 * <Reveal direction="up" stagger>
 *   <h1>Title</h1>
 *   <p>Subtitle</p>
 * </Reveal>
 */
const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  stagger = false,
  staggerDelay = 0.1,
  className = '',
}) => {
  const containerRef = useRef(null);
  const childrenRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Small delay to ensure DOM is ready and ScrollTrigger is initialized
    const initTimer = setTimeout(() => {
      // Determine initial transform based on direction
      const getInitialTransform = () => {
        switch (direction) {
          case 'up':
            return { y: 100, opacity: 0 };
          case 'down':
            return { y: -100, opacity: 0 };
          case 'left':
            return { x: 100, opacity: 0 };
          case 'right':
            return { x: -100, opacity: 0 };
          default:
            return { y: 100, opacity: 0 };
        }
      };

      const initialTransform = getInitialTransform();
      const triggers = [];

      if (stagger && childrenRefs.current.length > 0) {
        // Set initial state for children
        childrenRefs.current.forEach((child) => {
          if (child) {
            gsap.set(child, initialTransform);
          }
        });

        // Animate children with stagger
        const animation = gsap.to(childrenRefs.current, {
          opacity: 1,
          x: direction === 'left' || direction === 'right' ? 0 : undefined,
          y: direction === 'up' || direction === 'down' ? 0 : undefined,
          duration,
          delay,
          stagger: staggerDelay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
            markers: false,
          },
        });
        triggers.push(animation.scrollTrigger);
      } else {
        // Set initial state for container
        gsap.set(containerRef.current, initialTransform);

        // Animate container
        const animation = gsap.to(containerRef.current, {
          opacity: 1,
          x: direction === 'left' || direction === 'right' ? 0 : undefined,
          y: direction === 'up' || direction === 'down' ? 0 : undefined,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
            markers: false,
          },
        });
        triggers.push(animation.scrollTrigger);
      }

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, 50);

    return () => {
      clearTimeout(initTimer);
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
        if (stagger && childrenRefs.current.length > 0) {
          childrenRefs.current.forEach((child) => {
            if (child && trigger.vars && trigger.vars.trigger === child) {
              trigger.kill();
            }
          });
        }
      });
    };
  }, [direction, delay, duration, stagger, staggerDelay]);

  return (
    <div ref={containerRef} className={className}>
      {stagger
        ? React.Children.map(children, (child, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) childrenRefs.current[index] = el;
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
};

export default Reveal;
