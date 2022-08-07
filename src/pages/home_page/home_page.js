import { SearchBanner } from '../../components/banner.js';
import { RentalRoomSilder } from './sections/rental_rooms_slider.js';
import { ApartmentRoomSilder } from './sections/apartment_rooms_slider.js';
import { ContactUs } from '../../components/contact_us.js';
import { RentalCard } from '../../components/rental_card.js';
import Slider from '../../components/Slider.js';

export const HomePage = () => {

    return (
        <div className='animated fadeIn'>

            <Slider title='Room' goto='/signup'/>
            <Slider title='Flat & Apartments' goto='*'/>
            <Slider title="House" goto='*'/>
            <Slider title="Lands" goto='*'/>

            <ContactUs />
        </div>
    );
}
