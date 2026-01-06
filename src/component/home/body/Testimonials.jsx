import React, { useState, useEffect } from "react";
import "./Testimonials.css";
// Use public assets path for testimonial background/logo
// const testimonialBg = '/assets/logos/Prewell-Digitech-logo.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO, Tech Innovations",
      text: "Prewell Digitech transformed our digital presence completely. Their team is professional, responsive, and delivers excellence on every project. Highly recommended!",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Marketing Director, Global Brands",
      text: "Outstanding service and support! They understood our vision and executed it flawlessly. Our ROI increased by 300% within 6 months.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Founder, StartUp Hub",
      text: "Working with Prewell was a game-changer. Their innovative solutions and attention to detail set them apart from other agencies.",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Product Manager, Digital Solutions",
      text: "Exceptional team! They delivered our project ahead of schedule and within budget. Communication was crystal clear throughout.",
      avatar: "👩‍💻",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlay(false);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-section animate-on-scroll">
      <div className="bg-testimonial flex justify-center items-center w-[100%] relative">
        {/* Logo Background */}
        <img
          src="/assets/logos/Prewell-Digitech-logo.png"
          alt="Prewell Logo Background"
          className="testimonial-bg-logo"
        />
        <div className="testimonials-container">
          <div className="testimonials-header animate-on-scroll delay-1">
            <h2>What Our Clients Say</h2>
            <p>Real feedback from real clients who trust us</p>
          </div>

          <div className="testimonials-carousel">
            <div className="carousel-content">
              <div className="carousel-card">
                <div className="stars">
                  {[...Array(current.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{current.text}"</p>
                <div className="testimonial-author">
                  <div className="avatar">{current.avatar}</div>
                  <div className="author-info">
                    <h4>{current.name}</h4>
                    <p>{current.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="carousel-btn prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              ❮
            </button>
            <button
              className="carousel-btn next"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              ❯
            </button>

            {/* Dots */}
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
