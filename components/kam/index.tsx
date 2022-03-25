import React from 'react';
//components
import Box from './Box';
import styles from './kam.module.scss'

const Kam = () => {
    return(
        <div className={`flex sm:flex-row h-screen sm:justify-around items-center justify-center`} id={'ABOUT'}>
            <Box
                image='/assets/images/kam-home.png'
                title='KAMLESH LAD - FOUNDER'
                text='I can help you reach your financial goals so
                    you can focus on the more important things in life.'
             />
             <div className={`${styles.title_container} sm:flex hidden flex-col w-11/12 sm:w-fit justify-center items-center`}>
                <h1 className={`text-center text-white`}>DIFFERENT</h1>
                <h1 className={`text-center text-white empty-font`}>FROM THE REST</h1>
             </div>
        </div>
    )
};

export default Kam;