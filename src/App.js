import { Route, Routes, Link, BrowserRouter, useLocation } from 'react-router-dom';
import { HomePage } from './pages/home_page/home_page.js';
import './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer.js';
import { NavigationBar } from './components/navbar.js';
import DetailPage from './pages/detail_page/detail_page.js';
import { useEffect, useRef } from 'react';
import Signup from './pages/signup_page/signup.js';
import { NotFoundPage } from './pages/not_found_page/not_found_page.js';
import ScrollToTop from 'react-scroll-to-top';
import { AboutUs } from './pages/about_us_page/about_us.js';
import Topbar from './components/Topbar.js';
import Profile from './pages/user_profile/profile.js';
import Setting from './pages/user_setting/user_setting.js';
import ViewAll from './pages/view_all_page/view_all_page.js';
import { useParams } from 'react-router-dom';
import UserDropdown from './pages/user_dropdown/user_dropdown.js';
import Navbar1 from './pages/navbar/navbar1.js';


function ScrollTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		// console.log("home window scroll up activated")
		// console.log(pathname)
	}, [pathname]);

	return null;
}

const App = () => {
	const Params = useParams();

	return (
		<div className='main'>
			<Topbar />
			<BrowserRouter className="main">
				<Navbar1 />
				<ScrollTop />

				<div className='expanded'>
					<Routes  >
						<Route path="/" element={<HomePage />} />
						<Route path='/profile' element={<Profile />}></Route>
						<Route path='/setting' element={<Setting />}></Route>
						<Route exact path="/detail/:id/" element={<DetailPage />} />
						<Route exact path='/aboutus' element={<AboutUs />} />
						<Route path='/viewall'>
							<Route path='room' element={<ViewAll title='Room' />} />
							<Route path='apartment' element={<ViewAll title='Flats & Apartments' />} />
							<Route path='house' element={<ViewAll title='House' />} />
						</Route>
						<Route exact path="/signup" element={<Signup />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					<ScrollToTop className="scrollToTop" smooth color='#fff' />
				</div>

				<Footer />

			</BrowserRouter>
		</div>
	);
}

export default App;
