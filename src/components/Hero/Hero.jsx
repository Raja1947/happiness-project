import React from "react";
import hero from "../../assets/hero.png";
import arrow from "../../assets/arrow-right-circle.png";
import msg from "../../assets/msg.png";

const Hero = () => {
  return (
    <div className="relative w-full bg-white py-10 px-6 md:px-12 overflow-hidden">
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

          {/* Input & Button Combined with Equal Space */}
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

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={hero}
            alt="hero_img"
            className="w-full max-w-[500px] md:max-w-[600px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Msg Icon (Fixed Position to Avoid Scroll) */}
      {/* <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10">
        <img src={msg} alt="msg_icon" className="w-12 h-12 sm:w-16 sm:h-16 cursor-pointer" />
      </div> */}
    </div>
  );
};

export default Hero;
