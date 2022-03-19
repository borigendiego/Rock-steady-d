import React from 'react';
import styles from './ready.module.scss';

const Ready = () => {
  return(
      <div className={`flex flex-col justify-center py-40`}>
          <div className={`${styles.box} flex justify-between sm:flex-row flex-col py-20 mx-auto items-center sm:w-4/5 w-7/12 px-20`}>
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