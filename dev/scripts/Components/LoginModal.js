import React from 'react';

const LoginModal = (
    { closeModal,
        showModal,
        handleChange,
        email,
        password,
        login
    }) => {
    
    function showNewAccountModal() {
        closeModal('login-modal')
        showModal('create-account-modal')
    }

    return (
        <div className="login-modal modal-container" data-modal="login-modal">
            <div className="overlay">
                <div className="modal">
                    <div className="close-modal" onClick={() => closeModal('login-modal')}>
                        <i className="fas fa-times"></i>
                    </div>

                    <h1>Log In</h1>
                    <form action="#" onSubmit={login}> 
                        <div className="email column row">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="password column row">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <input type="submit" value="Log In"/>
                    </form>
                    <div className="new-user">
                        <p>New to Breadbox Bakery? <span className="click-here" onClick={showNewAccountModal}>Click Here</span> to Create An Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;