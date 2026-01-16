import React, { useState } from "react";
import "./GraphicPortfolio.css";

const GraphicPortfolio = () => {
  const images = Array.from({ length: 12 }, (_, i) => i + 1);
  const [current, setCurrent] = useState(null);

  const closeViewer = () => setCurrent(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev < images.length ? prev + 1 : 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev > 1 ? prev - 1 : images.length));
  };

  return (
    <section className="portfolio-wrapper">
      <div className="portfolio-inner">
        <h1 className="portfolio-heading py-12">Political Poster Design</h1>

        <div className="portfolio-grid">
          {images.map((num) => (
            <div
              className="portfolio-item"
              key={num}
              onClick={() => setCurrent(num)}
            >
              <img src={`/assets/portfolio/${num}.jpeg`} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN VIEWER */}
      {current && (
        <div className="viewer" onClick={closeViewer}>
          <span className="viewer-count">
            {current} / {images.length}
          </span>

          <button className="nav left" onClick={prevImage}>
            ❮
          </button>

          <img
            src={`/assets/portfolio/${current}.jpeg`}
            className="viewer-img"
            alt=""
          />

          <button className="nav right" onClick={nextImage}>
            ❯
          </button>

          <span className="close" onClick={closeViewer}>✕</span>
        </div>
      )}
    </section>
  );
};

export default GraphicPortfolio;