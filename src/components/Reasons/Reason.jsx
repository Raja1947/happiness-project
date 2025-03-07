import React from "react";
import reasonsData from "./ReasonData";

const Reason = () => {
  return (
    <div className="w-full  py-10 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
      <h2 className="text-[30px] sm:text-[39px]  font-semibold text-start text-[#2430A0] mb-8">
        Six reasons to choose our class
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasonsData.map((reason) => (
          <div
            key={reason.id}
            className="flex flex-col items-center md:items-start text-center md:text-start  p-6 shadow-md  hover:shadow-xl rounded-lg transition-transform transform hover:scale-105 bg-white"
          >
            <img
              src={reason.icon}
              alt="icon"
              className="w-[80px] h-[80px] mb-4"
            />
            <p className="text-[#1B1F49] text-[17px] sm:text-[19px] mt-2 leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Reason;
