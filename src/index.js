import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Navbar1 from './pages/navbar/navbar1';
import { RentalCard } from './pages/rental_card/rental_card';
import Test from './pages/test_page/test';
import UserDropdown from './pages/user_dropdown/user_dropdown';
import reportWebVitals from './reportWebVitals';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

