import React from "react";

const Footer = () => {
  return (
    <div className="p-3 sm:p-10 bg-black text-white ">
      <section>
        <div className="sm:border-b text-[14px] sm:text-[20px] font-[600] border-gray-600 grid sm:flex justify-between p-2">
          <h2 className="border-b sm:border-none my-1 py-1">
            Building in Boston, NYC, LA, DC, Portland, Berlin, and beyond
          </h2>
          <h2>Privacy Policy</h2>
        </div>
      </section>
    </div>
  );
};

export default Footer;
