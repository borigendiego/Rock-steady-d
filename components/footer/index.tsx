import React from 'react';
//
import styles from './footer.module.scss';

const Footer = () => {
    return(
        <div className={`${styles.background} pt-8`}>
            <div className={`flex justify-center`}>
                <div className={'w-1/5'}>
                    <img alt={'contact logo'} src={'/assets/images/logo-white.png'}/>
                    <p className={'mt-6'}>Leaders in digital transformation from strategy to implementation
                        through transformation of people, process and technology.</p>
                </div>
                <div className={'w-1/5 ml-10 mt-8'}>
                    <a className={'font-bold pb-2'}>About</a>
                </div>
                <div className={'w-1/5 flex flex-col mt-8'}>
                    <a className={'font-bold pb-2'}>How</a>
                    <a className={'py-2'}>Discover</a>
                    <a className={'py-2'}>Design</a>
                    <a className={'py-2'}>Develop</a>
                    <a className={'py-2'}>Deploy</a>
                    <a className={'py-2'}>Manteinance</a>
                </div>
                <div className={'w-1/5 mt-8 flex flex-col'}>
                    <p className={'font-bold pb-2'}>Contact</p>
                    <a href={'tell:+012 3456789'} className={'py-2'}>+012 3456789</a>
                    <a href={'mailto:rocksteadydigital@gmail.com'} className={'py-2'}>rocksteadydigital@gmail.com</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;