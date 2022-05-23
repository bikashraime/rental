import React from 'react'
import css from './SwiperTest.module.css'
import b3 from '../Component/Images/b3.jpg'
import house from '../Component/Images/house.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function SwiperTest() {
  return (
    <div className={css.main}>
      <div className={css.title}>
        <span>Title</span>
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
            <img src={b3} />
          </div>
          <div className={css.description}>
            <span>1</span>
          </div>
        </div>
      </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={b3} />
            </div>
            <div className={css.description}>
              <span>2</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={b3} />
            </div>
            <div className={css.description}>
              <span>3</span>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide className={css.slide}>
        <div className={css.card}>
          <div className={css.picContainer}>
            <img src={b3} />
          </div>
          <div className={css.description}>
            <span>4</span>
          </div>
        </div>
      </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={b3} />
            </div>
            <div className={css.description}>
              <span>5</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={b3} />
            </div>
            <div className={css.description}>
              <span>6</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperTest