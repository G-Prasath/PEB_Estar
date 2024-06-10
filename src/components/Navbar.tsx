import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const menuData = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About us",
      path: "/about",
    },
    {
      label: "Services",

      subMenu: [
        {
          subLabel: "peb",
          subPath: "/peb",
        },
        {
          subLabel: "convensional",
          subPath: "/convensional",
        },
      ],
    },
    {
      imgSrc: "/logo-1.png",
      path: "/",
    },
    {
      label: "Realisation",
      path: "/realisation",
    },
    {
      label: "Videos",
      path: "/videos",
    },
    {
      label: "Contact us",
      path: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index: any) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-[9999]">
      {/* Desktop Navbar */}
      <div className="mx-auto sm:px-6 lg:px-8 w-full bg-primary px-[5%] sticky top-0">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 md:hidden">
            <img src="/logo-1.png" alt="Logos" className="w-[100px]" />
          </Link>

          <div className="flex items-center w-full">
            <div className="hidden md:block w-full">
              <div className="flex items-center justify-between">
                {menuData.map((item, index) => (
                  <div key={index} className="relative">
                    {/* navbar normal menu */}
                    {item.label !== "Services" ? (
                      <Link
                        to={`${item.path}`}
                        onClick={(e) => item.subMenu && e.preventDefault()}
                        className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm uppercase text-[16px] font-[600]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        {item.subMenu && (
                          <>
                            {/* navbar nested menu */}
                            <button
                              onClick={() => toggleSubMenu(index)}
                              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm uppercase text-[16px] font-[600]"
                            >
                              {item.label}
                            </button>
                            {openSubMenu === index && (
                              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                {item.subMenu.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.subPath}
                                    className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 uppercase font-[600] hover:bg-primary hover:text-white "
                                  >
                                    {subItem.subLabel}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}

                    {/* Logo Images in navbar */}
                    {item.imgSrc && (
                      <Link
                        to={`${item.path}`}
                        onClick={(e) => item.subMenu && e.preventDefault()}
                        className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        <img
                          src={item.imgSrc}
                          alt="Logo"
                          className="w-[100px]"
                        />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex md:hidden justify-between">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="md:hidden absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
            {menuData.map((item, index) => (
              <div key={index}>
                {item.label !== "Services" && !item.imgSrc ? (
                  <Link
                    to={`${item.path}`}
                    onClick={(e) => item.subMenu && e.preventDefault()}
                    className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    {item.subMenu && (
                      <>
                        <button
                          onClick={() => toggleSubMenu(index)}
                          className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        >
                          {item.label}
                        </button>
                        {openSubMenu === index && (
                          <div className="pl-4">
                            {item.subMenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.subPath}
                                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                              >
                                {subItem.subLabel}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;