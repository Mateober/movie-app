import { useSelector } from 'react-redux';
import { useAuthStore } from '../../hooks/useAuthStore';
import { ImHeart, ImCheckmark, ImCog, ImBookmark, ImExit } from 'react-icons/im';
import './menuProfile.scss';

export const MenuProfile = ({ profileMenu }) => {
    const { user } = useSelector((state) => state.auth);
    const { startLogout } = useAuthStore();
    const onClickLogout = () => {
        startLogout();
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
    );
};
