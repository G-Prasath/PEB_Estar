import React from "react";

const Banner = () => {
  return (
    <div className="w-full aspect-video">
      <img src="/banner-3.jpeg" alt="" className="w-full aspect-video" />
      <div className="bg-primary py-10">
        <h2 className="uppercase text-center text-[30px] font-[600] mb-3">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between max-h-screen bg-teal-500 bg-secondary py-10">

          <form className="bg-teal-600 p-6 rounded-lg w-full md:w-1/2 lg:w-3/6 space-y-8 max-md:order-2 flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Name"
              className="w-full py-3 px-5 rounded-lg bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full  py-3 px-5 rounded-lg bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full  py-3 px-5 rounded-lg bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary"
            />
            <select className="w-full py-3 px-5 rounded-lg bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary">
              <option>Select Services</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
            <button
              type="submit"
              className="max-w-max py-3 px-10 rounded-full bg-teal-800 text-white font-[600] hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary flex items-center"
            >
              SEND NOW
            </button>
          </form>

          <div className="md:block lg:w-3/6 py-4 max-md:order-1 max-sm:px-5">
            <img
              src="https://placehold.co/800x400"
              alt="Customer Service"
              className="rounded-lg object-cover w-full aspect-video"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Banner;
