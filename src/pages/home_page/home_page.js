
// import Footer from './Component/Footer/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationBar } from '../../components/navbar.js';
import { SearchBanner } from '../../components/banner.js';
import { TopSection } from '../../components/top_section.js';
import { HomeSlider } from '../../components/home_slider.js';
import { CategorySilder } from './sections/category_slider.js';


export const HomePage = () => {
    return (
        <>
            <TopSection />
            <NavigationBar />
            <SearchBanner />
            <CategorySilder />
            {/* <Category title="Categories" />
            <Rental title='Rental rooms' />
            <Slider title='Apartments & Housing' />
            <Slider title='Commercial & Business' />
            <Slider title='Lands' /> */}

            <br /><br /><br />
            {/* <Footer /> */}


        </>
    );
}
