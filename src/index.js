import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Snackbar from './components/snackbar/snackbar';
import Test from './pages/test_page/test';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />


    {/* <Snackbar/> */}


  </React.StrictMode>
);

reportWebVitals();

