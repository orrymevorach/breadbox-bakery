import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (
    { userLoggedIn,
    showModal,
    logout
    }) => {

    return (
        <header>

            {/* Logo */}
            <div className="header-logo">
                <img src="../../img/logo.png" alt="BreadBox Bakery Logo" />
            </div>

            {/* Nav */}
            <nav className="header-nav clearfix">
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/shop"><li>Shop</li></NavLink>
                    
                    <li>Contact</li>
                </ul>
                {userLoggedIn === false ? 
                    <div className="nav-right">
                        <button className="login-button" onClick={() => showModal('login-modal')}>Log In</button> 
                    </div>
                : userLoggedIn === true ? 
                    <div className="nav-right">
                        <button>My Account</button>
                        <button className="login-button" onClick={logout}>Log Out</button> 
                    </div>
                    
                : null }
            </nav> {/* Closing Nav */}

        </header>
    )
}

export default Header;