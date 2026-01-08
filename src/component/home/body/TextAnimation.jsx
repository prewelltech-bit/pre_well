import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TextAnimation() {
  return (
    <>
      <div>
        <h2 style={{ fontSize: "32px", fontWeight: "600" }}>
          <Typewriter
            words={[
              "Smart Digital Marketing Solutions",
              "Creative Social Media & Design",
              "Powerful IT & Web Development"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>
      </div>
    </>
  );
}
