import { ContactUs } from '../../components/contact_us.js';
import Slider from '../../components/Slider.js';
import Categorylist1 from '../category_list/category_list1.js';
import PropertyList from '../property_listing/property_list.js';
import SearchPage from '../search_page/search_page.js';

export const HomePage = () => {

    return (
        <div className='fadeIn'>
            <SearchPage />
            <Categorylist1 />

            <Slider title='Room' goto='/viewall/room' />
            <Slider title='Flat & Apartments' goto='/viewall/apartment' />
            <PropertyList/>
            <Slider title="House" goto='viewall/house' />
            <Slider title="Lands" goto='*' />

            <ContactUs />
        </div>
    );
}
