import React from "react";
import "./DetailOfWebDesign.css";

const DetailOfWebDesign = () => {
  return (
    <>
      <h1 className="page-title-web">Web Design & Development</h1>
      <section className="web-hero">
        <div className="web-hero-image">
          <img
            src="/assets/portfolio/13.jpg"
            alt="web design and development"
          />
        </div>
        <div className="web-hero-content">
          <h1>Prewell Web Designer & Developer</h1>
          <p className="hero-desc-web">
            At PreWell, we specialize in crafting stunning and functional
            websites that not only captivate your audience but also drive
            business growth. Our team of expert web designers and developers
            work collaboratively to create custom web solutions tailored to your
            unique needs. From responsive design to seamless user experiences,
            we ensure your website stands out in the digital landscape.
          </p>

          <ul>
            <li>Custom website design and development</li>
            <li>Mobile-friendly and responsive layouts</li>
            <li>Fast loading and performance optimized</li>
            <li>SEO-friendly structure</li>
          </ul>

          <button>Start Your Project</button>
        </div>
      </section>
    </>
  );
};

export default DetailOfWebDesign;