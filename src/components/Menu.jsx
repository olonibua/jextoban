import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

const Menu = () => {
  const [isHalfScrolled, setIsHalfScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfWindowHeight = window.innerHeight / 0.48;
      if (window.scrollY > halfWindowHeight) {
        setIsHalfScrolled(true);
      } else {
        setIsHalfScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="flex p-5 sm:p-10  z-10 justify-between  bg-transparent">
        <h2
          className={`GT text-[30px] cursor-pointer text-white hover:text-[#929292] transition-opacity duration-400 ease-in-out ${
            isHalfScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          Jextoban
        </h2>
        <IoIosMenu
          onClick={handleShowMenu}
          className="bg-white cursor-pointer hover:bg-black border hover:text-white p-2 font-thin h-10 sm:h-16 w-10 sm:w-16 text-black rounded-full"
        />

        {/* {!showMenu ? (
          <IoIosMenu
            onClick={handleShowMenu}
            className="bg-white cursor-pointer hover:bg-black border hover:text-white p-2 font-thin h-16 w-16 text-black rounded-full transition-colors duration-300 ease-in-out"
          />
        ) : (
          <TfiClose
            onClick={handleShowMenu}
            className="hover:bg-white cursor-pointer font-extralight bg-black
              border transition-transform duration-500 ease-in-out
              text-white p-2 h-16 w-16 hover:text-gray-700 rounded-full"
          />
        )} */}
      </div>

      <div
        className={`w-full h-full fixed top-0 left-0 bg-black text-white transition-transform duration-500 ease-in-out transform ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <div className="p-5 sm:p-10">
          <div className="flex justify-between">
            <h2 className="GT text-[30px] cursor-pointer text-white hover:text-[#929292] transition-opacity duration-400 ease-in-out">
              Jextoban
            </h2>
            <TfiClose
              onClick={handleShowMenu}
              className="hover:bg-white cursor-pointer font-extralight bg-black
              border transition-transform duration-500 ease-in-out
              text-white p-2 h-8 sm:h-16 w-8 sm:w-16 hover:text-gray-700 rounded-full"
            />
          </div>
          <div className="grid sm:flex ">
            <ul className="TT sm:my-3 text-[35px] sm:text-[62px] flex-[28%] pt-10">
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Expertise
              </li>
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Process
              </li>
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Studio
              </li>
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Careers
              </li>
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Work
              </li>
            </ul>
            <ul className="TT sm:my-3 text-[35px] text-[#555555] sm:text-white sm:text-[62px] flex-[72%] sm:p-5 md:p-10">
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Contact
              </li>
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Blog
              </li>
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Engineer
              </li>
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Services
              </li>
              <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
                Newsletter
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
