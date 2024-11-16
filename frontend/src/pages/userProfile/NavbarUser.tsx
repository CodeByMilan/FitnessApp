import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">
              Fitness App
            </Link>
          </div>

          {/* Middle Section */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/userProfile/dashboard/:id"
              className="text-lg hover:bg-blue-500 px-3 py-2 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              to="/workout"
              className="text-lg hover:bg-blue-500 px-3 py-2 rounded-md"
            >
              Your Workout
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
          >
            Dashboard
          </Link>
          <Link
            to="/workout"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
          >
            Your Workout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
