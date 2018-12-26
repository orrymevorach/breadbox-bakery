import React from 'react';

const LoginModal = ({ closeModal }) => {

    return (
        <div className="login-modal modal-container" id="login-modal">
            <div className="overlay">
                <div className="modal">
                    <div className="close-modal" onClick={() => closeModal('login-modal')}>
                        <i className="fas fa-times"></i>
                    </div>

                    <h1>Login Modal</h1>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;