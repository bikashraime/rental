
import SearchArea from './Component/Body/SearchArea.js';
import TopHeader from './Component/Header/TopHeader.js';
import Category from './Component/Body/Category.js';
import Slider from './Component/Body/Slider.js';
import Footer from './Component/Footer/Footer.js';
import Rental from './Component/Body/Rental.js';
import css from './App.css'

import { NavigationBar } from './components/navbar';
import { SearchBanner } from './components/banner.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css'
import { HomeSlider } from './components/home_slider.js';

import { Swiper, SwiperSlide } from "swiper/react";


const App = () => {
  return (
    <>
      <TopHeader />
      <NavigationBar />
      <SearchBanner />
      <HomeSlider title="Categories"
        objects={[1, 2, 3]}
      // child={(obj) => {
      //   return <SwiperSlide className={css.slide}>
      //     <div className={css.card}>
      //       <div className={css.picContainer}>
      //         <img src={""} />
      //       </div>
      //       <div className={css.description}>
      //         <span className={css.detail}>Detail</span>
      //         <div>
      //           <img src={""} />
      //           <span>Location</span>
      //         </div>
      //         <div>
      //           <img src={""} />
      //           <span>Area</span>
      //         </div>
      //         <div>
      //           Rs. <span>10000000</span>
      //         </div>
      //       </div>
      //     </div>
      //   </SwiperSlide>
      // }}
      />
      <Category title="Categories" />
      <Rental title='Rental rooms' />
      <Slider title='Apartments & Housing' />
      <Slider title='Commercial & Business' />
      <Slider title='Lands' />

      <br /><br /><br />
      <Footer />


    </>
  );
}

export default App;
