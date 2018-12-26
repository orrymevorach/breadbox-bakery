import React from 'react';

const CreateAccountModal = (
    { handleChange,
        email,
        password,
        firstName,
        lastName,
        address,
        apartmentSuite,
        city,
        province,
        postalCode,
        phoneNumber,
        closeModal,
        createNewAccount
    }) => {

    return (
        <div className="modal-container create-account-modal" id="create-account-modal">
            <div className="overlay">
                <div className="modal">
                    <div className="close-modal" onClick={() => closeModal('create-account-modal')}>
                        <i className="fas fa-times"></i>
                    </div>
                    <h1>Please Log In</h1>
                    <form action="#" onSubmit={(e) => createNewAccount(e)}>
                        <div className="name row">
                            <div className="first-name column">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="last-name column">
                                <label htmlFor="firstName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                />
                            </div>

                        </div> {/* Closing Name */}
                        <div className="address-line1 row">
                            <div className="address column">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="apartment-suite column">
                                <label htmlFor="apartmentSuite">Apartment/Suite</label>
                                <input
                                    type="text"
                                    name="apartmentSuite"
                                    value={apartmentSuite}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="address-line2 row">
                            <div className="city column">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="province column">
                                <label htmlFor="province">Province</label>
                                <input
                                    type="text"
                                    name="province"
                                    value={province}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="postal-code column">
                                <label htmlFor="postalCode">Postal Code</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={postalCode}
                                    onChange={handleChange}
                                />
                            </div>
                        </div> {/* Closing Address-Line2 */}
                        <div className="phone column row">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
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
                        <input type="submit" value="Create New Account" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountModal;