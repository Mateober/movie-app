import { NavLink } from 'react-router-dom';
import { windowScrollUp } from '../../helpers/windowScrollUp';
import { InputSearch } from '../Search/InputSearch';
import { BiCameraMovie } from 'react-icons/bi';


export const NavbarDesktop = ({handleCategoryTypeClick}) => {

    return (
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
                <NavLink to={`/login`}>
                    <button className="login-button">Login</button>
                </NavLink>
            </div>
        </nav>
    );
};
