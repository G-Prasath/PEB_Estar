import React from "react";

const WhyChoose = () => {
  return (
    <>
      <h2 className="uppercase font-[600] text-center text-white text-[40px] my-10">
        Why CHoose us?
      </h2>
      <div className="w-full h-[100vh] hidden lg:flex">
        <div className="w-full aspect-square p-4 flex justify-center items-center relative">
          <img className="w-full absolute right-[-50%]" src="/1st.png" alt="" />
        </div>
        <div className="w-full aspect-square p-4 flex justify-center items-center relative">
          <img className="w-full absolute left-[-50%]" src="/2nd.png" alt="" />
        </div>
      </div>

      <div className="flex relative w-full aspect-square md:hidden">
        <img className="w-full absolute" src="/1st.png" alt="" />

        <img className="w-full absolute" src="/2nd.png" alt="" />
      </div>
    </>
  );
};

export default WhyChoose;
