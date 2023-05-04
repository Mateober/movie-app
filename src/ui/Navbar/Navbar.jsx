import { useMoviesStore } from '../../hooks/useMoviesStore';
import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';
import { windowScrollUp } from '../../helpers/windowScrollUp';

import './navbarMobile.scss';
import './navbarDesktop.scss';
//import '../Search/inputSearchDesktop.scss';
//import '../Search/inputSearchMobile.scss';

const Navbar = () => {
    const windowWidth = window.innerWidth;
    const { useSetCategoryType, useSetResetFilters } = useMoviesStore();

    const handleCategoryTypeClick = (categoryType) => {
        windowScrollUp();
        useSetCategoryType(categoryType);
        useSetResetFilters();
    };
    return (
        <>
            <header>
                {windowWidth > 930 ? (
                    <NavbarDesktop handleCategoryTypeClick={handleCategoryTypeClick} />
                ) : (
                    <NavbarMobile handleCategoryTypeClick={handleCategoryTypeClick} />
                )}
            </header>
        </>
    );
};

export default Navbar;
