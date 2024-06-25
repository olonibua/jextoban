import React from "react";

const LeftSide = () => {
  return (
    <div className="mt-48 GT ">
      <h2 className="text-[40px] TT">We make...</h2>
      <ul className="my-3 text-[22px] list-disc list-inside">
        <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
          Websites
        </li>
        <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
          Products & Apps
        </li>
        <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
          Digital Brands
        </li>
        <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
          Content Strategies
        </li>
        <li className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer">
          Creative Tools
        </li>
      </ul>
      <button className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer border mt-3 rounded-full items-center w-max p-2 text-[22px] font-[500]">
        See our work
      </button>
    </div>
  );
};

export default LeftSide;
