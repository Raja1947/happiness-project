import React from "react";
import { FaRegComment } from "react-icons/fa6";
import data from "./BlogData";

const Blog = () => {
  return (
    <div className="w-full py-6 px-6  md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-left sm:text-center md:text-left text-[30px] sm:text-[39px] font-semibold text-[#2430A0]">
            Our Blogs{" "}
            <span className="text-[#E25753] text-[14px] underline ml-2 cursor-pointer">
              SHOW ALL
            </span>
          </h2>
        </div>

        {/* Blog Grid (Only 3 Blogs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-[#D3DEEC] rounded-lg overflow-hidden hover:shadow-lg transition-all p-5"
            >
              {/* Image Container */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt="Blog"
                  className="w-full h-[200px] sm:h-[230px] object-cover rounded-md"
                />
                {/* Category Tag */}
                <span className="absolute top-3 left-3 bg-red-100 text-[#E25753] text-xs font-semibold px-3 py-2 rounded-sm">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="mt-5">
                {/* Title */}
                <h3 className="text-[19px] sm:text-[18px] md:text-[20px] font-semibold text-[#1B1F49]">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[#51557D] text-[16px] sm:text-[16px] mt-2">
                  {blog.description}
                </p>

                {/* Divider Line Before Publisher */}
                <hr className="my-4 border-t border-gray-300" />

                {/* Footer */}
                <div className="flex justify-between items-center text-[14px] sm:text-[15px] text-[#2430A0] font-semibold">
                  <span>{blog.publisher}</span>
                  <span className="flex gap-2 items-center">
                    <FaRegComment /> {blog.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
