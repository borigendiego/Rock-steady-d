import React from 'react';
import styles from './header.module.scss';
//  
import { MENU_LINKS } from './constants';
//

const Header = () => {
    return(
        <nav className={'flex sm:justify-between justify-center sm:pt-4 sm:pb-2 sm:items-center'}>
            <img src={'/assets/images/logo.png'} alt={'logo'} className={'sm:ml-8 w-3/5 sm:w-1/6 sm:pt-0 pt-10'}/>
            <ul className={'flex mr-10 hidden sm:flex'}>
                {
                    MENU_LINKS.map((link,index) =>
                        <a key={index} href={link.linkTo} className={`px-4 text-white ${styles.text}`}><li>{link.label}</li></a>
                    )
                }
            </ul>
        </nav>
    )
};

export default Header;