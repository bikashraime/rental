
import { SearchBanner } from '../../components/banner.js';
import { CategorySilder } from './sections/category_slider.js';
import { RentalRoomSilder } from './sections/rental_rooms_slider.js';
import { ApartmentRoomSilder } from './sections/apartment_rooms_slider.js';
import { ContactUs } from '../../components/contact_us.js';
import bannerGif from "../../assets/animations/middlebanner.gif";


export const HomePage = () => {
    return (
        <div className='animated fadeIn'>
            <SearchBanner />
            <CategorySilder />
            <RentalRoomSilder />
            <div className='text-center' style={{ backgroundColor: "#BEDFE0", marginTop: 80 }}>
                <img src={bannerGif} height={400} />
            </div>
            <ApartmentRoomSilder />
            <ContactUs />
        </div>
    );
}
