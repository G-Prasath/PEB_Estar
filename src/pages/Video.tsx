import React from "react";
import { Helmet } from "react-helmet-async";
import { RealisationMetaTags as metaTags } from "../data/MetaDatas";

const Video = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>
      <div className="bg-image">
        <img src="/banner-3.jpeg" alt="" className="w-full aspect-video" />
        <h2 className="uppercase font-bold text-center text-white text-[40px] p-10">
          Videos
        </h2>
        <div className="flex flex-wrap md:flex-nowrap pl-20 pr-20">
          <div className="md:w-2/3">
            <img
              src="https://placehold.co/600x600"
              alt="Placeholder Image 3"
              className="w-full p-5"
            />
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0  md:w-1/3">
            <img
              src="https://placehold.co/300x300"
              alt="Placeholder Image 1"
              className="w-full p-5"
            />
            <img
              src="https://placehold.co/300x300"
              alt="Placeholder Image 1"
              className="w-full p-5"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap pl-20 pr-20">
          <div className="flex flex-col space-y-4 md:space-y-0  md:w-1/3">
            <img
              src="https://placehold.co/300x300"
              alt="Placeholder Image 1"
              className="w-full p-5"
            />
            <img
              src="https://placehold.co/300x300"
              alt="Placeholder Image 1"
              className="w-full p-5"
            />
          </div>
          <div className="md:w-2/3">
            <img
              src="https://placehold.co/600x600"
              alt="Placeholder Image 3"
              className="w-full p-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
