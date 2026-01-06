import React from "react";
import Typewriter from "./Typewriter";
import TextAnimation from "./TextAnimation";
import { Reveal, AnimatedButton } from '../../../components/animations';
import './Hero1.css';
import "./HeroSection.css";
// Use public assets path
// const heroBg = '/assets/images/img-cheeta.png';
// import heroBgTop from '../../../assets/images/freepik_talk_32743.png';

const Hero1 = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        className="hero1 flex justify-center items-center"
        style={{
          // backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      {/* <img src={heroBgTop} alt="" /> */}
        <Reveal direction="up" stagger staggerDelay={0.1} className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight gradient-text">
            Transform Your Business with
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-950 leading-relaxed max-w-2xl">
            <TextAnimation />
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center">
            <AnimatedButton variant="primary">Get Started</AnimatedButton>
            <AnimatedButton variant="secondary">Contact Us</AnimatedButton>
          </div>
          
          {/* Jump to Services Arrow */}
          <div className="mt-10 sm:mt-12 animate-bounce cursor-pointer" onClick={scrollToServices}>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Explore Our Services</p>
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default Hero1;
