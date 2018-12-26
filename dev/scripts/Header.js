import React from 'react';

const Header = () => {
    function showLoginModal() {
        document.getElementById('login-modal').style.display = 'block'
    }

    return (
        <header>

            {/* Logo */}
            <div className="header-logo">
                <img src="../../img/logo.png" alt="BreadBox Bakery Logo" />
            </div>

            {/* Nav */}
            <nav className="header-nav clearfix">
                <ul className="clearfix">
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                <button onClick={showLoginModal}>Log In</button>
            </nav> {/* Closing Nav */}

        </header>
    )
}

export default Header;