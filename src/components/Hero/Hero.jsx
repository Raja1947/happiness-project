import React from "react";
import hero from "../../assets/hero.png";
import arrow from "../../assets/arrow-right-circle.png";

const Hero = () => {
  return (
    <div className="w-full py-10 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[25px] font-semibold text-[#2430A0] tracking-wide">
            Hobbies ❤️ Happiness ❤️ Home
          </p>

          <p className="w-85 sm:w-95 text-[#2430A0] text-[18px] sm:text-[20px] mt-4 leading-relaxed">
            A Nordic startup bringing incredibly interesting hobbies from around
            the world to people of all ages.
          </p>

          {/* Input & Button */}
          <div className="mt-6 flex w-full max-w-md border border-[#51557D] rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-1/2 px-4 py-2 text-[#2430A0] text-[14px] focus:outline-none"
            />
            <button className="w-1/2 flex items-center justify-center border border-[#2430A0] rounded-full gap-2 bg-[#2430A0] text-white text-[12px] sm:text-[14px] px-6 py-2 font-semibold hover:bg-[#1A237E] transition">
              START EXPLORING
              <img src={arrow} alt="arrow" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Image with Custom Background */}
        <div className="relative flex-1 flex justify-center">
          {/* Custom Background Shape */}
          <div className="absolute -top-8 -left-8 w-60 h-60 md:w-80 md:h-80 bg-red-100 rounded-full z-0"></div>
          <div className="absolute top-10 -right-5 w-48 h-48 md:w-64 md:h-64 bg-yellow-100 rounded-full z-0"></div>

          {/* Main Image */}
          <img
            src={hero}
            alt="hero_img"
            className="relative z-10 w-full max-w-[500px] md:max-w-[600px] h-auto object-cover rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
