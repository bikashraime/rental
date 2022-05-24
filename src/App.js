
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
import { HomePage } from './pages/home_page/home_page.js';


const App = () => {
  return (<HomePage />
  );
}

export default App;
