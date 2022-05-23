import React from 'react'
import css from '../Component/Body/Slider.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";



export const HomeSlider = (props) => {
    return (
        <div className={css.main}>
            <div className={css.title}>
                <span>{props.title}</span>
                <a class="text-decoration-none text-black" href="#"> View All</a>
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

                {/* {props.objects.map((obj) => {
                    return props.component(obj);
                })} */}
                {/* <SwiperSlide className={css.slide}>
                    <div className={css.card}>
                        <div className={css.picContainer}>
                            <img src={b3} />
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
                            <img src={b3} />
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
                            <img src={b3} />
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
                            <img src={b3} />
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
                            <img src={b3} />
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
                            <img src={b3} />
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
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}