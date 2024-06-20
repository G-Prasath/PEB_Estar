import React from "react";
import { Helmet } from "react-helmet-async";
import { ConventionalMetaTags as metaTags } from "../data/MetaDatas";

import Banner from "../components/Service/Banner";
import Service from "../components/Service/Service";
import { conventional1, conventional2 } from "../data/Service";

const Conventional = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>
      <div className="bg-image">
        <Banner />
        <Service card1={conventional1} card2={conventional2} />
      </div>
    </>
  );
};

export default Conventional;
