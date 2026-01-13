import React from "react";
import "./WhatWeDoBody.css";

const PortfolioData = [
  {
    id: 1,
    title: "Branding & Creative Services",
    image: "/assets/images/branding.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Web Design & Development",
    image: "/assets/images/programmer.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: "/assets/images/marketing.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Video Editing",
    image: "/assets/images/marketing.jpg",
    link: "#",
  },
];

const WhatWeDoBody = () => {
  return (
    <div className="portfolio-section">
      <h1 className="portfolio-heading">Our Portfolio</h1>
      <h4 className="portfolio-subtitle">
        Comprehensive Digital & Technology Solutions to Power Your Business
      </h4>
      <div className="portfolio-container">
        {PortfolioData.map((portfolio) => (
          <div key={portfolio.id} className="portfolio-card">
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className="portfolio-image"
            />
            <h3 className="portfolio-title">{portfolio.title}</h3>
            <a href={portfolio.link} className="portfolio-link">
              VIEW DETAILS
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoBody;