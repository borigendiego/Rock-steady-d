import React from 'react';
//Style
import  styles from './mobileMenu.module.scss';

const MobileMenu = (props) => {
    const { menuItems } = props;

    return (
        <div className={`${styles.menuToggle}`}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul className={styles.menu}>
                {
                    menuItems.map((link,index) => <a key={index} href={link.linkTo}><li>{link.label}</li></a>)
                }
            </ul>
        </div>
    )
};

export default MobileMenu;