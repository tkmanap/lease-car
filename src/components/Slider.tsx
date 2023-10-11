import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Pagination} from 'swiper/modules';
import s from './Header.module.css'
import headerBackground from '../img/headerBackground.jpg'

const Slider = () => {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className={s.slider}>
                <div className={s.swiper__wrapper}>
                    <SwiperSlide className={s.swiper__slide} style={{backgroundImage: `url(${headerBackground})`}}>
                        <div className={s.swiper__slide} style={{backgroundImage: `url(${headerBackground})`}}></div>
                    </SwiperSlide>
                    <SwiperSlide className={s.swiper__slide} style={{backgroundImage: `url(${headerBackground})`}}>a</SwiperSlide>
                    <SwiperSlide className={s.swiper__slide} style={{backgroundImage: `url(${headerBackground})`}}>a</SwiperSlide>
                    <SwiperSlide className={s.swiper__slide} style={{backgroundImage: `url(${headerBackground})`}}>a</SwiperSlide>
                </div>
            </Swiper>
        </>
    );
};

export default Slider;