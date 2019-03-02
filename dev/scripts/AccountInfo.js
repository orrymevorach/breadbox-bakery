import React from 'react';
import OrderSummary from './OrderSummary';
import classnames from 'classnames';

class AccountInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }

        this.isEditing = this.isEditing.bind(this)
    }

    isEditing() {
        this.setState({
            isEditing: true
        })
    }

    render() {
        const {userProfile: {orderInformation, contactInformation },
                handleChange,
                email,
                password,
                firstName,
                lastName,
                address,
                apartmentSuite,
                city,
                province,
                postalCode,
                phoneNumber
                } = this.props

        const { isEditing } = this.state
        
        return (
            <div className="account-info">
                <h1>Account Info</h1>
                <form action="#">
                        <div className="name row">
                            <div className="first-name column">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    type="text"
                                    name="firstName"
                                    value={contactInformation.firstName}
                                    onChange={handleChange}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                            <div className="last-name column">
                                <label htmlFor="firstName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={contactInformation.lastName}
                                    onChange={handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>

                        </div> {/* Closing Name */}
                        <div className="address-line1 row">
                            <div className="address column">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={contactInformation.address}
                                    onChange={handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                            <div className="apartment-suite column">
                                <label htmlFor="apartmentSuite">Apartment/Suite</label>
                                <input
                                    type="text"
                                    name="apartmentSuite"
                                    value={contactInformation.apartmentSuite}
                                    onChange={handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                        </div>
                        <div className="address-line2 row">
                            <div className="city column">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={contactInformation.city}
                                    onChange={handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                            <div className="province column">
                                <label htmlFor="province">Province</label>
                                <input
                                    type="text"
                                    name="province"
                                    value={contactInformation.province}
                                    onChange={handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                            <div className="postal-code column">
                                <label htmlFor="postalCode">Postal Code</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={contactInformation.postalCode}
                                    onChange={handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                        </div> {/* Closing Address-Line2 */}
                        <div className="phone column row">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={contactInformation.phoneNumber}
                                onChange={handleChange}
                                className={classnames( {isDisabled: !this.state.isEditing} )}
                                disabled={isEditing ? false : true}
                            />
                        </div>
                        <div className="email column row">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={contactInformation.email}
                                onChange={handleChange}
                                className={classnames( {isDisabled: !this.state.isEditing} )}
                                disabled={isEditing ? false : true}
                            />
                        </div>
                    </form>
                        <button onClick={this.isEditing}>Edit Account Details</button>
                <OrderSummary 
                    userProfile={this.props.userProfile}
                    isEditing={this.isEditing}
                /> 

            </div>
        )
    }
}

export default AccountInfo ;