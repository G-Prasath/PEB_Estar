import React from "react";

const Faq = () => {
  return (
    <div className="w-full bg-secondary h-screen max-lg:h-auto relative overflow-hidden py-5">
      {/* <img src="/round.png" alt="round" className='w-[800px] absolute ml-[-30%] mt-[-10%] top-0 left-0 ' /> */}

      <div className="sec-heading">
        <h3 className="uppercase font-bold text-center text-white text-[48px] max-md:text-[40px] max-md:px-2">
          FREQUENTLY ASKED QUESTIONS
        </h3>
      </div>

      <div className="w-full flex relative mt-[50px] max-lg:flex-col">
        <div className="w-1/6 max-lg:w-full aspect-square">
          <img
            src="/question.webp"
            alt="FAQ"
            className="absolute w-[35%] max-lg:w-full rounded-full"
          />
        </div>

        <div className="w-5/6 max-lg:w-full flex justify-end max-lg:mt-5">
          <ul className="w-full flex flex-col gap-y-8 max-lg:gap-y-3">
            <li className="bg-[#065665] inline-flex justify-center py-2 max-lg:py-5 max-lg:px-3">
              <div>
                <p className="text-[20px] font-[600] text-white mb-2">
                  What are the typical lifespan and maintenance needs of a
                  conventional shed?
                </p>
                <p className="text-[16px] text-white">
                  Life expectancy changes with materials and support. Standard
                  cleaning, painting, and fixes guarantee life span.
                </p>
              </div>
            </li>
            <li className="bg-[#065665] inline-flex justify-center py-2 max-lg:py-5 max-lg:px-3">
              <div>
                <p className="text-[20px] font-[600] text-white mb-2">
                  What perceives pre-engineered buildings from traditional ones?
                </p>
                <p className="text-[16px] text-white">
                  PEBs normally require less support because of tough materials
                  and development methods.
                </p>
              </div>
            </li>
            <li className="bg-[#065665] inline-flex justify-center py-2 max-lg:py-5 max-lg:px-3">
              <div>
                <p className="text-[20px] font-[600] text-white  mb-2">
                  Conventional sheds adapt for custom storage or workspace?
                </p>
                <p className="text-[16px] text-white">
                  We can alter sheds with racks, apparatus racks, or segments
                  for explicit necessities.
                </p>
              </div>
            </li>
            <li className="bg-[#065665] inline-flex justify-center py-2 max-lg:py-5 max-lg:px-3">
              <div>
                <p className="text-[20px] font-[600] text-white  mb-2">
                  Advantages of opting for a pre-engineered building for my
                  project?
                </p>
                <p className="text-[16px] text-white">
                  PEBs offer fast, cost-effective, customizable, sustainable
                  construction.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
