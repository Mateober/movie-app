import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import "./navbar.scss";
import { InputSearch } from "../Search/InputSearch";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <div className="icon">
                        <BiCameraMovie />
                    </div>
                    <p>MovieApp</p>
                </div>
                <ul className={`menu ${showMenu ? "show-menu" : ""}`}>
                    <NavLink to="/movies">Movies</NavLink>
                    <NavLink to="/tv">TV Shows</NavLink>
                    <NavLink to="/people">People</NavLink>
                </ul>
                <InputSearch />
                <button className="login-button">Login</button>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
