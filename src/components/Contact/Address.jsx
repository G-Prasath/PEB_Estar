import React from "react";

const Address = () => {
  return (
    <div>
      {/* lower block */}
      <div className="w-full py-5 h-screen bg-primary">
        <div className="w-full flex justify-between relative mt-[50px] max-lg:flex-col">
          <div className="lg:w-[500px] lg:absolute left-[15%] top-[-5%] lg:rounded-full overflow-hidden max-md:flex max-md:justify-center w-full">
            <div className="flex w-full lg:aspect-square">
              <img
                src="/contact/addr.jpg"
                alt="Banner 1"
                className="w-full lg:aspect-square lg:rounded-full flex-shrink-0"
              />
            </div>
          </div>

          <div className=" flex justify-end md:items-center w-full lg:h-[50vh] left-[0%] lg:rounded-tl-full lg:rounded-bl-full">
            <div className="bg-secondary lg:w-[70%] w-full flex justify-end flex-col py-[3%]">
              <h1 className="uppercase font-[600] text-center text-white text-[30px] mb-5">
                Our Location
              </h1>
              <p className="mb-2 p-5 text-center">
                26/2, Taylor's Estate II Street, Kodambakkam,
                <br /> Chennai - 600 024.
              </p>
              <p className="mb-4 p-5 text-center">Call Us: &nbsp;&nbsp;<a href="/tel:8682842243">86828 42243</a>, &nbsp;&nbsp;<a href="/tel:9566000981">95660 00981</a>, &nbsp;&nbsp;<a href="/tel:7418655555">74186 55555</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
