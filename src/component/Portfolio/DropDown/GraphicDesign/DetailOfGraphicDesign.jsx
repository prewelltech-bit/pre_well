import React from "react";
import "./DetailOfGraphicDesign.css";

const DetailOfGraphicDesign = () => {
  return (
    <>
    <h1 className="page-title ">Graphic Design</h1>
    <section className="graphic-hero">
      {/* Left Image */}
      <div className="graphic-hero-image">
        <img
          src="/assets/portfolio/14.jpg"
          alt="Graphic Design Work"
        />
      </div>

      {/* Right Content */}
      <div className="graphic-hero-content">
        <h1>
         PreWell Graphic Designer
        </h1>

        <p className="hero-desc">
          Welcome to the core of our digital thinking — where strategy,
          creativity, and clarity come together. At Nitiverse Digital Solution,
          we believe impactful digital presence is built through purposeful
          design and meaningful content. Our approach focuses on understanding
          your brand, your audience, and your goals to create visuals and
          messaging that actually drive growth.
        </p>

        <ul>
          <li>Brand-focused visual identity</li>
          <li>Purpose-driven graphic design</li>
          <li>Consistent design across platforms</li>
        </ul>

        <button>Start Your Design</button>
      </div>
    </section>
    </>
  );
};

export default DetailOfGraphicDesign;