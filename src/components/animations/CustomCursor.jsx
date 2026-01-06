import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

/**
 * CustomCursor Component
 * 
 * Premium custom cursor with:
 * - Inner dot + outer ring
 * - Scale on interactive elements
 * - Smooth interpolation
 * - Hidden on non-hover browsers
 * 
 * Place this component at root level in App.jsx
 * 
 * @component
 * @example
 * <CustomCursor />
 */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const inner = cursorInnerRef.current;
    const outer = cursorOuterRef.current;

    if (!cursor || !inner || !outer) return;

    // Check if device supports hover (not touch device)
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' &&
          navigator.maxTouchPoints > 0) ||
        (typeof window !== 'undefined' &&
          navigator.msMaxTouchPoints > 0)
      );
    };

    if (isTouchDevice()) {
      cursor.style.display = 'none';
      return;
    }

    let mouseX = 0,
      mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Smooth interpolation using requestAnimationFrame
      gsap.to(cursor, {
        left: mouseX,
        top: mouseY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const onMouseEnter = () => {
      gsap.to([inner, outer], {
        opacity: 1,
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      gsap.to([inner, outer], {
        opacity: 0,
        duration: 0.3,
      });
    };

    // Scale on interactive elements
    const onInteractiveMouseEnter = (e) => {
      const isLink = e.target.tagName === 'A';
      const isButton =
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button');
      const isClickable = isLink || isButton;

      if (isClickable) {
        gsap.to(outer, {
          scale: 2,
          borderWidth: '3px',
          duration: 0.3,
        });
        gsap.to(inner, {
          scale: 0.5,
          duration: 0.3,
        });
      }
    };

    const onInteractiveMouseLeave = () => {
      gsap.to(outer, {
        scale: 1,
        borderWidth: '1px',
        duration: 0.3,
      });
      gsap.to(inner, {
        scale: 1,
        duration: 0.3,
      });
    };

    // Event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onInteractiveMouseEnter);
      el.addEventListener('mouseleave', onInteractiveMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onInteractiveMouseEnter);
        el.removeEventListener('mouseleave', onInteractiveMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <div ref={cursorInnerRef} className="cursor-inner"></div>
      <div ref={cursorOuterRef} className="cursor-outer"></div>
    </div>
  );
};

export default CustomCursor;
