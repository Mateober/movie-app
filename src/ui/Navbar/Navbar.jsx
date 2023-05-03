import './navbar.scss';
import { NavbarDesktop } from './navbarDesktop';
import { NavbarMobile } from './navbarMobile';
import './navbarMobile.scss';

const Navbar = () => {
    const windowWidth = window.innerWidth;

    return <> {windowWidth > 930 ? <NavbarDesktop /> : <NavbarMobile />}</>;
};

export default Navbar;
