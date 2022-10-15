import React from 'react';
import styles from './ready.module.scss';
import Link from 'next/link';
//framer
import {motion} from "framer-motion";

const Ready = () => {
  return(
      <div className={`sm:flex hidden flex-col justify-center py-20 my-12`}>
          <motion.div
              className={`${styles.box} flex justify-between sm:flex-row flex-col py-20 mx-auto items-center sm:w-4/5 w-7/12 px-20 max-w-[1400px]`}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{duration: 1, delay: 1}}
          >
              <div className={`${styles.titles}`}>
                  <h2 className={`${styles.title}`}>READY TO TALK ABOUT</h2>
                  <h2 className={`${styles.title} empty-font`}>YOUR NEXT PROJECT?</h2>
              </div>
              <Link href={'#CONTACT'}>
                <button className={`${styles.button}`}>Reach Us</button>
              </Link>
          </motion.div>
      </div>
  )
};

export default Ready;