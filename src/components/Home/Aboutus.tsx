import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="w-full  flex max-lg:hidden relative my-[5%] h-[90vh] overflow-hidden">
        <div className="w-[92%] bg-secondary h-[85%] rounded-tr-full rounded-br-full">
          <div className="lg:w-[60%] p-10">
            <h3 className="uppercase font-bold text-center text-white text-[48px]">
              About US
            </h3>
            <p className="text-white py-3 text-[20px]">
              We have practical experience in planning and developing top notch
              Pre-Engineered Structures (PEB) and Conventional Structures
              structures. With long stretches of skill in the business, we
              convey creative and savvy solutions to meet our clients'
              interesting necessities.
            </p>
            <p className="text-white py-3 text-[20px]">
              Our PEB structures offer unparalleled flexibility and speed in
              development, making them ideal for many applications including
              stockrooms, plants, and business spaces. Our Conventional
              structure administrations guarantee hearty, tastefully satisfying
              designs dependable.
            </p>
            <p className="text-white py-3 text-[20px]">
            Focused on excellence, we use advanced technologies and strict quality guidelines, ensuring timely, budget-friendly, reliable, and efficient building solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-auto">
          <img
            src="/Home/about.png"
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
              We have practical experience in planning and developing top notch
              Pre-Engineered Structures (PEB) and Conventional Structures
              structures. With long stretches of skill in the business, we
              convey creative and savvy solutions to meet our clients'
              interesting necessities.
            </p>
            <p className="text-white py-3 text-[16px] text-justify">
              Our PEB structures offer unparalleled flexibility and speed in
              development, making them ideal for many applications including
              stockrooms, plants, and business spaces. Our Conventional
              structure administrations guarantee hearty, tastefully satisfying
              designs dependable.
            </p>
            <p className="text-white py-3 text-[16px] text-justify">
            
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
