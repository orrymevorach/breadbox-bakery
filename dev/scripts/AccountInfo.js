import React from 'react';
import OrderSummary from './OrderSummary';
import classnames from 'classnames';

class AccountInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            firstName: '',
            lastName: '',
            address: '',
            apartmentSuite: '',
            city: '',
            province: '',
            postalCode: '',
            phoneNumber: '',
            email: '',
            fbId: ''
        }

        this.isEditing = this.isEditing.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
        const { userProfile: {contactInformation: {
            userID,
            firstName,
            lastName,
            address,
            apartmentSuite,
            city,
            province,
            postalCode,
            phoneNumber,
            email
        }}} = this.props

        const contactLastName = lastName,
          contactFirstName = firstName,
          contactUserID = userID,
          fbId = `${contactLastName}-${contactFirstName}-${contactUserID}`

        this.setState({
            firstName: firstName,
            lastName: lastName,
            address: address,
            apartmentSuite: apartmentSuite,
            city: city,
            province: province,
            postalCode: postalCode,
            phoneNumber: phoneNumber,
            email: email,
            fbId: fbId
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isEditing() {
        this.setState({
            isEditing: true
        })
    }

    submitForm(e) {
        e.preventDefault();

        const {firstName,
            lastName,
            address,
            apartmentSuite,
            city,
            province,
            postalCode,
            phoneNumber,
            email,
            fbId
    } = this.state 
    
    this.props.changeContactInformation(firstName, lastName, address, apartmentSuite, city, province, postalCode, phoneNumber, email, fbId);
        
    }

    render() {
        const {userProfile: { contactInformation }} = this.props,
             { isEditing } = this.state
        
        return (
            <div className="account-info">
                <h1>Account Info</h1>
                <form action="#" onSubmit={(e) => this.submitForm(e)}>
                        <div className="name row">
                            <div className="first-name column">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                            <div className="last-name column">
                                <label htmlFor="firstName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
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
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                            <div className="apartment-suite column">
                                <label htmlFor="apartmentSuite">Apartment/Suite</label>
                                <input
                                    type="text"
                                    name="apartmentSuite"
                                    value={this.state.apartmentSuite}
                                    onChange={this.handleChange}
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
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                            <div className="province column">
                                <label htmlFor="province">Province</label>
                                <input
                                    type="text"
                                    name="province"
                                    value={this.state.province}
                                    onChange={this.handleChange}
                                    className={classnames( {isDisabled: !this.state.isEditing} )}
                                    disabled={isEditing ? false : true}
                                />
                            </div>
                            <div className="postal-code column">
                                <label htmlFor="postalCode">Postal Code</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={this.state.postalCode}
                                    onChange={this.handleChange}
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
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                                className={classnames( {isDisabled: !this.state.isEditing} )}
                                disabled={isEditing ? false : true}
                            />
                        </div>
                        <div className="email column row">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className={classnames( {isDisabled: !this.state.isEditing} )}
                                disabled={isEditing ? false : true}
                            />
                        </div>
                        { isEditing && <input type="submit" value="Submit"/> }
                    </form>
                    {!isEditing && (
                        <button onClick={this.isEditing}>Edit Account Details</button>
                    )}
            </div>
        )
    }
}

export default AccountInfo ;