import React from "react";

const Services = () => {
  return (
    <div className="w-full bg-primary py-5 relative">
      <img src="" alt="" />
      <div className="sec-heading w-full">
        <h3 className="uppercase font-bold text-center text-white text-[48px]">
          Our Service
        </h3>
      </div>

      <div className="flex my-10 flex-col">
        <div className="flex max-lg:flex-col my-5">
          <div className="w-full aspect-video max-md:pr-2">
            <img src="/service-1.png" alt="service one" />
          </div>
          <div className="w-full flex flex-col items-center p-10 max-lg:p-5">
            <h3 className="uppercase font-bold text-white text-[40px] max-lg:text-[28px] max-md:text-[25px]">
              PRE ENGINEERED BUILDING
            </h3>
            <p className="text-white text-[18px] my-4 max-md:text-justify">
              Pre-Designed Structures (PEB) are inventive, productive, and
              adaptable development arrangements. Planned and fabricated in
              production lines, they guarantee exact designing and steady
              quality. The parts are moved to the site for speedy gathering,
              diminishing development time and work costs. PEBs are profoundly
              versatile and adjustable, making them ideal for different
              applications like distribution centers, modern sheds, and business
              structures.
            </p>
            <p className="text-white text-[18px] my-4 max-md:text-justify">
              PEB structures offer sturdiness, low upkeep, and energy
              proficiency. Worked with great materials, they guarantee life span
              and climate obstruction. Harmless to the ecosystem, PEBs produce
              less development squander and can integrate feasible highlights.
              By and large, Pre-Designed Structures give a cutting edge, solid,
              and reasonable development approach.
            </p>
          </div>
        </div>

        <div className="flex max-lg:flex-col my-5">
          <div className="w-full flex flex-col items-center p-10 max-lg:p-5 max-lg:order-2 justify-center">
            <h3 className="uppercase font-bold text-white text-[40px] max-lg:text-[28px]">
              CONVENTIONAL BUILDING
            </h3>
            <p className="text-white text-[18px] my-4 max-md:text-justify">
              Conventional sheds are structures known for their vigor and
              flexibility. Developed utilizing standard structure materials like
              cement, steel, and wood, these sheds are intended to endure
              weighty burdens and brutal weather patterns. The development cycle
              includes deep rooted techniques, guaranteeing strength and life
              span. Traditional sheds are frequently utilized in horticultural,
              modern, and capacity applications because of their unwavering
              quality and capacity to oblige different utilitarian necessities.
            </p>
            <p className="text-white text-[18px] my-4 max-md:text-justify">
              These designs offer critical customization choices, taking into
              account custom-made plans that address explicit issues. They can
              be worked with different highlights like protection, ventilation,
              and high level security frameworks. Furthermore, traditional sheds
              can be effectively extended or adjusted after some time, giving
              long haul versatility. By and large, customary sheds address a
              reliable and adaptable answer for different structure needs.
            </p>
          </div>
          <div className="w-full max-md:pl-2 aspect-video max-lg:order-1 flex justify-end">
            <img src="/service-2.png" alt="service one" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
