import React from 'react'
import css from './Category.module.css'
import rental from './Category pictures/Rental room.jpg'
import apartment from './Category pictures/apartment.jpg'
import land from './Category pictures/land.jpeg'
import market from './Category pictures/market.jpeg'
import commercial from './Category pictures/commercial.jpeg'
import others from './Category pictures/others.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function Category(props) {
  return (
    <div className={css.main}>
      <div className={css.title}>
        <span>{props.title}</span>
        <button>View All</button>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={css.mySwiper}
        breakpoints={{
          140:{
            slidesPerView: 1,
          },
          575:{
            slidesPerView: 2,
          },
          860:{
            slidesPerView: 3,
          },
          1140:{
            slidesPerView: 4,
          }
        }}
      >
      <SwiperSlide className={css.slide}>
        <div className={css.card}>
          <div className={css.picContainer}>
            <img src={rental} />
          </div>
          <div className={css.description}>
            <span>Rental Room</span>
          </div>
        </div>
      </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={apartment} />
            </div>
            <div className={css.description}>
              <span>Apartments & Housing</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={commercial} />
            </div>
            <div className={css.description}>
              <span>Commercial & Business Offices</span>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide className={css.slide}>
        <div className={css.card}>
          <div className={css.picContainer}>
            <img src={land} />
          </div>
          <div className={css.description}>
            <span>Lands</span>
          </div>
        </div>
      </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={market} />
            </div>
            <div className={css.description}>
              <span>Market shops</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={others} />
            </div>
            <div className={css.description}>
              <span>Others</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Category