import React from "react";
import { Helmet } from "react-helmet-async";
import { ContactMetaTags as metaTags } from "../data/MetaDatas";

import Banner from "../components/Contact/Banner";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>
      <Banner />
    </div>
  );
};

export default Contact;
