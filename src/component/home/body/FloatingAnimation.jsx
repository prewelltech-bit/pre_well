import React from "react";
import "./FloatingAnimation.css";

const FloatingAnimation = () => {
  // document.addEventListener("mousemove", (e) => {
  //   document.querySelectorAll(".layer").forEach((l) => {
  //     const s = +l.dataset.speed;
  //     l.style.transform = `translate(${
  //       (e.clientX - window.innerWidth / 2) * s
  //     }px, ${(e.clientY - window.innerHeight / 2) * s}px)`;
  //   });
  // });

  return (
    <>
      <div className="orb-wrap">
        <div className="orb"></div>
        <div className="orb small"></div>
        <div className="orb med"></div>
      </div>
      {/* <div id="parallax">
        <div className="layer" data-speed="0.03"></div>
        <div className="layer" data-speed="0.06"></div>
      </div> */}
    </>
  );
};

export default FloatingAnimation;
