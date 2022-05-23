import React from 'react'
import css from './Slider.module.css'
// Import icon
import location from './Slider pictures/location.svg'
import area from './Slider pictures/area.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper";

//Import images
import rental1 from './Rental/rental1.jpg'
import rental2 from './Rental/rental2.jpg'
import rental3 from './Rental/rental3.jpg'
import rental4 from './Rental/rental4.jpeg'
import rental5 from './Rental/rental5.jpeg'
import rental6 from './Rental/rental6.jpeg'

function Rental(props) {
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
          140: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 2,
          },
          860: {
            slidesPerView: 3,
          },
          1140: {
            slidesPerView: 4,
          }
        }}
      >
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={rental1} />
            </div>
            <div className={css.description}>
              <span className={css.detail}>Detail</span>
              <div>
                <img src={location} />
                <span>Location</span>
              </div>
              <div>
                <img src={area} />
                <span>Area</span>
              </div>
              <div>
                Rs. <span>10000000</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={rental2} />
            </div>
            <div className={css.description}>
              <span className={css.detail}>Detail</span>
              <div>
                <img src={location} />
                <span>Location</span>
              </div>
              <div>
                <img src={area} />
                <span>Area</span>
              </div>
              <div>
                Rs. <span>10000000</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={rental3} />
            </div>
            <div className={css.description}>
              <span className={css.detail}>Detail</span>
              <div>
                <img src={location} />
                <span>Location</span>
              </div>
              <div>
                <img src={area} />
                <span>Area</span>
              </div>
              <div>
                Rs. <span>10000000</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={rental4} />
            </div>
            <div className={css.description}>
              <span className={css.detail}>Detail</span>
              <div>
                <img src={location} />
                <span>Location</span>
              </div>
              <div>
                <img src={area} />
                <span>Area</span>
              </div>
              <div>
                Rs. <span>10000000</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={rental5} />
            </div>
            <div className={css.description}>
              <span className={css.detail}>Detail</span>
              <div>
                <img src={location} />
                <span>Location</span>
              </div>
              <div>
                <img src={area} />
                <span>Area</span>
              </div>
              <div>
                Rs. <span>10000000</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <div className={css.card}>
            <div className={css.picContainer}>
              <img src={rental6} />
            </div>
            <div className={css.description}>
              <span className={css.detail}>Detail</span>
              <div>
                <img src={location} />
                <span>Location</span>
              </div>
              <div>
                <img src={area} />
                <span>Area</span>
              </div>
              <div>
                Rs. <span>10000000</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Rental