import React from 'react';
//
import styles from './footer.module.scss';

const Footer = () => {
    return(
        <div className={`${styles.background} sm:pt-8`}>
            <div className={`flex justify-center flex-col sm:flex-row sm:pt-0 pt-8`}>
                <div className={'sm:w-1/5 sm:p-0 px-2 flex flex-col items-center sm:items-start'}>
                    <img alt={'contact logo'} src={'/assets/images/logo-white.png'}/>
                    <p className={'sm:mt-6 my-6 text-center sm:text-left'}>Leaders in digital transformation
                        from strategy to implementation
                        through transformation of people, process and technology.</p>
                </div>
                <div className={'sm:w-1/5'}>
                    <a className={'font-bold pb-2 sm:contents hidden'}>About</a>
                </div>
                <div className={'flex flex-col'}>
                    <a className={'font-bold pb-2 sm:contents hidden'}>How</a>
                    <a className={'py-2 sm:flex hidden'}>Discover</a>
                    <a className={'py-2 sm:flex hidden'}>Design</a>
                    <a className={'py-2 sm:flex hidden'}>Develop</a>
                    <a className={'py-2 sm:flex hidden'}>Deploy</a>
                    <a className={'py-2 sm:flex hidden'}>Manteinance</a>
                </div>
                <div className={'sm:w-1/5 flex flex-col items-center sm:items-baseline sm:mt-0 mt-4'}>
                    <p className={'font-bold pb-2'}>Contact</p>
                    <a href={'tell:+012 3456789'} className={'py-2'}>+012 3456789</a>
                    <a href={'mailto:rocksteadydigital@gmail.com'} className={'py-2'}>rocksteadydigital@gmail.com</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;