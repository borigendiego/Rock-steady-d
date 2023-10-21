import React from 'react';
import Image from 'next/image';
//Framer Motion
import {motion} from "framer-motion";


const SocialMedia = () => {
    return(
        <motion.div 
            className='fixed md:flex hidden cursor-pointer bottom-[20px] right-[40px] md:right-[60px] z-40 socialmedia'
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{duration: 0.7, delay: 2}}
        >
           <a href={'https://www.facebook.com/profile.php?id=61551540136730'} target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 md:px-1 px-2'>
                <Image 
                        alt={'Facebook icon'} 
                        src={'/assets/images/social/facebook.svg'}
                        width={25}
                        height={25}
                        className='social-icon'
                />
           </a>
           <a href="https://www.instagram.com/rocksteadydigital/" target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 md:px-1 px-2'>
                <Image 
                        alt={'WhatsApp icon'} 
                        src={'/assets/images/social/instagram.svg'}
                        width={25}
                        height={25}
                        className='social-icon'

                />
           </a>
           <a href={'https://twitter.com/KamRockSteady'} target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 md:px-1 px-2'>
                <Image 
                        alt={'Twitter icon'} 
                        src={'/assets/images/social/twitter.svg'}
                        width={25}
                        height={25}
                        className='social-icon'

                />
           </a>
           <a href="https://www.youtube.com/@rocksteadydigital" target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 md:px-1 px-2'>
                <Image 
                        alt={'Youtube icon'} 
                        src={'/assets/images/social/youtube.svg'}
                        width={25}
                        height={25}
                        className='social-icon'

                />
           </a>  
           <a href={'https://www.tiktok.com/@rocksteadydigital'} target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 md:px-1 px-2'>
                <Image 
                        alt={'TikTok icon'} 
                        src={'/assets/images/social/tiktok.svg'}
                        width={25}
                        height={25}
                        className='social-icon'

                />
           </a>
           <a href="https://www.linkedin.com/company/rock-steady" target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 md:px-1 px-2'>
                <Image 
                        alt={'LinkedIn icon'} 
                        src={'/assets/images/social/linkedin.svg'}
                        width={25}
                        height={25}
                        className='social-icon'

                />
           </a>  
        </motion.div>
    )
}

export default SocialMedia;