import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='nav-link'>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/Reviews">Reviews</NavLink>
               <NavLink to="/DashBoard">DashBoard</NavLink>
               <NavLink to="/Blogs">Blogs</NavLink>
               <NavLink to="/About">About</NavLink>
               
            </nav>
        </div>
    );
};

export default Navbar;