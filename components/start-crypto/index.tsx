import React from 'react';
//
import styles from './start.module.scss';
//framer
import {motion} from "framer-motion";

const Start = () => {
    return(
        <div className={`flex justify-center flex-col mx-auto items-center py-20`} id={'BLOCKCHAIN'}>
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 0.7}}
            >
                <h2 className={`${styles.title} text-5xl leading-10 text-center mb-2`}>
                    Digital Disruption through
                </h2>
                <h2 className={`${styles.title} text-5xl leading-10 text-center mb-8`}>
                    Blockchain Technology
                </h2>
            </motion.div>
            <span className={'sm:w-6/12 w-4/5'}>
                <motion.p
                    className={`${styles.text} p-4 text-center text-gray-400`}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 1}}
                >
                    {'Between 1990 and 2000 the internet grew 63% per year. Crypto & Blockchain is growing 113% per year and increasing exponentially. It is fastest growing technology in recorded human history.'}
                </motion.p>
            </span>
            
            <motion.a
                className={'mt-4 sm:mb-24 text-2xl w-fit'} href={'/digital-disruption'}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1.5}}
            >Read more</motion.a>
        </div>
    )
};

export default Start;