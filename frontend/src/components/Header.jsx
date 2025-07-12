import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, userData }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-2xl focus:outline-none">
            &#9776;
          </button>
        </div>

        {/* Title (Clickable) */}
        <div
          onClick={() => navigate('/')}
          className="text-xl font-bold tracking-wide text-center w-full md:w-auto md:text-left md:ml-4 cursor-pointer hover:underline"
        >
          SkillSwap
        </div>

        {/* Right Side: Either Log In or User Info */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <img
                src={userData.image}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">{userData.name}</span>
            </>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="font-medium hover:underline focus:outline-none"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
