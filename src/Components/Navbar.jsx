import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink to="/" className="hover:text-blue-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-blue-500">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="hover:text-blue-500">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-blue-500">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-gray-100">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="p-2">
            <h1 className="font-bold">Md Soriful Hasan</h1>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">{link}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <button className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
