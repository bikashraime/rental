
import { SearchBanner } from '../../components/banner.js';
import { CategorySilder } from './sections/category_slider.js';
import { RentalRoomSilder } from './sections/rental_rooms_slider.js';
import { ApartmentRoomSilder } from './sections/apartment_rooms_slider.js';
import { ContactUs } from '../../components/contact_us.js';



export const HomePage = () => {
    return (
        <div className='animated fadeIn'>
            <SearchBanner />
            <CategorySilder />
            <RentalRoomSilder />
            <ApartmentRoomSilder />
            <ContactUs />
        </div>
    );
}
