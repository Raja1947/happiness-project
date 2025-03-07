import React from "react";
import arrow from "../../assets/arrow.png";

const Email = () => {
  return (
    <div className="w-full flex justify-center items-center px-6 md:px-12 py-12 mt-1">
      <div className="w-full max-w-7xl bg-[#FC7753] rounded-3xl md:rounded-full py-12 px-6 sm:px-12 flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="md:max-w-2xl text-white text-[26px] sm:text-[36px] font-semibold leading-tight mb-3">
          Start learning new skills today and pursue your passion
        </h2>

        {/* Subtitle */}
        <p className="text-white text-[16px] sm:text-[18px] mb-6">
          Join the community of global learners and start exploring today.
        </p>

        {/* Email Input & Button */}
        <div className="w-full max-w-md flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-3 border border-white bg-transparent placeholder-white text-white rounded-full outline-none"
          />
          <button className="bg-white text-[#FC7753] font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
            GET STARTED <img src={arrow} alt="Arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
