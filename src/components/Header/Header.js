import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header" >
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/reveiw">Order Reveiw</a>
                <a href="/inventory">Manage Inventoy</a> <br />

                {/* Need to add a card for shopping  */}
            </nav>
        </div>
    );
};

export default Header;