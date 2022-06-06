// import Navbar from './Component/1.Header/Navbar.js';
// import SearchArea from './Component/2.Body/SearchArea.js';
// import TopHeader from './Component/1.Header/TopHeader.js';
// import Category from './Component/2.Body/Category.js';
// import Slider from './Component/2.Body/Slider.js';
// import Footer from './Component/3.Footer/Footer.js';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/home_page/home_page.js';
import './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer.js';
import { HomeSlider } from './components/home_slider.js';
import { TopSection } from './components/top_section.js';
import { NavigationBar } from './components/navbar.js';
import { SearchBanner } from './components/banner.js';
import { CategorySilder } from './pages/home_page/sections/category_slider.js';

const App = () => {

  return (
    <>
      <TopSection />
      <NavigationBar />

      <SearchBanner />

      <CategorySilder title="Categories" />

      <HomeSlider title='Rental rooms' />
      <HomeSlider title='Apartments & Housing' />
      <HomeSlider title='Commercial & Business' />
      <HomeSlider title='Lands' />
      <br /><br /><br />
      <Footer />


    </>
  );
}

export default App;
