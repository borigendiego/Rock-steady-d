import React from 'react';

const Footer = () => {
    return(
        <div className={`sm:pt-8 lg:px-32`}>
            <div className={'flex sm:pt-0 pt-8 lg:flex-row justify-center'}>
                <div className={'sm:w-1/5 lg:w-1/3 lg:px-12 flex flex-col items-center sm:items-start'}>
                    <img alt={'contact logo'} src={'/assets/images/logo_white.svg'} className='w-9/12'/>
                </div>
                <div className={'flex lg:w-1/3 items-center flex-wrap'}>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Discover</a>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Design</a>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Develop</a>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Deploy</a>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Manteinance</a>
                </div>
            </div>
            <p className={'sm:mt-4 sm:pt-8 sm:pb-20 text-center text-gray-400'}>
                Leaders in digital transformation from strategy to implementation through transformation of people, process and technology.
            </p>
        </div>
    )
};

export default Footer;