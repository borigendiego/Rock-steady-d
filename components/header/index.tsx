import React from 'react';
import styles from './header.module.scss';
//  
import { MENU_LINKS } from './constants';
//
import MobileMenu from './mobile-menu';

const Header = () => {
    return(
        <nav className={`${styles.container} flex flex-col sm:flex-row sm:justify-between sm:pt-8 sm:pb-2 sm:items-center pt-8 my-0 mx-auto sm:mx-0 sm:w-full w-2/5`}>
            <MobileMenu menuItems={MENU_LINKS} />
            <img src={'/assets/images/logo.svg'} alt={'Rock Steady logo'} className={'sm:ml-8 w-full sm:w-48 sm:mt-0 mt-32'}/>
            <ul className={'mr-10 hidden sm:flex'}>
                {
                    MENU_LINKS.map((link,index) =>
                        <a key={index} href={link.linkTo} className={`mx-4 text-white ${styles.text}`}><li>{link.label}</li></a>
                    )
                }
            </ul>
        </nav>
    )
};

export default Header;