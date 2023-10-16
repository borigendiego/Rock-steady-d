import React from 'react';
import styles from './item.module.scss';
//framer
import { motion } from "framer-motion";

const Item = ({ itemData }) => {
    const {
        key,
        image,
        title,
        text,
    } = itemData;
    
    return(
        <motion.div
            className={'flex flex-col sm:flex-row my-5 items-center sm:w-[92%]'}
            initial={{opacity: 0, y: 15}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{duration: 0.7, delay: 1.5}}
        >
            <div className={`flex items-center justify-center md:h-14 h-20 md:w-14 w-20 md:mr-6 ${styles.imageDiv}`}>
                <img src={image} alt={`${key}-profile`} className={'mx-auto md:w-auto w-[55%] max-w-[35px]'}/>
            </div>
            <div className={'w-9/12 sm:pt-0 pt-4'}>
                <h2 className={`${styles.title}  py-1`}>{title}</h2>
                <p className={`${styles.text} py-1`}>{text}</p>
            </div>
        </motion.div>
    )
};

export default Item;