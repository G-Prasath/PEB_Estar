import React from "react";
import { Helmet } from "react-helmet-async";
import { ContactMetaTags as metaTags } from "../data/MetaDatas";

import Banner from "../components/Contact/Banner";
import Address from "../components/Contact/Address";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>
      <Banner />
      <Address />
    </div>
  );
};

export default Contact;
