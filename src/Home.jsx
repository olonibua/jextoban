import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import LastSection from "./components/LastSection";

export const Home = () => {
  return (
    <div className="p-3 sm:p-10 bg-black text-white min-h-screen">
      <div className="flex">
        <div className="flex-[28%] sticky top-48 self-start hidden md:block">
          <LeftSide />
        </div>
        <div className="flex-[100%] sm:flex-[72%]">
          <RightSide />
        </div>
      </div>
      <LastSection />
    </div>
  );
};
