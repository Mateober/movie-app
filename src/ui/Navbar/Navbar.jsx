import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMoviesStore } from '../../hooks/useMoviesStore';

import './navbar.scss';
import './navbarMobile.scss';

import { InputSearch } from '../Search/InputSearch';

import { BiCameraMovie, BiMovie } from 'react-icons/bi';
import { MdHome } from 'react-icons/md';
import { RiTvLine } from 'react-icons/ri';
import { HiOutlineSearch } from 'react-icons/hi';
import { windowScrollUp } from '../../helpers/windowScrollUp';


const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    console.log(showSearch);

    // Se desestructuran las funciones que se obtienen del hook useMoviesStore
    const { useSetCategoryType, useSetResetFilters } = useMoviesStore();

    // Función para cambiar el tipo de categoría y reiniciar los filtros al hacer clic en el menú
    const handleCategoryTypeClick = (categoryType) => {
        windowScrollUp()
        useSetCategoryType(categoryType);
        useSetResetFilters();
    };

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <NavLink to={`/home`} className="logo" onClick={windowScrollUp}>
                        <div className="icon">
                            <BiCameraMovie />
                        </div>
                        <p>MovieApp</p>
                    </NavLink>
                    <div className="menu">
                        <NavLink to={`/home`} onClick={windowScrollUp}>HOME</NavLink>
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
                        <NavLink className="row" to={`/home`}>
                            <MdHome className="menu__homeIcon menu__icon" />
                            <p className="title-icon">Home</p>
                        </NavLink>
                        <NavLink
                            className="row"
                            to={`/show/movie`}
                            onClick={() => {
                                handleCategoryTypeClick('movie');
                            }}
                        >
                            <BiMovie className="menu__movieIcon menu__icon" />
                            <p className="title-icon">Movies</p>
                        </NavLink>
                        <NavLink
                            className="row"
                            to={`/show/tv`}
                            onClick={() => {
                                handleCategoryTypeClick('tv');
                            }}
                        >
                            <RiTvLine className="menu__tvIcon menu__icon" />
                            <p className="title-icon">Tv Shows</p>
                        </NavLink>
                        <NavLink className="row" onClick={toggleSearch}>
                            <HiOutlineSearch className="menu__searchIcon menu__icon" />
                            <p>Busqueda</p>
                        </NavLink>
                    </div>

                    <NavLink to={`/login`}>
                        <button className="login-button">Login</button>
                    </NavLink>
                </div>
                <div className={`divSearch ${showSearch ? '' : 'show'}`}>
                    <p>Lorem ipsum</p>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
