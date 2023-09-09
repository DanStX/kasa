import React from 'react';
import { NavLink } from 'react-router-dom';

// import Navigation from '../components/header/Navigation';

const Error404 = () => {
    return (
        
        <main className='main error'>
            
            <span className="error__span">404</span>
            <p className="error__para">Oups! La page que vous demandez n'exite pas.</p>

            <NavLink to='/'>
                        Retourner sur la page d'accueil
            </NavLink>
        </main>
    );
};

export default Error404;