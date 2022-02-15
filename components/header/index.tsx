import React from 'react';
import styles from './header.module.scss';
//  
import { MENU_LINKS } from './constants';
//

const Header = () => {
    return(
        <nav className={'flex justify-between pt-4 pb-2 items-center'}>
            <img src={'/assets/images/logo.png'} alt={'logo'} className={'ml-8'}/>
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