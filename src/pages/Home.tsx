import React from "react";
import { Helmet } from "react-helmet-async";
import { HomeMetaTags as metaTags } from "../data/MetaDatas";

import Banner from "../components/Home/Banner";
import Aboutus from "../components/Home/Aboutus";
import Services from "../components/Home/Services";
import Faq from "../components/Home/Faq";
import Feedback from "../components/Home/Feedback";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>

      <div className="bg-image">
        <Banner />
        <Aboutus />
        <Services />
        <Faq />
        <Feedback />
      </div>
    </>
  );
};

export default Home;
