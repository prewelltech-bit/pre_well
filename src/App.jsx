import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Header from "./Header";
import Home from "./component/home/Home";
import Services from "./component/services/Services";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import OurTeam from "./component/ourteam/OurTeam";
import Gallery from "./component/Gallery/Gallery";
import Portfolio from "./component/Portfolio/Portfolio";
import BodyOfWeb from "./component/Portfolio/DropDown/WebDesignAndDevelopment/BodyOfWeb";

import WhatsappChat from "./component/WhatsappChat";
import { useSmoothScroll } from "./hooks";
import { PageLoader } from "./components/animations";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger refresh on route change
const ScrollTriggerRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

const App = () => {
  useSmoothScroll();

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
        <Header /> {/* ✅ VERY IMPORTANT */}

        <ScrollTriggerRefresh />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/web-design-and-development"
            element={<BodyOfWeb />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>

      <WhatsappChat />
    </>
  );
};

export default App;
