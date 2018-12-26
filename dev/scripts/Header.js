import React from 'react';

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                {userLoggedIn === false ? 
                    <button onClick={() => showModal('login-modal')}>Log In</button> 
                : userLoggedIn === true ? 
                    <button onClick={logout}>Log Out</button> 
                : null }
            </nav> {/* Closing Nav */}

        </header>
    )
}

export default Header;