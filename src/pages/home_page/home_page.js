
import { Link } from 'react-router-dom';
import Categorylist from '../../components/category_list.js';
import { ContactUs } from '../../components/contact_us.js';
import { RentalCard } from '../../components/rental_card.js';
import Slider from '../../components/Slider.js';
import SearchPage from '../search_page/search_page.js';
import Profile from '../user_profile/profile.js';
import Setting from '../user_setting/user_setting.js';

export const HomePage = () => {

    return (
        <div className='animated fadeIn'>
            <SearchPage />
            <Categorylist />

            <Slider title='Room' goto='/viewall/room' />
            <Slider title='Flat & Apartments' goto='/viewall/apartment' />
            <Slider title="House" goto='viewall/house' />
            <Slider title="Lands" goto='*' />

            <ContactUs />
        </div>
    );
}
