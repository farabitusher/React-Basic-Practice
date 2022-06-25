import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-area">
      <nav className=" font-medium ">
        <NavLink to="./">Home</NavLink>
        <NavLink to="./service">Service</NavLink>
        <NavLink to="./blog">Blog</NavLink>
        <NavLink to="./about">About</NavLink>
      </nav>
      <p className="text-green-500">Login</p>
    </div>
  );
};

export default Navbar;
