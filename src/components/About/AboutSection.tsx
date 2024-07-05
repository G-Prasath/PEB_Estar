import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="bg-primary ">
        <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white pl-8 pt-8 pb-8 max-md:pr-8 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mr-4">
            <h2 className="uppercase font-[600] my-2 text-white text-[40px]">ABOUT US</h2>
            <p className="mb-4">
            Welcome to Estar Private Limited where our story is one of devotion, advancement, and development. Since our beginning, we have been focused on conveying remarkable administrations and answers for our clients, taking huge steps in the business. Our development way is a demonstration of our tireless quest for greatness and our capacity to adjust and flourish in a unique business climate.
            </p>
            <p>
             Founded in 2018, began as a small venture with a big vision. Our goal was simple yet ambitious: to provide top-notch services while fostering a culture of innovation and customer-centricity. With a handful of passionate team members, we embarked on our journey, driven by a commitment to quality and integrity.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              src="/block.png"
              alt="About Us Image"
              className="rounded-r-lg rounded-l-full max-sm:rounded-lg rounded-lg shadow-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
