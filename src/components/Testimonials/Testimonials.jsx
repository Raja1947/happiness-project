import React from "react";
import testimonialsData from "./TestimonialsData";

const Testimonials = () => {
  return (
    <div className="w-full py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[30px] sm:text-[39px] font-semibold text-start text-[#2430A0] mb-8">
          Love from community
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group flex flex-col items-center text-center p-8 rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:bg-[#2430A0] hover:text-white hover:border-[#2430A0] relative"
            >
              {/* Quotation Mark */}
              <span className="absolute top-4 left-4 text-6xl font-bold text-[#D3DEEC] group-hover:text-[#F2CDA0]">
                {" "}
                ❝
              </span>

              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-[100px] h-[115px] rounded-full "
              />

              {/* Name */}
              <h3 className="text-[20px] font-semibold mb-2 text-[#A7A7A7] group-hover:text-white">
                {testimonial.name}
              </h3>

              {/* Testimonial Text */}
              <p className="text-[16px] leading-relaxed text-[#4D4D4D] hover:text-[white]">
                {testimonial.text}
              </p>

              {/* Bottom Blue Border on Hover */}
              <div className="absolute bottom-[-12px] left-0 h-[3px] bg-[#2430A0] w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
