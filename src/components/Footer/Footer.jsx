import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import logo from "../../assets/footer.png";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F4F7FA] p-6 relative">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 ">
        {/* Class Categories */}
        <div>
          <h3 className="font-semibold text-[18px] text-[#2430A0]">
            Class Categories
          </h3>
          <ul className="mt-2 space-y-2  text-[#51557D] text-[16px]">
            <li>Language</li>
            <li>Cooking</li>
            <li>Music</li>
            <li>Arts & Craft</li>
            <li>Yoga</li>
            <li>Academic</li>
            <li>Back to Roots</li>
            <li>Funteresting</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold text-[18px] text-[#2430A0]">Company</h3>
          <ul className="mt-2 space-y-2 text-[#51557D] text-[16px]">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Learn Section */}
        <div>
          <h3 className="font-semibold text-[18px] text-[#2430A0]">Learn</h3>
          <p className="mt-2  text-[#51557D] text-[16px]">All Classes</p>
        </div>

        {/* Teach Section */}
        <div>
          <h3 className="font-semibold text-[18px] text-[#2430A0]">Teach</h3>
          <p className="mt-2  text-[#51557D] text-[16px]">Become a Teacher</p>
        </div>

        {/* Image Section - Now Fixed */}
        <div className="flex flex-col items-center w-full">
          <img
            src={logo}
            alt="Sell Your Products"
            className="w-full h-40 object-cover rounded-t-lg shadow-md"
          />
          <p className="w-full text-[#2430A0] font-semibold bg-white text-center p-2 rounded-b-lg">
            Sell Your Products With Us
          </p>
        </div>
      </div>

      {/* Lower Section (Now Same Width as Upper Section) */}
      <div className="max-w-7xl mx-auto border-t  border-gray-300 mt-6 pt-4 flex flex-col gap-3 md:flex-row items-center justify-between text-[#51557D]">
        {/* Copyright Text */}
        <p>© Project 2021. All rights reserved.</p>

        {/* Made With Love */}
        <p>Made with ❤️ by SimplePlan</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-700">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <IoIosArrowDropup
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 text-[#2430A0] text-5xl cursor-pointer hover:text-[#2430A0] transition"
        />
      )}
    </div>
  );
};

export default Footer;
