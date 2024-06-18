import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Banner: React.FC = () => {
  const images = ["/banner-1.jpeg", "/banner-2.jpeg", "/banner-3.jpeg"];

  const options = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    resetProgress: false,
    heightRatio: 0.5,
    cover: true,
    pagination: false,
    arrows: false,
  };

  return (
    <div className="w-full bg-primary">
      <Splide options={options} aria-label="Image Slider" className="my-slider">
        {images.map((image, index) => (
          <SplideSlide key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full aspect-video object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>
      {/* <p className="text-white text-center px-8 py-5 max-md:hidden text-[17px] tracking-wide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur obcaecati saepe est soluta ea, mollitia amet quos hic consectetur earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aut modi, nesciunt nam cumque reiciendis quae earum illo voluptatem voluptate. 
     </p> */}
    </div>
  );
};

export default Banner;
