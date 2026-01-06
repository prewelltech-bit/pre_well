import React, { useState } from 'react'
import { Reveal } from '../../components/animations';
import "./Services.css";
import services from '../../jsonFiles/Services.json';

const ServicesBody = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = [...new Set(services.map(s => s.category))];

  return (
    <>
      <section className="services-section">
        <div className="services-container">
          <Reveal direction="up" className="services-header">
            <h2>Our Services</h2>
            <p>Smart strategies. Creative design. Powerful technology.</p>
          </Reveal>

          {/* Category Tags */}
          <Reveal direction="up" className="category-tags">
            {categories.map((category) => (
              <div key={category} className="category-badge">
                {category}
              </div>
            ))}
          </Reveal>

          <Reveal direction="up" stagger staggerDelay={0.08} className="services-grid-advanced">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card-advanced ${expandedId === service.id ? "expanded" : ""}`}
                onClick={() => toggleExpand(service.id)}
              >
                {/* Card Header */}
                <div className="service-card-header">
                  <div className="service-icon-container">
                    <span className="service-icon">{service.icon}</span>
                  </div>
                  <div className="service-info-header">
                    <h3>{service.title}</h3>
                    <p className="category-label">{service.category}</p>
                  </div>
                  <div className="expand-icon">→</div>
                </div>

                {/* Card Body */}
                <div className="service-card-body">
                  <p className="service-desc">{service.desc}</p>

                  {/* Stats */}
                  <div className="service-stats">
                    <div className="stat">
                      <span className="stat-value">{service.clients}</span>
                      <span className="stat-label">Clients</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                      <span className="stat-value">{service.success}</span>
                      <span className="stat-label">Success</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedId === service.id && (
                  <div className="service-details-expanded">
                    <p className="details-text">{service.details}</p>
                    
                    <div className="features-list">
                      <h4>Key Features:</h4>
                      <div className="features">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            <span className="feature-icon">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="service-cta">
                      Get Started Today
                    </button>
                  </div>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default ServicesBody
