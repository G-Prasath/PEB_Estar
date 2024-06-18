import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const icons = [
    {
      icons: "fb.png",
      link: "/",
    },
    {
      icons: "insta.png",
      link: "/",
    },
    {
      icons: "linkedin.png",
      link: "/",
    },
    {
      icons: "twitter.png",
      link: "/",
    },
    {
      icons: "youtube.png",
      link: "/",
    },
  ];
  return (
    <div className="w-full bg-secondary py-5">
      <div className="w-full h-full bg-footer grid grid-cols-4 gap-10 p-10 rounded-tl-[70px] max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <Link to="/">
            <img src="/logo-1.png" alt="footer_logo" className="w-[100px]" />
          </Link>
          <p className="text-white tracking-wide leading-6 text-justify mt-5">
            "We are a premier provider of front line construction solutions,
            specializing in pre-engineered buildings. Our reputation is built on
            excellence, efficiency, and quality craftsmanship in every project
            we undertake."
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[16px] text-white font-[600]">Usefull Links</h4>
          <ul className="mt-3 flex flex-col gap-y-3">
            <li>
              <Link to="#/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="#/" className="text-white">
                About
              </Link>
            </li>

            <li>
              <Link to="#/" className="text-white">
                Realisation
              </Link>
            </li>
            <li>
              <Link to="#/" className="text-white">
                Videos
              </Link>
            </li>
            <li>
              <Link to="#/" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[16px] text-white font-[600]">Qucik Links</h4>
          <ul className="mt-3 flex flex-col gap-y-3">
            <li>
              <Link to="#/" className="text-white">
                Pre Engineered Building
              </Link>
            </li>
            <li>
              <Link to="#/" className="text-white">
                Conventional Shed
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[16px] text-white font-[600]">Other Firms</h4>
          <ul className="mt-3 flex flex-col gap-y-3">
            <li>
              <Link to="#/" className="text-white">
                Estar Global
              </Link>
            </li>
            <li>
              <Link to="#/" className="text-white">
                Mechci Cadd
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mini-footer bg-mini_footer flex max-sm:flex-col max-sm:gap-5 items-center justify-around p-5 rounded-br-[70px]">
        <p className="text-white text-[18px] ">
          © Estar Infra alrights reserved 2024.
        </p>
        <ul className="flex items-center gap-5">
          {icons.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                <img
                  src={`/social_icons/${item.icons}`}
                  alt="social_icons"
                  className="w-full"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
