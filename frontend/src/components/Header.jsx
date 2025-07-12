import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-2xl focus:outline-none">
            &#9776;
          </button>
        </div>

        {/* Title */}
        <div className="text-xl font-bold tracking-wide text-center w-full md:w-auto md:text-left md:ml-4">
          SkillSwap
        </div>

        {/* Profile */}
        <div className="hidden md:flex items-center gap-3">
          <span className="font-medium">Log In</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
