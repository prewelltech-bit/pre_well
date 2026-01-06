import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    {/* <Body />
    <Footer /> */}
  </>
);
