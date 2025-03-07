import React from "react";
import vector from "../../assets/Vector.png";
import icon from "../../assets/icon.png";
import laptop from "../../assets/laptop.png";
import teacher from "../../assets/Teacher.png";
import paint from "../../assets/Paint Brush.png";

const Teaching = () => {
  return (
    <div className="w-full py-10 px-6 md:px-12  overflow-hidden">
      {/* Vector Image */}
      <div className="flex justify-center">
        <img src={vector} alt="vector" className="w-8 md:w-10" />
      </div>

      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[30px] sm:text-[39px] font-semibold text-[#2430A0]">
          Explore. Enroll. Have Fun. Repeat -
        </p>
        <p className="text-[30px] sm:text-[39px] text-[#2430A0] font-semibold">
          Where hobby meets happiness!
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto ">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105  duration-300">
          <img src={paint} alt="paint" className="w-16 h-16 mb-4" />
          <p className="text-[20px] font-semibold text-[#2430A0]">
            Learn Something New
          </p>
          <p className="text-[#51557D] text-[16px] mt-2">
            Explore your passion beyond boundaries of time, age, and geography.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105  duration-300">
          <img src={teacher} alt="teacher" className="w-16 h-16 mb-4" />
          <p className="text-[20px] font-semibold text-[#2430A0]">
            Skilled & Passionate Teachers
          </p>
          <p className="text-[#51557D] text-[16px] mt-2">
            We offers Interactive classes by experts who are qualified and
            trusted.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105  duration-300">
          <img src={laptop} alt="laptop" className="w-16 h-16 mb-4" />
          <p className="text-[20px] font-semibold text-[#2430A0]">
            Take classes anytime, anywhere
          </p>
          <p className="text-[#51557D] text-[16px] mt-2">
            Join sessions at your own convenience and pace, from the comforts of
            your home.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105  duration-300">
          <img src={icon} alt="icon" className="w-16 h-16 mb-4" />
          <p className="text-[20px] font-semibold text-[#2430A0]">
            Pay as you go
          </p>
          <p className="text-[#51557D] text-[16px] mt-2">
            No enrollment fee for our classes. You only pay for the classes that
            you take. Your payment is Safe and secure with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
