import { NavLink } from 'react-router-dom';
import { windowScrollUp } from '../../helpers/windowScrollUp';
import { InputSearch } from '../Search/InputSearch';
import { BiCameraMovie } from 'react-icons/bi';
import { ImHeart, ImCheckmark, ImCog, ImBookmark, ImExit } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useAuthStore } from '../../hooks/useAuthStore';
import { LoadingProfileNavbar } from '../Loading/LoadingProfileNavbar';

export const NavbarDesktop = ({ handleCategoryTypeClick }) => {
    const { status, user } = useSelector((state) => state.auth);
    const [profileMenu, setprofileMenu] = useState(false);
    const { startLogout } = useAuthStore();
    const onClickLogout = () => {
        startLogout();
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
            {status === 'authenticated' && (
                <>
                    <div className={`menuProfile ${profileMenu ? 'menuProfileActive' : ''}`}>
                        <div className="menuProfile__profiles">
                            <h3>Profile</h3>
                            <div className="menuProfile__profiles--profile">
                                <img src={user.profilepic} alt="Profile pic" />
                                <p>{user.username}</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="menuProfile__options">
                            <div className="menuProfile__options--option">
                                <ImHeart />
                                <p>My favorites</p>
                            </div>
                            <div className="menuProfile__options--option">
                                <ImBookmark />
                                <p>My lists</p>
                            </div>
                            <div className="menuProfile__options--option">
                                <ImCheckmark />
                                <p>Recently Viewed</p>
                            </div>
                            <div className="menuProfile__options--option">
                                <ImCog />
                                <p>Settings</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="menuProfile__logout" onClick={onClickLogout}>
                            <ImExit />
                            <p>Logout</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
