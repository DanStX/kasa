import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Logement from './pages/Logement';

import "./assets/styles/sass/index.scss";

function App() {
  return (

    <BrowserRouter>

   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/logement" element={<Logement    /> } />
     <Route path="*" element={<Error404 />} />
   </Routes>

 </BrowserRouter>
  );

}

export default App;
