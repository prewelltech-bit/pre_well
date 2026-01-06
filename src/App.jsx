import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./component/home/Home";
import Services from "./component/services/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks";
import { CustomCursor, PageLoader } from "./components/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudies from "./component/caseStudies/caseStudies";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import OurTeam from "./component/ourteam/OurTeam";
// import AnimatTransform from "./AnimatTransform";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // Enable smooth scrolling
  useSmoothScroll();

  // Refresh ScrollTrigger on route changes
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <PageLoader duration={2000} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<OurTeam />} />

        </Routes>
      </BrowserRouter>
      {/* <AnimatTransform /> */}
    </>
  );
};

export default App;
