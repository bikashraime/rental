import { Route, Routes, Link, BrowserRouter, useLocation } from 'react-router-dom';
import { HomePage } from './pages/home_page/home_page.js';
import './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer.js';
import { HomeSlider } from './components/home_slider.js';
import { TopSection } from './components/top_section.js';
import { NavigationBar } from './components/navbar.js';
import { SearchBanner } from './components/banner.js';
import { CategorySilder } from './pages/home_page/sections/category_slider.js';
import DetailPage from './pages/detail_page/detail_page.js';
import { useEffect, useRef } from 'react';
import Signup from './pages/signup_page/signup.js';
import { NotFoundPage } from './pages/not_found_page/not_found_page.js';
import CategoryPage from './pages/category_page/category_page.js';
import { ViewAllPage } from './pages/view_all_page.js';
import ScrollToTop from 'react-scroll-to-top';
import { AboutUs } from './pages/about_us_page/about_us.js';


function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    < div>
      <BrowserRouter>
        {/* <TopSection /> */}
        <NavigationBar />
        <ScrollTop />

        <Routes >
          <Route path="/" element={<HomePage/>} />
          <Route exact path="/detail/:id/" element={<DetailPage />} />
          <Route exact path="/categories" element={<CategoryPage />} />
          <Route exact path='/aboutus' element={<AboutUs/>}/>
          <Route exact path="/signup" element={<Signup start={true} />} />
          <Route exact path="/login" element={<Signup start={false} />} />
          <Route exact path="/:pagename/viewall/" element={<ViewAllPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <ScrollToTop className="scrollToTop" smooth
          color='#fff'

        />
                <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
