import React from 'react';
import PropTypes from 'prop-types';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
//Styles
import styles from './mobile-carousel.module.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MyCarousel = ({ slides }) => {
    return (
        <div className={`${styles.container} mt-20`}>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={110}
                totalSlides={slides.length}
            >
                <Slider
                    className={styles.slider_wrapper}
                >
                    {
                        slides.map((item, index) =>
                            <Slide key={`slide-${index}`} index={index}>
                                {item}
                            </Slide>
                        )
                    }
                </Slider>
                <div className={styles.arrows_container}>
                    <ButtonBack id='carousel-arrow' className={`${styles.arrow} ${styles.back}`}>
                        <img alt={'back-arrow'} src={'/assets/images/right-arrow.svg'} />
                    </ButtonBack>
                    <ButtonNext id='carousel-arrow' className={`${styles.arrow} ${styles.next} ml-auto`}>
                        <img alt={'back-arrow'} src={'/assets/images/right-arrow.svg'} />
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    )
};

MyCarousel.prototypes = {
    slides: PropTypes.array,
};

export default MyCarousel;
