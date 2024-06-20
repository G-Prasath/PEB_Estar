import React from "react";
import { Helmet } from "react-helmet-async";
import { AbouMetaTags as metaTags } from "../data/MetaDatas";

import Team from "../components/About/Team";
import AboutSection from "../components/About/AboutSection";
import WhyChoose from "../components/About/WhyChoose";

const About = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>
      <div className="bg-image">
        <AboutSection />
        <Team />
        <WhyChoose />
      </div>
    </>
  );
};

export default About;
