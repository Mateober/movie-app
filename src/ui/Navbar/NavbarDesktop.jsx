import { NavLink } from 'react-router-dom';
import { windowScrollUp } from '../../helpers/windowScrollUp';
import { InputSearch } from '../Search/InputSearch';
import { BiCameraMovie } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { LoadingProfileNavbar } from '../Loading/LoadingProfileNavbar';
import { MenuProfile } from '../MenuProfile/MenuProfile';

export const NavbarDesktop = ({ handleCategoryTypeClick }) => {
    const { status, user } = useSelector((state) => state.auth);
    const [profileMenu, setprofileMenu] = useState(false);
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
                        <NavLink to={`/home`} onClick={windowScrollUp}>
                            HOME
                        </NavLink>
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

                    {status === 'authenticated' ? (
                        <img src={user.profilepic} className="user-icon" onClick={() => setprofileMenu(!profileMenu)}></img>
                    ) : status === 'checking' ? (
                        <LoadingProfileNavbar />
                    ) : (
                        <NavLink to={`/login`}>
                            <button className="login-button">Login</button>
                        </NavLink>
                    )}
                </div>
            </nav>
            {status === 'authenticated' && <MenuProfile profileMenu={profileMenu} setprofileMenu={setprofileMenu}/>}
        </>
    );
};
