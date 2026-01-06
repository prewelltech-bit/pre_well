import React, { useState } from "react";
// Use public assets path for service images
// const logo_2 = '/assets/images/Grid-2.jpg';
import { Reveal } from "../../../components/animations";
import "./ourservices.css";
import TextAnimation from "./TextAnimation";
import { useNavigate } from "react-router";
// import { nav } from "framer-motion/client";

const OurServices = () => {
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      icon: "🎨",
      title: "Branding & Creative Design",
      tagline: "Brand Identity Design",
      description: "Visual identities that reflect your brand’s personality and values",
      details: "Professional graphic design services including logo design, branding, digital art, and marketing materials. We create stunning visuals that capture your brand's essence and engage your audience.",
      features: ["Logo Design", "Branding", "Digital Art", "Marketing Materials"],
      projects: "500+",
      satisfaction: "98%",
    },
    {
      id: 2,
      icon: "💻",
      title: "Website & Web App Development",
      tagline: "High-Performance Builds",
      description: "Responsive, user-friendly, and high-performing digital platforms",
      details: "Custom web development using latest technologies. We build responsive websites that work perfectly on all devices, with fast loading times and secure infrastructure.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Secure"],
      projects: "350+",
      satisfaction: "97%",
    },
    {
      id: 3,
      icon: "🚀",
      title: "Digital Marketing Solutions ",
      tagline: "Growth Strategy",
      description: "Performance-driven strategies to increase visibility, engagement, and conversions",
      details: "Comprehensive digital marketing strategies including SEO, social media marketing, content creation, and paid advertising. We help your business grow online.",
      features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      projects: "450+",
      satisfaction: "96%",
    },
    {
      id: 4,
      icon: "🌐",
      title: "Innovative Digital Solutions",
      tagline: "Scalable Digital Solutions",
      description: " Customized digital tools designed to scale with your business needs.",
      details: "Enterprise-grade cybersecurity solutions including penetration testing, security audits, threat monitoring, and compliance management to keep your data safe.",
      features: ["Security Audits", "Threat Monitoring", "Compliance", "Training"],
      projects: "300+",
      satisfaction: "99%",
    },
    {
      id: 5,
      icon: "🧩",
      title: "UI/UX Design",
      tagline: "User-First Experiences",
      description: "Seamless, intuitive user experiences that enhance engagement and satisfaction",
      details: "Strategic IT consulting to help your organization leverage technology effectively. We provide guidance on infrastructure planning, cloud migration, and digital transformation.",
      features: ["Infrastructure Planning", "Cloud Migration", "Digital Transform", "Support"],
      projects: "400+",
      satisfaction: "97%",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const handleArrow = () => {
     navigate('/services');
  }

  return (
    <>
      <div id="services-section" className="mt-10 our-service-con scroll-smooth">
        <Reveal direction="up" className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 gradient-text">
            Our Services
          </h2>
           <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto font-medium">
            We offer complete end-to-end digital solutions under one roof,
            making Prewell your trusted digital partner.
          </p>
        </Reveal>

        <Reveal direction="up" stagger staggerDelay={0.1} className="services-grid-advanced">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card-advanced transition-all duration-300 ease-out ${
                expandedId === service.id ? "expanded" : ""
              }`}
            >
              {/* Card Header */}
              <div
                className="service-card-header cursor-pointer"
                onClick={() => toggleExpand(service.id)}
              > 
                <div className="service-icon-badge">{service.icon}</div>
                <div className="service-header-content flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-blue-500 font-medium">{service.tagline}</p>
                </div>
                <div className="expand-arrow" onClick={handleArrow}>→</div>
              </div>

              {/* Card Body - Always Visible */}
              <div className="service-card-body">
                {/* <img
                  src={logo_2}
                  alt={service.title}
                  className="ourservices-image transition-transform"
                  loading="lazy"
                  onClick={handleArrow}
                /> */}
                <p className="text-gray-700 mt-3 text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Stats Row */}
                {/* <div className="service-stats mt-4 flex gap-4 text-center">
                  <div className="stat-item flex-1">
                    <div className="stat-value text-blue-500 font-bold">
                      {service.projects}
                    </div>
                    <div className="stat-label text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item flex-1">
                    <div className="stat-value text-blue-500 font-bold">
                      {service.satisfaction}
                    </div>
                    <div className="stat-label text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div> */}
              </div>

              {/* Expanded Details */}
              {/* {expandedId === service.id && (
                <div className="service-card-details animate-slideDown">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.details}
                  </p> */}

                  {/* Features List */}
                  {/* <div className="features-section">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="features-grid">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="feature-tag">
                          ✓ {feature}
                        </div>
                      ))}
                    </div>
                  </div> */}

                  {/* CTA Button */}
                  {/* <button className="service-cta-btn mt-4 w-full">
                    Get Started with {service.title.split(" ")[0]}
                  </button>
                </div>
              )} */}
            </div>
          ))}
        </Reveal>
      </div>
    </>
  );
};

export default OurServices;
