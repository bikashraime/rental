import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailPage } from './Pages/detail_page/detail_page';
import { NotFoundPage } from './Pages/not_found_page/not_found_page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

