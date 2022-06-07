import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
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

const App = () => {
  const categoryRef = useRef(null);


  return (
    <>
      <BrowserRouter >
        <TopSection />
        <NavigationBar onNav={(idname) => {
          if (idname == "categories") {
            categoryRef.current.scrollIntoView()
          } else if (idname.contains("categories")) {
            categoryRef.current.scrollIntoView()

          }
        }} />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route exact path="/detail/:id/" element={<DetailPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
