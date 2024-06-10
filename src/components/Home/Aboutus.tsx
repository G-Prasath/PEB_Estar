import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="w-full bg-primary flex max-lg:hidden relative my-[5%] h-[90vh] overflow-hidden">
        <div className="w-[92%] bg-secondary h-[550px] rounded-tr-full rounded-br-full">
          <div className="lg:w-[60%] p-10">
            <h3 className="uppercase font-bold text-center text-white text-[48px]">
              About US
            </h3>
            <p className="text-white py-3 text-[1.3vw]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              porro ducimus adipisci velit nisi libero iure ab odio. Dignissimos
              vero magni, iure voluptas neque pariatur sequi laboriosam in quo
              fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, praesentium.
            </p>
            <p className="text-white py-3 text-[1.3vw]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              porro ducimus adipisci velit nisi libero iure ab odio. Dignissimos
              vero magni, iure voluptas neque pariatur sequi laboriosam in quo
              fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, praesentium.
            </p>
            <p className="text-white py-3 text-[1.3vw]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              porro ducimus adipisci velit nisi libero iure ab odio. Dignissimos
              vero magni, iure voluptas neque pariatur sequi laboriosam in quo
              fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, praesentium.
            </p>
          </div>
        </div>
        <div className="flex flex-auto">
          <img
            src="/about.png"
            alt="about"
            className="max-w-[40%] ml-[-35%] absolute top-0 aspect-square"
          />
        </div>
      </div>

      <div className="w-full lg:hidden bg-secondary  rounded-tr-full rounded-tl-full my-5">
        <div className="w-full">
          <img src="/about.png" alt="about" className="w-full" />
        </div>
        <div className="w-full ">
          <div className="p-5">
            <h1 className="uppercase font-[600] text-center text-white text-[40px]">
              About US
            </h1>
            <p className="text-white py-3 text-[16px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              porro ducimus adipisci velit nisi libero iure ab odio. Dignissimos
              vero magni, iure voluptas neque pariatur sequi laboriosam in quo
              fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, praesentium.
            </p>
            <p className="text-white py-3 text-[16px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              porro ducimus adipisci velit nisi libero iure ab odio. Dignissimos
              vero magni, iure voluptas neque pariatur sequi laboriosam in quo
              fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, praesentium.
            </p>
            <p className="text-white py-3 text-[16px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              porro ducimus adipisci velit nisi libero iure ab odio. Dignissimos
              vero magni, iure voluptas neque pariatur sequi laboriosam in quo
              fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, praesentium.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
