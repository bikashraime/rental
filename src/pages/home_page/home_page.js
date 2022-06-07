
// import Footer from './Component/Footer/Footer.js';

import { NavigationBar } from '../../components/navbar.js';
import { SearchBanner } from '../../components/banner.js';
import { TopSection } from '../../components/top_section.js';
import { HomeSlider } from '../../components/home_slider.js';
import { CategorySilder } from './sections/category_slider.js';
import { RentalRoomSilder } from './sections/rental_rooms_slider.js';
import { ApartmentRoomSilder } from './sections/apartment_rooms_slider.js';
import Footer from '../../components/footer.js';
import { ContactUs } from '../../components/contact_us.js';
import { useEffect, useRef } from 'react';

import MetaTags from 'react-meta-tags';


export const HomePage = () => {

    const categoryRef = useRef(null);
    const contactRef = useRef();



    return (
        <>
            <MetaTags>
                <title>Home</title>
                <meta name="description" content="We are here to help" />
                <meta property="og:title" content="Subha Rents" />
                <meta property="og:image" content="../../assets/images/banner.jpeg" />
            </MetaTags>
            <TopSection />
            <NavigationBar onNav={(idname) => {
                if (idname == "categories") {
                    categoryRef.current.scrollIntoView()
                } else if (idname.contains("categories")) {
                    categoryRef.current.scrollIntoView()

                }
            }} />
            <SearchBanner />
            <CategorySilder ref={categoryRef} />
            <RentalRoomSilder />
            <ApartmentRoomSilder />
            <ContactUs />
            <Footer />
        </>
    );
}
