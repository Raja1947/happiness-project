import React from "react";
import certified from "../../assets/certified.png";
import arrow from "../../assets/arrow-right-circle.png";

const Community = () => {
  return (
    <div className="w-full flex flex-col md:gap-10 md:flex-row justify-center md:justify-between items-start max-w-7xl mx-auto px-6 md:px-12 py-20">
      {/* Left: Image Container */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        {/* Background Shape (Orange Dots) */}
        <div className="absolute -top-6 -left-6 w-[90%] h-[90%] bg-[#FB7356] rounded-full rotate-12 opacity-20 z-0"></div>

        {/* Actual Image */}
        <img
          src={certified}
          alt="Teachers"
          className="relative z-10 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] rounded-[39%] shadow-lg"
        />
      </div>
      {/* Right: Text Container (Now appears first on small screens) */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-[#2430A0] text-[28px] sm:text-[35px] md:text-[39px] font-semibold leading-tight">
          Become a certified teacher
        </h2>
        <p className="text-[#51557D] mt-4 text-[16px] sm:text-[17px] leading-relaxed max-w-[90%] sm:max-w-[80%] md:max-w-[75%] mx-0">
          We only have the best and trusted teachers from the globe. Join us if
          you have the skill and passion to share it.
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-3 text-[#51557D] text-[15px] sm:text-[16px]">
          <li className="flex items-center">
            <div className="w-3 h-3 bg-[#FFB051] mr-3"></div> Make your own
            schedule
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 bg-[#FFB051] mr-3"></div> Teach students on
            an international platform
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 bg-[#FFB051] mr-3"></div> Become part of a
            passionate educator community
          </li>
        </ul>

        {/* CTA Button */}
        <div className="flex justify-start">
          <button className="mt-6 px-6 py-3 bg-[#2430A0] text-white font-semibold rounded-full hover:bg-[#1A247A] transition-all flex items-center gap-2 cursor-pointer">
            Start Teaching <img src={arrow} alt="arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
