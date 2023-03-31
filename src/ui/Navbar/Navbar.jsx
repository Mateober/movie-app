import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import "./navbar.scss";
import { InputSearch } from "../Search/InputSearch";
import { Link, NavLink } from "react-router-dom";
import { useMoviesStore } from "../../hooks/useMoviesStore";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const { fetchMoviesByCategory, useSetCategoryType } = useMoviesStore();
    const [categoryType, setCategoryType] = useState();

    const handleCategoryTypeClick = (categoryType) => {
        setCategoryType(categoryType);
        useSetCategoryType(categoryType);
    };

    const [initialRender, setInitialRender] = useState(false);

    useEffect(() => {
        if (initialRender) {
            fetchMoviesByCategory();
        } else {
            setInitialRender(true);
        }
    }, [categoryType]);

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
                    <NavLink
                        to={`/popular/movie`}
                        onClick={() => {
                            handleCategoryTypeClick("movie");
                        }}
                    >
                        Movies
                    </NavLink>
                    <NavLink
                        to={`/popular/tv`}
                        onClick={() => {
                            handleCategoryTypeClick("tv");
                        }}
                    >
                        TV Shows
                    </NavLink>
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
