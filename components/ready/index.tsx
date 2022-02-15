import React from 'react';
//
import styles from './ready.module.scss';

const Ready = () => {
  return(
      <div className={`${styles.background} bg-gray-800 py-10 flex flex-col justify-center py-40`}>
          <div className={`${styles.box} flex sm:flex-row flex-col py-20 mx-auto items-center sm:w-4/5 w-7/12`}>
              <div className={`${styles.titles}`}>
                  <h2 className={`${styles.title}`}>READY TO TALK ABOUT</h2>
                  <h2 className={`${styles.title} empty-font`}>YOUR NEXT PROJECT?</h2>
              </div>
              <button className={`${styles.button}`}>Reach Us</button>
          </div>
      </div>
  )
};

export default Ready;