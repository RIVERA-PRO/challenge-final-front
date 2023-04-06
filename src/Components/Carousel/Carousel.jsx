import React from 'react'
import './carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Carousel1 from '../../img/Carousel1.jpg';
import Carousel2 from '../../img/Carousel2.jpg';
import Carousel3 from '../../img/Carousel3.jpg';


export default function Carousel() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={Carousel1} alt="Carousel1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel2} alt="Carousel2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel3} alt="Carousel3" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
