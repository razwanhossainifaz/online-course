import React from 'react';
import logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <img className = "logo-style" src={logo} alt=""/>
        </div>
    );
};

export default Header;