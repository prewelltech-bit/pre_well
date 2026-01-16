import React from "react";
import "./OurWebPeocess.css";

const processData = [
  { step: "01", title: "Requirement Analysis", desc: "We start by understanding your business, goals, and target audience. This helps us decide what type of website you need and what content should be included." },
  { step: "02", title: "Planning", desc: "We plan the website structure and pages before development. This includes deciding the sitemap, page flow, and how users will navigate through the website." },
  { step: "03", title: "UI/UX Design", desc: "We design the visual layout of your website, including colors, images, and overall style. The design is created to match your brand and provide a good user experience." },
  { step: "04", title: "Development, Testing, Launch", desc: "We build the website using clean and secure code. All features are tested to ensure smooth performance before making the website live and ready to use." },
];

const OurWebProcess = () => {
  return (
    <section className="process-section">
      <h2 className="process-title">Our Web Process</h2>

      <div className="process-container six-box">
        {processData.map((item, index) => (
          <div className="process-card" key={index}>
            <span className="process-step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWebProcess;