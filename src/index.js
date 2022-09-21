import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RentalCard } from './pages/rental_card/rental_card';
import Test from './pages/test_page/test';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

