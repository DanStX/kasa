import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
// import Logement from './pages/Logement';
import "./assets/styles/sass/index.scss";
import Header from './components/Header';
import Footer from './components/Footer';
// import Banner from './components/Banner';

// import Banner from './components/Banner';


function App() {
  // const isErrorPage = window.location.pathname === "*";
  // const showNavigation = !isErrorPage;
  
  return (

    <BrowserRouter>
      {/* <Banner showNavigation=
      { 
        // showNavigation
         } /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/logement" element={<Logement />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
