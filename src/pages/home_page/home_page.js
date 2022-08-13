
import Categorylist from '../../components/category_list.js';
import { ContactUs } from '../../components/contact_us.js';
import { RentalCard } from '../../components/rental_card.js';
import Slider from '../../components/Slider.js';
import Profile from '../user_profile/profile.js';
import Setting from '../user_setting/user_setting.js';

export const HomePage = () => {

    return (
        <div className='animated fadeIn'>
            <Categorylist />

            <Slider title='Room' goto='/signup' />
            <Slider title='Flat & Apartments' goto='*' />
            <Slider title="House" goto='*' />
            <Slider title="Lands" goto='*' />

            <ContactUs />
        </div>
    );
}
