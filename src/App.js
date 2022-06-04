<<<<<<< HEAD
import Navbar from './Component/1.Header/Navbar.js';
import SearchArea from './Component/2.Body/SearchArea.js';
import TopHeader from './Component/1.Header/TopHeader.js';
import Category from './Component/2.Body/Category.js';
import Slider from './Component/2.Body/Slider.js';
import Footer from './Component/3.Footer/Footer.js';
import DetailPage from './Pages/DetailPage.js';
import Imageviewer from './Pages/Imageviewer.js';
import { Route, Routes, Link } from 'react-router-dom';


const App = () => {

  return (
    <>
      <TopHeader/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>

      <SearchArea/>

      <Category title="Categories"/>

      <Slider title='Rental rooms'/>
      <Slider title='Apartments & Housing'/>
      <Slider title='Commercial & Business'/>
      <Slider title='Lands'/>

      <br /><br /><br />
      <Footer/>


      <br /><br /><br />
      {/* <Imageviewer/> */}
      {/* <DetailPage /> */}


    </>
  );
}
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
=======

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
>>>>>>> f5db2806a4e54cba36ff8609e214ef04894aa418
  );
}

export default App;
