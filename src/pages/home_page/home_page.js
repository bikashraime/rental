
import { ContactUs } from '../../components/contact_us.js';
import Slider from '../../components/Slider.js';
import Profile from '../user_profile/profile.js';

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
