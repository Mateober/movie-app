import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InputSearchMobile } from '../Search/InputSearchMobile';
import { BiCameraMovie, BiMovie } from 'react-icons/bi';
import { MdHome } from 'react-icons/md';
import { RiTvLine } from 'react-icons/ri';
import { HiOutlineSearch } from 'react-icons/hi';
import { useSelector } from 'react-redux';

export const NavbarMobile = ({ handleCategoryTypeClick }) => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    const { status, user } = useSelector((state) => state.auth);

    return (
        <>
            {' '}
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
                    {status === 'authenticated' ? (
                        <img src={user.profilepic} className="user-icon"></img>
                    ) : (
                        <NavLink to={`/login`}>
                            <button className="login-button">Login</button>
                        </NavLink>
                    )}
                </div>
            </nav>
            <div className={`divSearch ${showSearch ? 'show' : ''}`}>
                <InputSearchMobile />
            </div>
        </>
    );
};
