import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/BaiTapThucHanhLayout/Header';
import Banner from './Components/BaiTapThucHanhLayout/Banner';
import Footer from './Components/BaiTapThucHanhLayout/Footer';

// SASS
import "./index.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Header />
    <Banner />
    <Footer />
  </>
);
