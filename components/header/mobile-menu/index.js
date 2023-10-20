import React from 'react';
//Style
import  styles from './mobileMenu.module.scss';
import Image from 'next/image';

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
                <div className='pt-6'>
                    <a href={'https://www.facebook.com/profile.php?id=61551540136730'} target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 mx-2 my-2'>
                            <Image 
                                    alt={'Facebook icon'} 
                                    src={'/assets/images/social/facebook.svg'}
                                    width={30}
                                    height={30}
                                    className='social-icon'
                            />
                    </a>
                    <a href="https://www.instagram.com/rocksteadydigital/" target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 mx-2 my-2'>
                            <Image 
                                    alt={'WhatsApp icon'} 
                                    src={'/assets/images/social/instagram.svg'}
                                    width={30}
                                    height={30}
                                    className='social-icon'

                            />
                    </a>
                    <a href={'https://twitter.com/KamRockSteady'} target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 mx-2 my-2'>
                            <Image 
                                    alt={'Twitter icon'} 
                                    src={'/assets/images/social/twitter.svg'}
                                    width={30}
                                    height={30}
                                    className='social-icon'

                            />
                    </a>
                    <a href="https://www.youtube.com/@rocksteadydigital" target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 mx-2 my-2'>
                            <Image 
                                    alt={'Youtube icon'} 
                                    src={'/assets/images/social/youtube.svg'}
                                    width={30}
                                    height={30}
                                    className='social-icon'

                            />
                    </a>  
                    <a href={'https://www.tiktok.com/@rocksteadydigital'} target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 mx-2 my-2'>
                            <Image 
                                    alt={'TikTok icon'} 
                                    src={'/assets/images/social/tiktok.svg'}
                                    width={30}
                                    height={30}
                                    className='social-icon'

                            />
                    </a>
                    <a href="https://www.linkedin.com/company/rock-steady" target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 mx-2 my-2'>
                            <Image 
                                    alt={'LinkedIn icon'} 
                                    src={'/assets/images/social/linkedin.svg'}
                                    width={30}
                                    height={30}
                                    className='social-icon'

                            />
                    </a>  
                </div>
            </ul>
        </div>
    )
};

export default MobileMenu;