import React from "react";

const Service = ({ card1, card2 }) => {

  return (
    <>
      <div className="w-full relative">
        {card1.map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: any[]; images: any[]; }, index: React.Key | null | undefined) => (
          <div key={index} className="pt-10">
            <h1 className="uppercase font-[600] text-center text-white text-[40px] mb-10 max-md:text-[30px]">
              {item.title}
            </h1>

            <div className="flex w-full lg:relative">
              <div className="lg:w-[90%] lg:h-[70vh] lg:flex w-full h-auto">
                <div className="bg-secondary lg:h-[50vh] p-10 lg:rounded-tr-full lg:rounded-br-full">
                  <div className="lg:w-[70%] w-full">
                    {item.description.map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 max-sm:text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="lg:w-[500px] lg:absolute right-0 top-0 lg:rounded-full overflow-hidden max-md:flex max-md:justify-center w-full">
                  <div className="flex w-full lg:aspect-square animate-slide">
                    {item.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt=""
                        className="w-full lg:aspect-square lg:rounded-full mb-10 flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Types of Materials */}
      <div className="bg-secondary my-10 mx-10 p-6 rounded-lg text-white">
        <h2 className="text-center text-xl font-semibold mb-4">
          Multiple Roofing Sheet Choices
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          <div className="flex flex-col items-center p-4 rounded-lg text-black">
            <img
              src="/puf.jpg"
              alt="PUF Panel Roofing Sheet"
              className="mb-2 rounded-lg"
            />
            <p>PUF Panel Roofing Sheet</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg text-black">
            <img
              src="/GI.jpg"
              alt="PUF Panel Roofing Sheet"
              className="mb-2 rounded-lg"
            />
            <p>G.I Roofing Sheet</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          <div className="flex flex-col items-center p-4 rounded-lg text-black">
            <img
              src="/Polycabonate.jpg"
              alt="PUF Panel Roofing Sheet"
              className="mb-2 rounded-lg"
            />
            <p>Polycarbonate Roofing Sheet</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg text-black">
            <img
              src="/Tensile.jpg"
              alt="PUF Panel Roofing Sheet"
              className="mb-2 rounded-lg"
            />
            <p>Tensile Roofing Sheet</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full py-5 h-screen">
        <h1 className="uppercase font-[600] text-center text-white text-[40px] mb-10">
          Benefits
        </h1>
        {card2.map((data: { images: any[]; description: any[]; }, index: React.Key | null | undefined) => (
          <div
            key={index}
            className="w-full flex justify-between relative mt-[50px] max-lg:flex-col"
          >
            <div className="lg:w-[500px] bg-secondary lg:absolute left-[-0%] top-[0%] lg:rounded-full overflow-hidden max-md:flex max-md:justify-center w-full">
              <div className="flex w-full lg:aspect-square animate-slide">
                {data.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Banner ${imgIndex + 1}`}
                    className="w-full lg:aspect-square lg:rounded-full flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            <div className="bg-secondary lg:ml-[5%] flex justify-end items-end lg:min-h-0 lg:w-full lg:rounded-tl-full lg:rounded-bl-full p-5">
              <div className="lg:w-[60%] w-full  flex flex-col justify-start">
                {data.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className="my-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
