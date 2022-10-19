import React from 'react';
//import styles from './about.module.scss';
//
import Router from 'next/router';
import Link from 'next/link';
//framer
import {motion} from "framer-motion";

const About = () => {
    return(
        <div className={'page-bg flex md:flex-row flex-col md:block'}>
            <motion.a
                href='/#BLOCKCHAIN'
                className='md:float-right md:relative md:right-16 md:top-4 md:text-lg md:p-0 pt-4 pr-4 md:block flex justify-center md:text-md text-xl'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 0.5}}
            >&#9735; GO BACK TO HOME PAGE</motion.a>
            <div className={`md:flex inline md:h-screen h-full`}>
                <motion.div
                    className='md:w-1/2 flex flex-col items-center relative justify-center pt-8 px-8 md:pt-32'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 1}}
                >
                    <img alt={'My photo'} src={'/assets/images/digital-dis.png'} className='md:w-2/3 w-full rounded-md'/>
                    <div className={`bg-primary-purple py-6 px-8 w-[90%] md:w-3/5 rounded-md relative bottom-28 md:left-10`}>
                        <p className='font-italic italic mt-2 opacity-70'>
                            “There are currently over 200 million users of Blockchain technology worldwide. 
                            Based on provable math by 2024 there will be a billion users of Blockchain and by the end of the decade 3 billion users”. 
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className='md:w-1/2 flex flex-col justify-center md:pl-8 md:pt-8'
                    initial={{opacity: 0, x: 15}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 1.5}}
                >
                    <h2 className='empty-font text-4xl md:text-left text-center'>Digital Disruption through</h2>
                    <h2 className='empty-font text-4xl md:text-left text-center'>Blockchain Technology</h2>
                    <p className={'pt-6 opacity-50 w-5/6 md:text-left text-center my-0 mx-auto md:m-0'}>
                        {"Surely you would have heard by now the amount of digital disruption the Blockchain is causing in the world of Finance through DeFi, Asset Management through NFT’s, gaming & social media via the Metaverse..."}
                    </p>
                    <p className={'pt-6 opacity-50 w-5/6 md:text-left text-center my-0 mx-auto md:m-0'}>
                        Rock Steady is ready to help you and your business thrive in this new industry and take advantage of starting in this growth industry whilst it’s in its infancy. Just imagine if you started a .com when the Internet began! Well, you have the opportunity now to start or grow your business in the Blockchain industry with us at Rock Steady Digital.
                    </p>
                    <div className='flex justify-center md:justify-end md:mt-8'>
                        <Link href={'/#CONTACT'}>
                                <button 
                                className={'md:w-1/4 w-1/2 px-3 py-4 md:float-right md:m-0 mb-4 mt-6'}
                                onClick={() => {
                                    //window.localStorage.setItem('section', selectedSection);
                                    Router.push('/#CONTACT')
                                }}
                            >   Reach us</button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;