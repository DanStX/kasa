import React from 'react';
import Logo from './header/Logo';
import Navigation from './header/Navigation';



const Banner = ({ showNavigation }) => {
  return (
    <div className='banner'>
        <Logo />
        {/* {showNavigation &&  */}
        <Navigation />
        {/* } */}
    </div>
  );
};

export default Banner;