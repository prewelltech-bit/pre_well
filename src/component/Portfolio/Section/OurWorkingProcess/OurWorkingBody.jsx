import React from "react";
import "./OurWorking.css";

const steps = [
  {
    step: "01",
    title: "Requirements Analysis",
    desc: "We deeply understand your goals, pain points, and expectations to define a clear project scope.",
    image: "/assets/images/marketing.jpg",
  },
  {
    step: "02",
    title: "UI-UX Design",
    desc: "Our creative team designs intuitive, user-centric interfaces for seamless user experience.",
    image: "/assets/images/marketing.jpg",
  },
  {
    step: "03",
    title: "Prototype",
    desc: "We create functional prototypes to visualize flow, gather feedback, and refine ideas early.",
    image: "/assets/images/marketing.jpg",
  },
  {
    step: "04",
    title: "Development",
    desc: "Approved designs are transformed into secure, scalable, and high-performance solutions.",
    image: "/assets/images/marketing.jpg",
  },
  {
    step: "05",
    title: "Testing & Deployment",
    desc: "Thorough testing ensures quality before smooth and reliable deployment.",
    image: "/assets/images/marketing.jpg",
  },
  {
    step: "06",
    title: "Support & Maintenance",
    desc: "We provide continuous monitoring, updates, and improvements for long-term success.",
    image: "/assets/images/marketing.jpg",
  },
];

const OurWorkingBody = () => {
  return (
    <section className="process-section">
      <div className="portfolio-heading">
        <h2 className="portfolio-h4">Our Working Process</h2>
      </div>

      <div className="timeline">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <span className="step-badge">{item.step}</span>

            <div className="timeline-content">
              <div className="image-circle">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkingBody;
