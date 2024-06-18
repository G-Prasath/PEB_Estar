import React from "react";

const Service = () => {
  return (
    <div className="w-full bg-primary">
      <h1 className="uppercase font-[600] text-center text-white text-[40px] y-5">
        Pre Engineered Building
      </h1>

      <div className="flex w-full relative">
        <div className="w-[90%] h-[70vh] flex">

          <div className="bg-secondary h-[50vh] p-10 rounded-tr-full rounded-br-full">
            <div className="w-[70%]">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias nulla velit iure porro est amet perspiciatis deleniti repellat dolorum dolor tempore, consequatur provident vitae consectetur non, aperiam eveniet assumenda. Recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam veritatis quidem, magnam tempore hic iste provident quam deleniti sit, eligendi ad eius exercitationem, a odit expedita quo accusantium? Repellat.</p>
            </div>

          </div>

          <div className="absolute right-0 top-0">
            <img src="/about.png" alt="" className="w-[500px]" />
          </div>

        </div>
      </div>


    </div>
  );
};

export default Service;
