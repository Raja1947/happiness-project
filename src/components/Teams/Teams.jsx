import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import teachersData from "./TeamsData"; // Import the data

const Team = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[28px] sm:text-[34px] md:text-[39px] font-semibold text-[#2430A0] text-center md:text-start mb-8">
          Meet Our Teachers
        </h2>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto mt-10">
          {teachersData.map((teacher, index) => (
            <div
              key={teacher.id}
              className="flex flex-col items-center text-center shadow-lg hover:shadow-2xl rounded-tl-[80px] md:rounded-tl-[120px] transition-all duration-300 relative overflow-hidden rounded-lg bg-white"
            >
              {/* Profile Image with Slider Arrows (Only for First Card) */}
              <div className="w-full h-[200px] sm:h-[250px] relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />

                {/* Show arrows only on the first card */}
                {index === 0 && (
                  <div className="absolute top-1/2  transform   flex gap-2">
                    <button className="p-2 bg-white rounded-sm shadow-md border border-[#2430A0] text-[#2430A0] hover:bg-[#2430A0] hover:text-white transition-all">
                      <FaChevronLeft size={15} />
                    </button>
                    <button className="p-2 bg-white rounded-sm shadow-md border border-[#2430A0] text-[#2430A0] hover:bg-[#2430A0] hover:text-white transition-all">
                      <FaChevronRight size={15} />
                    </button>
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1B1B1B] mt-4">
                {teacher.name}
              </h3>

              {/* Category */}
              <p className="text-[14px] sm:text-[16px] text-[#FF006D] font-semibold uppercase mb-4">
                {teacher.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
