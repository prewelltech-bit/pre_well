import React, { useState } from "react";
import "../home/body/Contact.css";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "web-development",
        message: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="contact-section animate-on-scroll w-full">
      <div className="contact-container">
        <div className="contact-header animate-on-scroll delay-1">
          <h2>Get In Touch</h2>
          <p>Let's discuss your next project and how we can help</p>
        </div>

        <div className="contact-wrapper animate-on-scroll delay-2">
          {/* Map on Left */}
          <div className="contact-map-container">
            <GoogleMap />
          </div>

          {/* Form on Right */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {submitted && (
              <div className="success-message">
                ✅ Thank you! We'll get back to you soon.
              </div>
            )}

            <h3>Send us a Message</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXX XXX XXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="it-solutions">IT Solutions</option>
                </select>
              </div>
            </div>

            <div className="form-group full">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                rows="6"
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
