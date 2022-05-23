import Navbar from './Component/Header/Navbar.js';
import SearchArea from './Component/Body/SearchArea.js';
import TopHeader from './Component/Header/TopHeader.js';
import Category from './Component/Body/Category.js';
import Slider from './Component/Body/Slider.js';
import Footer from './Component/Footer/Footer.js';
import Rental from './Component/Body/Rental.js';
import css from './App.css'
const App = () => {
  return (
    <>
      <TopHeader/>
      <Navbar/>
      <SearchArea/>
      <Category title="Categories"/>
      <Rental title='Rental rooms'/>
      <Slider title='Apartments & Housing'/>
      <Slider title='Commercial & Business'/>
      <Slider title='Lands'/>

      <br /><br /><br />
      <Footer/>


    </>
  );
}

export default App;
