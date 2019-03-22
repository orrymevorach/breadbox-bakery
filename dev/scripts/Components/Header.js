import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { userLoggedIn,
                showModal,
                logout
            } = this.props

        return (
            <header>
    
                {/* Logo */}
                <div className="header-logo">
                    <img src="../../img/logo.png" alt="BreadBox Bakery Logo" />
                </div>
    
                {/* Nav */}
                <nav className="header-nav clearfix">
                    <ul className="nav-center">
                        <NavLink to="/" exact activeClassName="active"><li>Home</li></NavLink>
                        <NavLink to="/shop" activeClassName="active"><li>Shop</li></NavLink>
                        <NavLink to="/contact" activeClassName="active"><li>Contact</li></NavLink>
                    </ul>
                    {userLoggedIn === false ? 
                        <div className="nav-right nav-with-subtext">
                            <div className="row">
                                <button className="create-account" onClick={() => showModal('create-account-modal')}>Create Account</button>
                                <button className="login-button" onClick={() => showModal('login-modal')}>Log In</button> 
                            </div>
                            <p className="button-subtext">Create an account to place an order</p>
                        </div>
                    : userLoggedIn === true ? 
                        <div className="nav-right">
                            <NavLink to="/myAccount">My Account</NavLink>
                            <button className="login-button" onClick={logout}>Log Out</button> 
                        </div>
                        
                    : null }
                </nav> {/* Closing Nav */}
    
            </header>
        )
    }
}

export default Header;