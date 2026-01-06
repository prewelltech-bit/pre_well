import React from "react";
import HeroSection from "./body/HeroSection";
import FloatingAnimation from "./body/FloatingAnimation";
import OurServices from "./body/OurServices";
import Hero1 from "./body/Hero1";
import Testimonials from "./body/Testimonials";
import Contact from "./body/Contact";
import WhyChose from "./body/WhyChose";
import Partener from "./body/Partener";


const Body = () => {
  return (
    <>
        <div className="min-h-64 sm:h-64 flex flex-col justify-center body-section mb-6 mt-10">
          <div>
            <Hero1 />
            <HeroSection />
            {/* <FloatingAnimation /> */}
            <OurServices />
          </div>
          {/* <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Welcome to Prewell Digitech 
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Prewell Digitech is a leading technology solutions provider,
            specializing in innovative software development, IT consulting, and
            digital transformation services. Our mission is to empower
            businesses with cutting-edge technology to drive growth and
            efficiency.
          </p> */}
        </div>
        {/* New Sections */}
        <Partener />
        <Testimonials />
        <Contact />
        <WhyChose />
    </>
  );
};

export default Body;
