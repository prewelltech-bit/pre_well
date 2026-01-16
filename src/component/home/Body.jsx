import React, { lazy, Suspense } from "react";
import HeroSection from "./body/HeroSection";
import OurServices from "./body/OurServices";
import Hero1 from "./body/Hero1";
import Reels from "./body/Reels/Reels";

// Lazy load below-the-fold components for better performance
const Testimonials = lazy(() => import("./body/Testimonials"));
const Contact = lazy(() => import("./body/Contact"));
const WhyChose = lazy(() => import("./body/WhyChose"));
const Partener = lazy(() => import("./body/Partener"));
const WhoWeServe = lazy(() => import("./body/WhoWeServe"));

const Body = () => {
  return (
    <>
        <div className="min-h-64 sm:h-64 flex flex-col justify-center body-section mb-6 mt-10">
          <div>
            <Hero1 />
            <HeroSection />
            <OurServices />
          </div>
        </div>
        {/* New Sections - Lazy loaded */}
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <Partener />
          <Testimonials />
          <WhoWeServe />
          <Contact />
          <WhyChose />
          <Reels />
        </Suspense>
    </>
  );
};

export default React.memo(Body);
