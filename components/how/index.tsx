import React from "react";
import styles from './how.module.scss';
import { Swiper, SwiperSlide,  } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination, Navigation, Scrollbar, A11y } from "swiper";
import Slider from "react-slick";

const How = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div className={`${styles.background} flex h-screen flex-wrap`}>
            <div className={`w-1/2 flex flex-col justify-center relative`}>
                <img 
                    src={'/assets/images/how-we-do-it-word.png'} 
                    className={'absolute'}
                />
                <div>
                    <h1 className={'empty-font'}>HOW WE</h1>
                    <h1>DO IT</h1>
                </div>
            </div>
            <div className={'flex w-1/2 justify-center items-center flex-col'}>
                <h2>This is how it works</h2>
                
            </div>
        </div>
    )
};

export default How;