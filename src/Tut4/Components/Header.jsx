import React from "react";
import { Link, NavLink } from "react-router";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Header() {
  return (
    <div className=" w-full bg-slate-800 h-15 text-white p-5 flex justify-between shadow-2xl shadow-amber-200 fixed overflow-hidden">
      <div>Vasanth Coding's</div>
      <div className="flex gap-5">
        {/* <Link to="/Home" className="hover:text-white/50">
          Home
        </Link> */}
        <NavLink to="/Home">
          {({ isActive }) => (
            <span
              className={
                isActive ? "text-white font-bold transition" : "text-white/50"
              }
            >
              Home
            </span>
          )}
        </NavLink>
        <NavLink to="/About">
          {({ isActive }) => (
            <span
              className={
                isActive ? "text-white font-bold transition" : "text-white/50"
              }
            >
              About
            </span>
          )}
        </NavLink>

        <NavLink to="/Profile">
          {({ isActive }) => (
            <span
              className={
                isActive ? "text-white font-bold transition" : "text-white/50"
              }
            >
              Profile
            </span>
          )}
        </NavLink>

        <NavLink to="/Settings">
          {({ isActive }) => (
            <span
              className={
                isActive ? "text-white font-bold transition" : "text-white/50"
              }
            >
              Settings
            </span>
          )}
        </NavLink>
        <Link>
          <RiLogoutCircleRLine />
        </Link>
      </div>
    </div>
  );
}

export default Header;
