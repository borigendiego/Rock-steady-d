import React, { useState } from "react";
//
import { motion } from "framer-motion";
import TalkModal from "./talkModal";


const Talks = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return(
        <div className='flex flex-col md:flex-row py-20 justify-around'>
            <motion.div 
            className='my-8 md:my-0'
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1}}
            >
               <div className='px-4 md:px-0'>
                    <h3 className="text-center empty-font">FREE TRAINING TALKS</h3>
                    <h1>BOOST</h1>
                    <span className={'flex w-full justify-between'}>
                        <img src={'/assets/images/star_3_crop.png'} className={'object-contain w-10 md:w-16'} />
                        <h1 className={'text-center'}>YOUR</h1>
                        <img src={'/assets/images/star_3_crop.png'} className={'object-contain w-10 md:w-16 rotate-180'} />
                    </span>
                    <h1>GROWTH</h1>
                </div>
                <div className="w-full justify-center mt-4 md:flex hidden">
                    <button 
                    className="py-3 px-4"
                    onClick={() => {setOpenModal(true)}}
                    >
                        Register
                    </button>
                </div>
            </motion.div>
            <motion.div 
            className='my-8 md:my-0'
            initial={{opacity: 0, x: -15}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1}}
            >
                <video width="620" height="440" controls>
                    <source src='/assets/videos/talksVideo.mp4' type="video/mp4"></source>
                </video>
                <div className="w-full justify-center mt-4 flex md:hidden">
                    <button 
                    className="py-3 px-4"
                    onClick={() => {setOpenModal(true)}}
                    >
                        Register
                    </button>
                </div>
            </motion.div>

            <TalkModal open={openModal} closeModal={() => setOpenModal(false)} />
        </div>
    )
}

export default Talks
