
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Controller } from "swiper";
import { Container, Row } from 'react-bootstrap';

// icons
import prev from '../assets/icons/prev.png';
import next from '../assets/icons/next.png';

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
            <div className='d-flex flex-row align-items-center' >
                <div className="mx-3">
                    <button className='btn btn-round btn-swiper' onClick={() => controlledSwiper.slidePrev()}>
                        <img src={prev} height={30} />
                    </button>
                </div>
                <Swiper
                    className="d-inline-flex"
                    loop={true}
                    spaceBetween={20}
                    loopFillGroupWithBlank={true}
                    // pagination={true}
                    onSwiper={setControlledSwiper}
                    scrollbar={{ draggable: true }}
                    modules={[Pagination, Navigation, Controller]}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                        },
                        650: {
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
                <div className="mx-3">
                    <button className='btn btn-round btn-swiper' onClick={() => controlledSwiper.slideNext()}>
                        <img src={next} height={30} />
                    </button>
                </div>
            </div>
        </Container>
    )
}