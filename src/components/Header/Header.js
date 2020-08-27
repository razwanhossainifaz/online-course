import React from 'react';
import logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <img className = "logo-style" src={logo} alt=""/>
            <nav className = "nav-style">
                <a href="./Home">Home</a>
                <a href="./review">Order Review</a>
                <a href="./manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;