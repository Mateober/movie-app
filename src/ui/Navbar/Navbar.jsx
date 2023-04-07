import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import './navbar.scss';
import { InputSearch } from '../Search/InputSearch';
import { NavLink } from 'react-router-dom';
import { useMoviesStore } from '../../hooks/useMoviesStore';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    // Función toggleMenu para cambiar el valor de showMenu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Se desestructuran las funciones que se obtienen del hook useMoviesStore
    const { useSetCategoryType, useSetResetFilters } = useMoviesStore();

    // Función para cambiar el tipo de categoría y reiniciar los filtros al hacer clic en el menú
    const handleCategoryTypeClick = (categoryType) => {
        useSetCategoryType(categoryType);
        useSetResetFilters();
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
                <ul className={`menu ${showMenu ? 'show-menu' : ''}`}>
                    <NavLink
                        to={`/movie`}
                        onClick={() => {
                            handleCategoryTypeClick('movie');
                        }}
                    >
                        Movies
                    </NavLink>
                    <NavLink
                        to={`/tv`}
                        onClick={() => {
                            handleCategoryTypeClick('tv');
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
