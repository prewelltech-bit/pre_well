import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './PageLoader.css';

/**
 * PageLoader Component
 * 
 * Full-screen loading animation that:
 * - Displays on page load
 * - Has logo/text reveal animation
 * - Smooth exit animation before page shows
 * - Customizable content and duration
 * 
 * Place in App.jsx at root level before main content
 * 
 * @component
 * @param {Object} props
 * @param {number} props.duration - Loader display duration in milliseconds
 * @param {React.ReactNode} props.children - Custom loader content
 * 
 * @example
 * <PageLoader duration={2000}>
 *   <h1>PREWELL</h1>
 * </PageLoader>
 */
const PageLoader = ({ duration = 2500, children }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    // Animate loader in
    gsap.fromTo(
      loader,
      { opacity: 1 },
      { opacity: 1, duration: 0.5 }
    );

    // Text reveal animation
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
      );
    }

    // Exit animation
    const exitTimer = setTimeout(() => {
      gsap.to(loader, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: 'power2.inOut',
        pointerEvents: 'none',
      });
    }, duration);

    return () => clearTimeout(exitTimer);
  }, [duration]);

  return (
    <div ref={loaderRef} className="page-loader">
      <div className="loader-content">
        {children ? (
          <div ref={textRef}>{children}</div>
        ) : (
          <>
            <div ref={textRef} className="loader-logo">
              PREWELL
            </div>
            <div className="loader-bar">
              <div className="loader-progress"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PageLoader;
