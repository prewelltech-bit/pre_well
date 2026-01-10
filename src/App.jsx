import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./component/home/Home";
import Services from "./component/services/Services";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useSmoothScroll } from "./hooks";
import { CustomCursor, PageLoader } from "./components/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudies from "./component/caseStudies/caseStudies";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import OurTeam from "./component/ourteam/OurTeam";
import WhatsappChat from "./component/WhatsappChat";
import Gallery from "./component/Gallery/Gallery";
// import AnimatTransform from "./AnimatTransform";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Component to handle ScrollTrigger refresh on route changes
const ScrollTriggerRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

const App = () => {
  // Enable smooth scrolling
  useSmoothScroll();

  // Initial ScrollTrigger refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader duration={800} />
      <BrowserRouter>
        <ScrollTriggerRefresh />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      <WhatsappChat />
      {/* <AnimatTransform /> */}
    </>
  );
};

export default App;
