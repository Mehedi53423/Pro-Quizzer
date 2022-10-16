import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const activeClassName =
    "px-3 py-1 text-indigo-500 underline hover:text-indigo-600 font-merienda";
  const notActiveClassName = "px-3 py-1 hover:text-indigo-600 font-merienda";
  const mobileNavClicked =
    "flex flex-col items-center md:hidden bg-slate-200 rounded-b-xl container mx-auto pb-4 shadow-xl text-xl";
  const mobileNavNotClicked = "hidden";

  const openClicked = () => {
    setClicked(true);
  };
  const closeClicked = () => {
    setClicked(false);
  };
  return (
    <div>
      <div className="container mx-auto md:flex justify-between mt-5 bg-slate-200 shadow-xl rounded-2xl p-4 hidden">
        <NavLink className="font-bold text-3xl text-indigo-400" to="/">
          <span className="text-white bg-indigo-400 px-2 py-1 rounded-xl font-merienda">
            Pro
          </span>
          <span className="pl-2">Quizzer</span>
        </NavLink>
        <div className="font-bold text-2xl text-indigo-400">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Statistics"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            Blog
          </NavLink>
        </div>
      </div>
      <div className="container mx-auto bg-slate-200 shadow-xl flex justify-between p-4 md:hidden">
        <div>
          <NavLink className="font-bold text-3xl text-indigo-400" to="/">
            <span className="text-white bg-indigo-400 px-2 py-1 rounded-xl font-merienda">
              Pro
            </span>
            <span className="pl-2">Quizzer</span>
          </NavLink>
        </div>
        <button
          className="flex justify-end"
          onClick={clicked ? closeClicked : openClicked}
        >
          {clicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={clicked ? mobileNavClicked : mobileNavNotClicked}>
        <NavLink to="/Home" className="px-3 py-1 text-indigo-500 font-merienda">
          Home
        </NavLink>
        <NavLink
          to="/Statistics"
          className="px-3 py-1 text-indigo-500 font-merienda"
        >
          Statistics
        </NavLink>
        <NavLink to="/Blog" className="px-3 py-1 text-indigo-500 font-merienda">
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
