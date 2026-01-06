import React, { useState } from "react";
import { Reveal } from "../../components/animations";
import "../services/services.css";
import services from "../../jsonFiles/Services.json";

const CaseStudies = [
  {
    id: 1,
    title: "High-Converting Social Media Creatives for a Fashion Brand",
    category: "Graphic Design",
    industry: "Fashion & Apparel",
    summary:
      "Designed high-quality social media creatives that increased engagement and brand visibility.",
    problem:
      "The client had low engagement and inconsistent branding across social platforms.",
    solution:
      "We created a consistent visual identity and high-performing creatives tailored for Instagram and Facebook.",
    services: ["Graphic Design", "Branding", "Social Media Creatives"],
    tools: ["Photoshop", "Illustrator", "Figma"],
    results: {
      engagementIncrease: "180%",
      reachGrowth: "2.5x",
      brandConsistency: "Improved",
    },
    coverImage: "/case-studies/graphics-fashion.jpg",
    duration: "1 Month",
  },
  {
    id: 2,
    title: "Video Editing Campaign for Product Promotions",
    category: "Video Editing",
    industry: "E-commerce",
    summary:
      "Short-form promotional videos optimized for ads and social media platforms.",
    problem:
      "Client videos lacked storytelling and retention, resulting in poor ad performance.",
    solution:
      "We edited high-impact reels with motion graphics, smooth cuts, captions, and cinematic effects.",
    services: ["Video Editing", "Motion Graphics", "Reels Editing"],
    tools: ["Premiere Pro", "After Effects"],
    results: {
      watchTimeIncrease: "210%",
      adCTR: "3.8%",
      salesGrowth: "45%",
    },
    coverImage: "/case-studies/video-editing.jpg",
    duration: "3 Weeks",
  },
  {
    id: 3,
    title: "Business Website Development Using React",
    category: "Web Development",
    industry: "IT & Services",
    summary:
      "Built a fast, SEO-friendly React website to improve online presence and lead generation.",
    problem:
      "The client had no professional website and struggled with online credibility.",
    solution:
      "We designed and developed a modern, responsive React website optimized for SEO and speed.",
    services: ["Web Design", "React Development", "SEO Optimization"],
    tools: ["React", "Tailwind", "Node.js"],
    results: {
      pageSpeedScore: "95+",
      leadIncrease: "3x",
      bounceRateReduced: "40%",
    },
    coverImage: "/case-studies/web-development.jpg",
    duration: "1.5 Months",
  },
  {
    id: 4,
    title: "Complete Digital Marketing Growth for Local Business",
    category: "Digital Marketing",
    industry: "Local Services",
    summary:
      "End-to-end digital marketing strategy to increase leads and local visibility.",
    problem: "Low Google visibility and inconsistent lead flow.",
    solution:
      "Implemented SEO, Google Ads, and conversion-focused landing pages.",
    services: ["SEO", "Google Ads", "Lead Generation"],
    tools: ["Google Ads", "Analytics", "Search Console"],
    results: {
      leadGrowth: "250%",
      costPerLeadReduced: "45%",
      localRanking: "Top 3",
    },
    coverImage: "/case-studies/digital-marketing.jpg",
    duration: "3 Months",
  },
  {
    id: 5,
    title: "E-Commerce Website with Payment & Inventory System",
    category: "E-Commerce",
    industry: "Retail",
    summary:
      "Developed a full-featured e-commerce platform with secure payments and inventory tracking.",
    problem: "Manual order handling and no online payment system.",
    solution:
      "Built a scalable e-commerce website with automation and payment gateways.",
    services: [
      "E-Commerce Development",
      "Payment Integration",
      "Inventory Setup",
    ],
    tools: ["React", "Node.js", "Stripe", "Razorpay"],
    results: {
      onlineSalesIncrease: "300%",
      orderProcessingTime: "Reduced by 60%",
      customerRetention: "High",
    },
    coverImage: "/case-studies/ecommerce.jpg",
    duration: "2 Months",
  },
  {
    id: 6,
    title: "Brand Identity & Visual System for Startup",
    category: "Branding",
    industry: "Startup",
    summary:
      "Created a strong brand identity with logo, color system, and marketing assets.",
    problem: "Startup lacked professional identity and brand direction.",
    solution:
      "Designed a complete branding system aligned with business vision.",
    services: ["Logo Design", "Brand Identity", "Visual Guidelines"],
    tools: ["Illustrator", "Photoshop", "Figma"],
    results: {
      brandRecognition: "High",
      clientTrust: "Improved",
      visualConsistency: "100%",
    },
    coverImage: "/case-studies/branding.jpg",
    duration: "3 Weeks",
  },
];

const Cs_body = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = [...new Set(services.map((s) => s.category))];

  return (
    <>
      <section className="services-section">
        <div className="services-container">
          <Reveal direction="up" className="services-header">
            <h2>Our Case Studies</h2>
            <h4>
              <p>Real work. Real impact. Real growth.</p>
            </h4>
            <p>
              At Prewell Digitech, we believe results speak louder than
              promises. Every project we take on is driven by strategy,
              creativity, and performance. Below are some of the real-world case
              studies that show how we help brands grow through design,
              development, marketing, and video.
            </p>
          </Reveal>

          {/* Category Tags */}
          <Reveal direction="up" className="category-tags">
            {categories.map((category) => (
              <div key={category} className="category-badge">
                {category}
              </div>
            ))}
          </Reveal>

          <Reveal
            direction="up"
            stagger
            staggerDelay={0.08}
            className="services-grid-advanced"
          >
            {CaseStudies.map((CaseStudies) => (
              <div
                key={CaseStudies.id}
                className={`service-card-advanced ${
                  expandedId === CaseStudies.id ? "expanded" : ""
                }`}
                onClick={() => toggleExpand(CaseStudies.id)}
              >
                {/* Card Header */}
                <div className="service-card-header">
                  <div className="service-icon-container">
                    <span className="service-icon">{CaseStudies.icon}</span>
                  </div>
                  <div className="service-info-header">
                    <h3>{CaseStudies.title}</h3>
                    <p className="category-label">{CaseStudies.category}</p>
                  </div>
                  <div className="expand-icon">→</div>
                </div>

                {/* Card Body */}
                <div className="service-card-body">
                  <p className="service-desc">{CaseStudies.desc}</p>

                  {/* Stats */}
                  <div className="service-stats">
                    <div className="stat">
                      <span className="stat-value">{CaseStudies.clients}</span>
                      <span className="stat-label">Clients</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                      <span className="stat-value">{CaseStudies.success}</span>
                      <span className="stat-label">Success</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedId === CaseStudies.id && (
                  <div className="service-details-expanded">
                    <p className="details-text">{CaseStudies.details}</p>

                    <div className="features-list">
                      <h4>Key Features:</h4>
                      <div className="features">
                        {CaseStudies.features.map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            <span className="feature-icon">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="service-cta">Get Started Today</button>
                  </div>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Cs_body;
