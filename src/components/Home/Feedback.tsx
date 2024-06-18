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
            <p className="w-[70%] max-lg:w-full text-center text-white font-[18px] my-3">"Working with your company on our PEB project was a pleasure. Professionalism, attention to detail - exceptional!"</p>
          </div>

          <div className="flex flex-col justify-end items-center">
            <img src="/testimonial-1.png" alt="testimonialas" />
            <p className="text-[24px] uppercase font-[600] text-white mt-2">Jayaraman K</p>
            <p className="w-[70%] max-lg:w-full text-center text-white font-[18px] my-3">"Profoundly happy with the traditional venture. Your group's ability and tender loving care were remarkable."</p>
          </div>
    
          <div className="flex flex-col justify-end items-center">
            <img src="/testimonial-1.png" alt="testimonialas" />
            <p className="text-[24px] uppercase font-[600] text-white mt-2">Jayaraman K</p>
            <p className="w-[70%] max-lg:w-full text-center text-white font-[18px] my-3">"We're extremely pleased with the PEB project outcome. Estar's timely delivery made us to signup an new contract fpr industrial purpose"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
