import React from "react";
import { AnimatedButton, Reveal } from "../../components/animations";
import Vision from "./Vision";
import { color } from "framer-motion";

const AboutBody = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="welcome-text py-12 flex justify-center items-center px-4 sm:px-6 md:px-8">
          <h2
            style={{ color: "#2B2B2B"}}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
          >
            Welcome To{" "}
            <span
              style={{ color: "#3e93fe"}}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
            >
              PreWell
            </span>
          </h2>
        </div>
        <Reveal direction="left" className="hero-section flex flex-col ">
          <div className="hero-section1 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 gradient-text">
              Innovating the Future with Technology
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-gray-950 text-justify">
              Prewell is a globally driven digital solutions company focused on
              helping brands and businesses thrive in the digital world. We
              specialize in building powerful digital experiences that combine
              innovation, creativity, and technology to deliver measurable
              growth. From startups to established enterprises, we partner with
              businesses to transform ideas into impactful digital realities. At
              Prewell, we create smart, scalable, and result-oriented digital
              solutions tailored to your business needs. Our approach blends
              strategy, creativity, and modern technology to ensure your brand
              stands out in today’s competitive digital landscape. We don’t just
              create digital platforms—we build solutions that connect brands
              with their audiences and drive long-term success.
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
              src="/assets/images/Grid-2.jpg"
              alt="Hero Image"
              className="rounded-xl w-full h-[75%] object-cover hover-scale transition-transform"
              loading="lazy"
            />
          </Reveal>
        </Reveal>
        <Reveal>
          <div>
            <Vision />
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default AboutBody;