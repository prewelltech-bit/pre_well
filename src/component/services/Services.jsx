// import { i } from "framer-motion/client";
import React from "react";
import "./Services.css";
import Header from "../../Header";
import Footer from "../../Footer";
import ServicesBody from "./ServicesBody";



const Services = () => {
  return (
    <>
      <Header />
      <div className="mt-5">
        <ServicesBody />
      </div>
      <Footer />
    </>
  );
};

export default Services;
