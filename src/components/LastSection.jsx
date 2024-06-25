import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import ContactForm from "./ContactForm";

const LastSection = () => {
  return (
    <div>
      <div className="border-t p-3 sm:pt-10 sm:mt-10">
        <div className="grid sm:flex justify-between">
          <div className="flex-[100%] sm:flex-[28%] mt-10 justify-center w-full">
            <h2 className="text-[35px] text-gray-400 sm:text-[60px] TT sm:hidden block">
              What we do <br />
              <span className="text-white">Our expertise</span>
            </h2>
            <ul className="my-3 text-[18px] font-[600] sm:text-[22px]">
              <li>Expertise</li>
              <li>Process</li>
              <li>Studio</li>
              <li>Careers</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex-[100%] sm:flex-[72%] p-3 sm:p-10">
            <h2 className="text-[30px] sm:text-[60px] TT hidden sm:block">
              What we do <br />
              <span className="flex items-center gap-3">
                Our Expertise <HiArrowLongRight />
              </span>
            </h2>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default LastSection;
