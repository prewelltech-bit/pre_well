import React from "react";
import { Reveal, AnimatedButton } from "../../../components/animations";
import "./Herosection.css";
// Use public asset path for hero image
const heroImg = "/assets/images/hero-section-you-can-trust-us.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Reveal direction="left" className="hero-section">
          <div className="hero-section1 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 gradient-text">
              Where Ideas Become Digital Reality
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl text-gray-950">
              Prewell helps businesses turn ideas into impactful digital
              experiences. Through innovation, creativity, and technology, we
              build solutions that perform. We design scalable digital products
              that drive real business results.
            </p>
            <AnimatedButton variant="primary" className="self-start mt-6">
              Get Started
            </AnimatedButton>
          </div>

          <Reveal
            direction="right"
            className="hero-image flex items-center justify-center"
          >
            <img
              src={heroImg}
              alt="Hero Image"
              className="rounded-xl w-full h-[75%] object-cover hover-scale transition-transform"
              loading="eager"
              fetchPriority="high"
            />
          </Reveal>
        </Reveal>
      </div>
    </>
  );
};

export default HeroSection;
