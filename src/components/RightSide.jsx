import React from "react";
import firstpic from "../icons/firstpic.png";
import secondpic from "../icons/secondpic.png";
import thirdpic from "../icons/thirdpic.png";

const RightSide = () => {
  return (
    <div className="p-5 sm:p-10 GT">
      <div>
        <h1 className="text-[35px] sm:text-[60px] sm:max-w-[700px] leading-tight TT">
          A digital product studio with an editorial mindset
        </h1>

        <h3 className="text-[18px] sm:text-[20px] my-5">
          For <span className="underline">startups,</span>{" "}
          <span className="underline">large organizations,</span>{" "}
          <span className="underline">media & publishers,</span> and{" "}
          <span className="underline">communities.</span>
        </h3>
        <div className="mt-5">
          <img src={firstpic} alt="firstpic" />
          <h2 className="text-[18px] sm:text-[20px] mt-3 max-w-[450px]">
            Vanderbilt: Digital strategy, identity and design systems
            engineering to support a campus-wide refresh
          </h2>
        </div>
        <div className="mt-20 grid sm:grid-cols-2 gap-10 sm:gap-16">
          <div className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer ">
            <img src={secondpic} alt="firstpic" className="w-full" />
            <h2 className=" text-[18px] sm:text-[20px]">
              MIT.edu: A new homepage, content strategy and platform for the
              vibrant community
            </h2>
          </div>
          <div className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer text-[20px]">
            <img src={thirdpic} alt="firstpic" className="w-full" />
            <h2 className=" text-[18px] sm:text-[20px]">
              Solugen: Visual identity to support the chemistry of everyday life
            </h2>
          </div>
          <div className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer text-[20px]">
            <img src={secondpic} alt="firstpic" className="w-full" />
            <h2 className=" text-[18px] sm:text-[20px]">
              MIT.edu: A new homepage, content strategy and platform for the
              vibrant community
            </h2>
          </div>
          <div className="hover:text-[#929292] transition duration-200 ease-in-out cursor-pointer text-[20px]">
            <img src={thirdpic} alt="firstpic" className="w-full" />
            <h2 className=" text-[18px] sm:text-[20px]">
              Solugen: Visual identity to support the chemistry of everyday life
            </h2>
          </div>
        </div>
        <div className="bg-[#ffeb00] hover:bg-[#353535] justify-center hover:text-white rounded-lg p-3 sm:p-5 h-[240px] sm:h-[130px] mt-20 sm:mt-40 grid sm:flex text-black items-center sm:gap-3">
          <h2 className="text-[25px] font-[600]">Earth Alliance</h2>
          <p className="text-[18px] sm:text-[20px] max-w-[600px]">
            Brand and editorial platform for climate & creativity for Leonardo
            DiCaprio & Laurene Powell Jobs
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
