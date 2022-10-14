import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClassName =
    "px-3 py-1 text-indigo-500 underline hover:text-indigo-600";
  const notActiveClassName = "px-3 py-1 hover:text-indigo-600";
  return (
    <div className="container mx-auto flex justify-between mt-5 bg-slate-200 shadow-xl rounded-2xl p-4">
      <h1 className="font-bold text-3xl text-indigo-400">
        <span className="text-white bg-indigo-400 px-2 py-1 rounded-xl">
          Pro
        </span>
        <span className="pl-2">Quizzer</span>
      </h1>
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
  );
};

export default Navbar;
