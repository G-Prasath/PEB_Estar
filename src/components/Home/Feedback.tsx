import React from "react";

const Feedback = () => {
  return (
    <div className="w-full bg-primary p-10 max-md:p-5">
      <div className="sec-heading">
        <h3 className="uppercase font-bold text-center text-white text-[48px] max-md:text-[30px] max-md:px-2">
          CUSTOMER FEEDBACK
        </h3>

        <div className="flex w-full justify-between mt-10 max-lg:flex-col max-lg:gap-10">
          
          <div className="flex flex-col justify-end items-center">
            <img src="/testimonial-1.png" alt="testimonialas" />
            <p className="text-[24px] uppercase font-[600] text-white mt-2">Jayaraman K</p>
            <p className="w-[70%] max-lg:w-full text-center text-white font-[18px] my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, est!</p>
          </div>


           <div className="flex flex-col justify-center items-center">
            <img src="/testimonial-2.png" alt="testimonialas" />
            <p className="text-[24px] uppercase font-[600] text-white mt-2">Jayaraman K</p>
            <p className="w-[70%] max-lg:w-full text-center text-white font-[18px] my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, est!</p>
          </div>


          <div className="flex flex-col justify-end items-center">
            <img src="/testimonial-3.png" alt="testimonialas" />
            <p className="text-[24px] uppercase font-[600] text-white mt-2">Jayaraman K</p>
            <p className="w-[70%] max-lg:w-full text-center text-white font-[18px] my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, est!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
