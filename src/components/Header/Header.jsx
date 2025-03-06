import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  return (
    <header className="w-full bg-white shadow-md py-4 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Categories */}
        <div className="flex items-center gap-10">
          <h6 className="text-[#2430A0] text-2xl font-bold cursor-pointer">
            LOGO
          </h6>

          {/* Categories with Dropdown */}
          <div className="relative">
            <h6
              className="hidden md:block text-[#2430A0] text-lg font-semibold cursor-pointer tracking-wider"
              onClick={toggleCategories}
            >
              CATEGORIES ▾
            </h6>

            {/* Dropdown Menu */}
            {categoriesOpen && (
              <div className="absolute left-0 mt-2 w-screen max-w-[1100px] bg-[#E9EFEF] shadow-lg rounded-lg py-4 px-6 z-50 flex items-center gap-6">
                {/* Categories List - Two Columns */}
                <div className="grid grid-cols-2 text-[#2430A0] text-sm font-semibold w-1/3">
                  <ul>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Language
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Cooking
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Music
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Arts & Craft
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Yoga
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Academic
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Back to Roots
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Funteresting
                    </li>
                  </ul>
                  <ul>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      All
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Indian
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Norwegian
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                      Category 04
                    </li>
                  </ul>
                </div>
                {/* Right-side Image */}
                <div className="w-2/3 flex justify-center">
                  <img
                    src="https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75"
                    alt="Category Illustration"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <span className="text-[#2430A0] text-sm tracking-widest font-semibold cursor-pointer">
            TEACH
          </span>
          <div className="hidden md:block w-[1px] h-6 bg-[#ABADB6]"></div>
          <button className="text-[#2430A0] tracking-wide font-semibold border border-[#2430A0] px-5 py-1 rounded-full hover:bg-[#2430A0] hover:text-white transition">
            LOGIN
          </button>
          <button className="text-white bg-[#2430A0] tracking-wide font-semibold px-5 py-1 rounded-full border border-transparent hover:bg-white hover:border-[#2430A0] hover:text-[#2430A0] transition">
            SIGNUP
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2430A0]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 bg-white py-4 rounded-lg">
          <span
            className="text-[#2430A0] text-sm tracking-widest font-semibold cursor-pointer"
            onClick={toggleCategories}
          >
            CATEGORIES ▾
          </span>

          {/* Mobile Dropdown */}
          {categoriesOpen && (
            <div className="w-full bg-white shadow-md rounded-lg py-4 px-6">
              <div className="grid grid-cols-2 gap-4 text-[#2430A0] text-sm font-semibold">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Language
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Cooking
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Music
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Arts & Craft
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Yoga
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Academic
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Back to Roots
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Funteresting
                  </li>
                </ul>
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    All
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Indian
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Norwegian
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Category 04
                  </li>
                </ul>
              </div>
            </div>
          )}

          <span className="text-[#2430A0] text-sm tracking-widest font-semibold cursor-pointer">
            TEACH
          </span>
          <button className="text-[#2430A0] border border-[#2430A0] tracking-wide font-semibold px-5 py-1 rounded-full hover:bg-[#2430A0] hover:text-white transition">
            LOGIN
          </button>
          <button className="text-white bg-[#2430A0] tracking-wide font-semibold px-5 py-1 rounded-full border border-transparent hover:bg-white hover:border-[#2430A0] hover:text-[#2430A0] transition">
            SIGNUP
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
