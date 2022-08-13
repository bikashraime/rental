
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
import { RentalCard } from './rental_card';
import Categorylist from './category_list';

function Slider(props) {

    const [controlledSwiper, setControlledSwiper] = useState(null);

   
    return (
        <Container>
            <div style={{ height: 50, width: "100%"}} />
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h2 className='d-inline'>{props.title}</h2>
                <Link to={props.goto} class="text-decoration-none viewall-text" >
                    View All
                </Link>
            </div>
            <div style={{ height: 10 }} />
            <div className='d-flex flex-row align-items-center'>
                <div style={{marginLeft: '-3rem', marginRight:'.2rem'}}>
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
                        0: {
                            slidesPerView: 1,
                        },
                        770: {
                            slidesPerView: 2,
                        },
                        995: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <RentalCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <RentalCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <RentalCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <RentalCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <RentalCard/>
                    </SwiperSlide>
                </Swiper>
                <div style={{marginRight: '-3rem', marginLeft:'.2rem'}}>
                    <button className='btn btn-round btn-swiper' onClick={() => controlledSwiper.slideNext()}>
                        <img src={next} height={30} />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Slider