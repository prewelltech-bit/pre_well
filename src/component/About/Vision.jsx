import React from "react";
import "./MissionVision.css";

const Vision = () => {
  return (
    <section className="mv-wrapper">

      {/* Mission */}
      <div className="mv-row fade-in-left">
        <div className="mv-image-box">
          <div className="mv-bg"></div>
          <img src="https://res.cloudinary.com/skyllect/image/upload/v1710236684/about-us/about-fore.webp" alt="Mission" />
        </div>

        <div className="mv-content fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 gradient-text">Our Mission</h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-gray-950 text-justify">
            Our expanding portfolio of services enables us to deliver
            end-to-end solutions, while our growing technical expertise
            makes it possible for us to tackle even highly complex projects.
            By building our presence in different parts of the world,
            nurturing talent, streamlining our management processes,
            and staying committed to continuous improvement, we find
            ways to deliver quality solutions at affordable rates.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="mv-row reverse fade-in-right">
                <div className="mv-image-box">
          <div className="mv-bg vision-bg"></div>
          <img src="https://res.cloudinary.com/skyllect/image/upload/v1710236687/about-us/about-seven.webp" alt="Vision" />
        </div>
        <div className="mv-content fade-in-up">
          <h1  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 gradient-text">Our Vision</h1>
          <p classname="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-gray-950 text-justify">
            To empower our customers to achieve their goals by providing
            reliable and quality solutions with technology and innovation.
            To help entrepreneurs and creative thinkers convert their ideas
            into reality and deliver world-class products and services at
            competitive rates.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Vision;