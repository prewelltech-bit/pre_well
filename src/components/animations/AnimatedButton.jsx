import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './AnimatedButton.css';

/**
 * AnimatedButton Component
 * 
 * Premium button with multiple animation styles:
 * - Hover ripple effect
 * - Magnetic hover (cursor attraction)
 * - Micro-interactions
 * - Press feedback animation
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button text/content
 * @param {string} props.variant - 'primary', 'secondary', 'magnetic'
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * 
 * @example
 * <AnimatedButton variant="magnetic" onClick={handleClick}>
 *   Click Me
 * </AnimatedButton>
 */
const AnimatedButton = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
  ...props
}) => {
  const buttonRef = useRef(null);

  // Magnetic hover effect
  useEffect(() => {
    if (variant !== 'magnetic' || !buttonRef.current) return;

    const button = buttonRef.current;
    let mouseX = 0,
      mouseY = 0;
    let isHovering = false;

    const onMouseMove = (e) => {
      if (!isHovering) return;

      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      mouseX = e.clientX - buttonCenterX;
      mouseY = e.clientY - buttonCenterY;

      gsap.to(button, {
        x: mouseX * 0.25,
        y: mouseY * 0.25,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    const onMouseEnter = () => {
      isHovering = true;
    };

    const onMouseLeave = () => {
      isHovering = false;
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', onMouseMove);
    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mouseleave', onMouseLeave);

    return () => {
      button.removeEventListener('mousemove', onMouseMove);
      button.removeEventListener('mouseenter', onMouseEnter);
      button.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [variant]);

  // Ripple effect on click
  const createRipple = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.classList.add('ripple');

    // Remove existing ripples
    const ripples = button.querySelectorAll('.ripple');
    ripples.forEach((r) => r.remove());

    button.appendChild(circle);

    // Animate ripple
    gsap.to(circle, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        circle.remove();
      },
    });
  };

  const handleClick = (e) => {
    createRipple(e);
    if (onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled}
      className={`animated-btn animated-btn--${variant} ${className}`}
      {...props}
    >
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default AnimatedButton;
