import './navbar.scss';
import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';
import './navbarMobile.scss';

const Navbar = () => {
    const windowWidth = window.innerWidth;

    return <> {windowWidth > 930 ? <NavbarDesktop /> : <NavbarMobile />}</>;
};

export default Navbar;
