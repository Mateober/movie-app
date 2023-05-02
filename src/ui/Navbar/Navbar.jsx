import React, { useState } from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { MdHome } from 'react-icons/md';
import './navbar.scss';
import './navbarMobile.scss';
import { InputSearch } from '../Search/InputSearch';
import { NavLink } from 'react-router-dom';
import { useMoviesStore } from '../../hooks/useMoviesStore';
import { FaSearch } from 'react-icons/fa';
import { BiMovie } from 'react-icons/bi';
import { RiTvLine } from 'react-icons/ri';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

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
        <>
            <nav className="navbar">
                <div className="container">
                    <NavLink to={`/home`} className="logo">
                        <div className="icon">
                            <BiCameraMovie />
                        </div>
                        <p>MovieApp</p>
                    </NavLink>
                    <div className="menu">
                        <NavLink to={`/home`}>HOME</NavLink>
                        <NavLink
                            to={`/show/movie`}
                            onClick={() => {
                                handleCategoryTypeClick('movie');
                            }}
                        >
                            MOVIES
                        </NavLink>
                        <NavLink
                            to={`/show/tv`}
                            onClick={() => {
                                handleCategoryTypeClick('tv');
                            }}
                        >
                            TV SHOWS
                        </NavLink>
                    </div>
                    <InputSearch />
                    <NavLink to={`/login`}>
                        <button className="login-button">Login</button>
                    </NavLink>
                </div>
            </nav>

            <nav className="navbarMobile">
                <div className="container">
                    <NavLink to={`/home`} className="logo">
                        <div className="icon">
                            <BiCameraMovie />
                        </div>
                        <p>MovieApp</p>
                    </NavLink>
                    <div className="menu">
                        <MdHome className="menu__homeIcon" />
                        <p>Home</p>
                        <BiMovie className="menu__movieIcon" />
                        <p>Movies</p>
                        <RiTvLine className="menu__tvIcon" />
                        <p>Tv Shows</p>
                        <FaSearch className="menu__searchIcon" />
                        <p>Busqueda</p>
                    </div>

                    <div className="user-icon"></div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
