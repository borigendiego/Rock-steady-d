import React from 'react';

const Footer = () => {
    return(
        <div className={`sm:pt-8 lg:px-52`}>
            <div className={`flex flex-col sm:pt-0 pt-8 lg:flex-row`}>
                <div className={'sm:w-1/5 lg:w-1/3 lg:px-12 flex flex-col items-center sm:items-start'}>
                    <img alt={'contact logo'} src={'/assets/images/logo-white.png'}/>
                    <p className={'sm:mt-6 my-6 text-center sm:text-left text-gray-400'}>
                        Leaders in digital transformation from strategy to implementation through transformation of people, process and technology.
                    </p>
                </div>
                <div className={'flex flex-col lg:w-1/3'}>
                    <a className={'py-2 sm:flex hidden w-fit'}>Discover</a>
                    <a className={'py-2 sm:flex hidden w-fit'}>Design</a>
                    <a className={'py-2 sm:flex hidden w-fit'}>Develop</a>
                    <a className={'py-2 sm:flex hidden w-fit'}>Deploy</a>
                    <a className={'py-2 sm:flex hidden w-fit'}>Manteinance</a>
                </div>
               <div className={'w-1/3'}>
                    <p>Contact</p>
               </div>
            </div>
        </div>
    )
};

export default Footer;