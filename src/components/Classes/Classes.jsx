import React from "react";
import cardImage from "../../assets/classes.png";
import { CiBookmark } from "react-icons/ci";

const Classes = () => {
  return (
    <div className="w-full px-6 md:px-12 py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Heading Section */}
        <div className="text-center flex flex-col md:flex-row items-center justify-between ">
          <h2 className="text-[30px] sm:text-[39px] font-semibold text-[#2430A0]">
            Discover classes{" "}
            <span className="text-[#E25753] text-[14px] underline ml-2 cursor-pointer">
              SHOW ALL
            </span>
          </h2>
          {/* Currency Switch */}
          <div className="flex items-center mt-4">
            <span className="text-[#4D4D4D] text-[16px]">Show prices in:</span>
            <button className="ml-2 flex border border-none rounded-full overflow-hidden cursor-pointer">
              <span className="px-4 py-1 bg-[#2430A0] text-white text-[14px] rounded-l-full">
                NOK
              </span>
              <span className="px-4 py-1 text-[#1C1C1C] bg-[#F4F7FA] text-[14px] rounded-r-full">
                INR
              </span>
            </button>
          </div>
        </div>

        <p className="text-[#51557D] text-[16px] md:text-[18px] mt-1 text-center md:text-left">
          Choose from a variety of classes from around the world.
        </p>

        {/* Cards Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 relative"
            >
              {/* Discount & Save Icon */}
              <div className="relative w-full">
                <img
                  src={cardImage}
                  alt="class"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#FFFFFF] text-xs text-black font-semibold px-2 py-1 rounded">
                  60% OFF
                </span>
                <button className="absolute top-2 right-2 bg-[#FFFFFF] p-1 rounded-sm shadow-md hover:text-[#E25753]">
                  <CiBookmark />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 pb-16 bg-[#E9EFFF]">
                <p className="text-[#2430A0] font-semibold text-[16px]">
                  LANGUAGE
                </p>
                <h3 className="font-semibold text-[20px] text-[#1B1B1B]">
                  Class name - Lorem ipsum sit elit
                </h3>
                <p className="text-[#7B7B7B] text-[15px] mt-1">
                  by John Doe ⭐ <span className="text-[#FFB051]">4.7</span>
                </p>
                <p className="text-[#3E3E3E] text-[17px] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>

              {/* Price & Button - Stuck to Bottom */}
              <div className="absolute bottom-0 left-0 w-full bg-[#2430A0] text-white flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-[16px]">₹1,499</span>
                  <span className="line-through text-[#7B7B7B] text-[14px]">
                    ₹1,999
                  </span>
                </div>
                <button className="text-[16px] cursor-pointer">
                  Enroll now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
