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
            className={'flex flex-col sm:flex-row my-8 items-center sm:w-4/5'}
            initial={{opacity: 0, y: 15}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 2}}
        >
            <div className={`flex items-center justify-center md:h-14 h-20 md:w-14 w-20 md:mr-6 ${styles.imageDiv}`}>
                <img src={image} alt={`${key}-profile`} className={'mx-auto md:w-auto w-[55%]'}/>
            </div>
            <div className={'w-9/12 sm:pt-0 pt-4'}>
                <h2 className={`${styles.title} pb-1 sm:text-left text-center`}>{title}</h2>
                <p className={`${styles.text} sm:text-left text-center`}>{text}</p>
            </div>
        </motion.div>
    )
};

export default Item;