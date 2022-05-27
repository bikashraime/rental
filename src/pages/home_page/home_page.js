
// import Footer from './Component/Footer/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationBar } from '../../components/navbar.js';
import { SearchBanner } from '../../components/banner.js';
import { TopSection } from '../../components/top_section.js';
import { HomeSlider } from '../../components/home_slider.js';
import { CategorySilder } from './sections/category_slider.js';
import { RentalRoomSilder } from './sections/rental_rooms_slider.js';
import { ApartmentRoomSilder } from './sections/apartment_rooms_slider.js';
import Footer from '../../components/footer.js';
import { ContactUs } from '../../components/contact_us.js';


export const HomePage = () => {
    return (
        <>
            <TopSection />
            <NavigationBar />
            <SearchBanner />
            <CategorySilder />
            <RentalRoomSilder />
            <ApartmentRoomSilder />

            <ContactUs />
            <br /><br /><br />
            <Footer />


        </>
    );
}
