import React from "react";
import data from "./categoryData";

const CategoryGrid = () => {
  return (
    <div className="w-full px-6 md:px-12 py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-[25px] md:text-[39px] font-semibold  text-[#2430A0] text-start mb-8">
          Browse by category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {data.map((category, index) => (
            <div key={index} className="group flex flex-col items-center">
              {/* Card with Hover Effect */}
              <div className="max-w-[180px] md:max-w-[200px] lg:max-w-[250px] aspect-square bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Category Name with Bottom Border */}
              <p className="mt-3 text-lg font-semibold text-[#1B1B1B] relative pb-1 border-b-2 border-gray-300 group-hover:border-[#2430A0] group-hover:text-[#2430A0] hover:text-[#2430A0] transition">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
