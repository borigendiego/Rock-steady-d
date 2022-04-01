import React from 'react';
//components
import Box from './Box';
import styles from './kam.module.scss'

const Kam = () => {
    return(
        <div className={`flex flex-wrap flex-col md:flex-row sm:justify-around items-center justify-center`} id={'ABOUT'}>
            <Box
                image='/assets/images/kam-home.png'
                title='KAMLESH LAD - FOUNDER'
                text='I can help you reach your financial goals so
                    you can focus on the more important things in life.'
             />
             <div className={'flex flex-wrap flex-col'}>
                <div className={`${styles.title_container} sm:flex flex-col justify-center items-center`}>
                    <h1 className={`text-center text-white text clamp-h1`}>DIFFERENT</h1>
                    <h1 className={`text-center text-white empty-font clamp-h1`}>FROM THE REST</h1>
                </div>
                <span className={'mt-10 flex flex-col text-center'}>
                    <h3>Create Solutions to Transform L.I.F.E.</h3>
                    <h3>Living In Freedom Everyday</h3>
                </span>
             </div>
        </div>
    )
};

export default Kam;