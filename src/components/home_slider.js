
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Controller } from "swiper";
import { Container, Row } from 'react-bootstrap';

// icons
import prev from '../assets/icons/prev.png';
import next from '../assets/icons/next.png';
import { Link } from 'react-router-dom';

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
            <div style={{ height: 50, width: "100%" }} />
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h2 className='d-inline'>{props.title}</h2>
                <Link to={props.goto} class="text-decoration-none viewall-text" >
                    View All
                </Link>
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