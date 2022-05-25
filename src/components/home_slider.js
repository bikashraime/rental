import React, { useState } from 'react'
import css from '../Component/Body/Slider.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Controller } from "swiper";
import { Container, Row } from 'react-bootstrap';


export const HomeSlider = (props) => {

    var slides = [];
    for (let index = 0; index < props.itemCounts; index++) {
        slides.push(
            <SwiperSlide>
                {props.builder(index)}
            </SwiperSlide>
        );
    }


    const [controlledSwiper, setControlledSwiper] = useState(null);


    return (
        <Container >
            <div style={{ height: 50 }} />
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h2 className='d-inline'>{props.title}</h2>
                <a class="text-decoration-none viewall-text" href="#"> View All</a>
            </div>
            <div style={{ height: 20 }} />
            <div className='d-flex flex-row' >
                <div className="d-inline-flex">
                    <button onClick={() => controlledSwiper.slidePrev()}>Prev</button>
                </div>
                <Swiper
                    className="d-inline-flex"
                    slidesPerView={4}
                    loop={true}
                    spaceBetween={20}
                    height={200}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true
                    }}
                    // controller={{ control: controlledSwiper }}
                    onSwiper={setControlledSwiper}
                    scrollbar={{ draggable: true }}
                    modules={[Pagination, Navigation, Controller]}
                    breakpoints={{
                        140: {
                            slidesPerView: 3,
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
                    {slides}
                </Swiper>
                <div className="d-inline-flex">
                    <button onClick={() => controlledSwiper.slideNext()}>Next</button>
                </div>
            </div>
        </Container>
    )
}