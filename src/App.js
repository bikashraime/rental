import Navbar from './Component/1.Header/Navbar.js';
import SearchArea from './Component/2.Body/SearchArea.js';
import TopHeader from './Component/1.Header/TopHeader.js';
import Category from './Component/2.Body/Category.js';
import Slider from './Component/2.Body/Slider.js';
import Footer from './Component/3.Footer/Footer.js';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/home_page/home_page.js';
import './assets/styles/style.css'

const App = () => {

  return (
    <>
      <TopHeader />
      <Navbar />

      <SearchArea />

      <Category title="Categories" />

      <Slider title='Rental rooms' />
      <Slider title='Apartments & Housing' />
      <Slider title='Commercial & Business' />
      <Slider title='Lands' />

      <br /><br /><br />
      <Footer />


    </>
  );
}

export default App;
