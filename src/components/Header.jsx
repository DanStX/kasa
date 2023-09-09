import React from 'react';
import Banner from './Banner';

const Header = (
    // { isErrorPage }
    ) => {
    
    return (
        <header className="header">
            <Banner />
            {/* {/
            * <Banner  showNavigation={!isErrorPage}/> */} */
            {/* { !isErrorPage && ( */}
                <div className="header__bgImage">
                    <h1 className="header__bgImage-bigTitle big-title">Chez vous, partout et ailleurs</h1>
                </div>
            {/* )} */}
        </header>
    );
};

export default Header;