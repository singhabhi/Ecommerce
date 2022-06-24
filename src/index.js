import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import { App } from './App';
import { MainHeader } from './Componenets/Header/MainHeader';
import { MainFooter } from './Componenets/Footer/MainFooter';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainHeader/>
      <App/>
      <MainFooter/>
   </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();
