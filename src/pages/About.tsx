import React from "react";

import Team from "../components/About/Team";
import AboutSection from "../components/About/AboutSection";
import WhyChoose from "../components/About/WhyChoose";

const About = () => {
  return (
    <>
      <div className="bg-image">
        <AboutSection />
        <Team />
        <WhyChoose />
      </div>
    </>
  );
};

export default About;
