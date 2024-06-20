import React from "react";
import { Helmet } from "react-helmet-async";
import { PebMetaTags as metaTags } from "../data/MetaDatas";

import Banner from "../components/Service/Banner";
import Service from "../components/Service/Service";
import { Peb1, Peb2 } from "../data/Service";

const Peb = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>
      <div className="bg-image">
        <Banner />
        <Service card1={Peb1} card2={Peb2} />
      </div>
    </>
  );
};

export default Peb;
