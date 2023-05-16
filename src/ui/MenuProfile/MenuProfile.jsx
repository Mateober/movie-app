import { useSelector } from 'react-redux';
import { useAuthStore } from '../../hooks/useAuthStore';
import { ImHeart, ImCheckmark, ImCog, ImBookmark, ImExit } from 'react-icons/im';
import './menuProfile.scss';
import { NavLink } from 'react-router-dom';

export const MenuProfile = ({ profileMenu, setprofileMenu }) => {
    const { user } = useSelector((state) => state.auth);
    const { startLogout } = useAuthStore();
    const onClickLogout = () => {
        startLogout();
    };
    const onClickFavorites = () => {
        setprofileMenu(false);
    };
    return (
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

                        <NavLink to={`/favorites`} onClick={onClickFavorites}>
                            <p>My favorites</p>
                        </NavLink>
                    </div>
                    <div className="menuProfile__options--option">
                        <ImBookmark />
                        <p>My lists</p>
                    </div>
                    <div className="menuProfile__options--option">
                        <ImCheckmark />
                        <p>Recently Watched</p>
                    </div>
                    <div className="menuProfile__options--option">
                        <ImCog />
                        <p>Settings</p>
                    </div>
                </div>
                <div className="line"></div>
                <NavLink to={`/home`} className="menuProfile__logout" onClick={onClickLogout}>
                    <ImExit />
                    <p>Logout</p>
                </NavLink>
            </div>
        </>
    );
};
