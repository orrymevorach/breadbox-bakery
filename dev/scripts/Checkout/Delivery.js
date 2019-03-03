import React from 'react';
import classnames from 'classnames';

class Delivery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSelected: "same",
            firstName: '',
            lastName: '',
            address: '',
            apartmentSuite: '',
            city: '',
            province: '',
            postalCode: '',
            phoneNumber: '',
        }

        this.selectDeliveryAddress = this.selectDeliveryAddress.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    selectDeliveryAddress(e) {
        this.setState({
            currentSelected: e.target.value,
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    passNewDeliveryToStateAndFirebase(e) {
        e.preventDefault();

        const {firstName,
                lastName,
                address,
                apartmentSuite,
                city,
                province,
                postalCode,
                phoneNumber
        } = this.state
        
        this.props.selectAlternateDeliveryAddress(firstName, lastName, address, apartmentSuite, city, province, postalCode, phoneNumber)
        this.props.confirmDeliveryAddress()
    }

    render() {

        const { contactInformation: {
            firstName,
            lastName,
            address,
            apartmentSuite,
            city,
            province,
            postalCode,
            phoneNumber
        }} = this.props.userProfile

        const { currentSelected } = this.state,
                { isEditingDelivery, confirmDeliveryAddress, editDeliveryAddress } = this.props



        return (
            <section className="delivery">
                <div className="delivery-tab">
                    <h1>Delivery</h1>
                    { !isEditingDelivery && (<button className="link" onClick={editDeliveryAddress}>Edit</button>) }

                </div>
                { isEditingDelivery ? 
                    <div>
                        <div className="text-container">
                            <p>{firstName} {lastName}</p>
                            <p>{address} {apartmentSuite && (`Appt. ${apartmentSuite}`)}</p>
                            <p>{city}, {province}</p>
                            <p>{postalCode}</p>
                        </div>
                        <form action="#" className="select-address-radios">
                            <label htmlFor="same" value="same">
                                <input 
                                type="radio" 
                                name="addressRadio" 
                                checked={currentSelected === "same" ? true : false} 
                                value="same"
                                onChange={(e) => this.selectDeliveryAddress(e)}
                                className={classnames(currentSelected === "same" ? "checked" : null)}/>
                                Deliver to this address
                            </label>
                            <label htmlFor="isNew" value="isNew">
                                <input 
                                type="radio" 
                                name="addressRadio" 
                                checked={currentSelected === "isNew" ? true : false}
                                value="isNew"
                                onChange={(e) => this.selectDeliveryAddress(e)}
                                className={classnames(currentSelected === "isNew" ? "checked" : null)}/> 
                                Deliver to a different address
                            </label>
                        </form>
                        { // CTA button if selected address = current address
                        currentSelected === "same" && (
                            <button onClick={confirmDeliveryAddress}>Continue To Billing</button>
                        )}
                        
                        { // New Delivery Address Form
                        currentSelected === "isNew" ?
                            <div className="new-address">
                                <form action="#" onSubmit={(e) => this.passNewDeliveryToStateAndFirebase(e)}>
                                    <div className="name row">
                                        <div className="first-name column">
                                            <label htmlFor="firstName">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={this.state.firstName}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="last-name column">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                            />
                                        </div>
    
                                    </div> 
                                    <div className="address-line1 row">
                                        <div className="address column">
                                            <label htmlFor="address">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="apartment-suite column">
                                            <label htmlFor="apartmentSuite">Apartment/Suite</label>
                                            <input
                                                type="text"
                                                name="apartmentSuite"
                                                value={this.state.apartmentSuite}
                                                onChange={this.handleChange}
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
                                            />
                                        </div>
                                        <div className="province column">
                                            <label htmlFor="province">Province</label>
                                            <input
                                                type="text"
                                                name="province"
                                                value={this.state.province}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="postal-code column">
                                            <label htmlFor="postalCode">Postal Code</label>
                                            <input
                                                type="text"
                                                name="postalCode"
                                                value={this.state.postalCode}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div> 
                                    <input type="submit" value="Submit New Address" />
                                </form>
                            </div>
                        : null }
                    </div> 
                : null }
            </section>
        )
    }
}

export default Delivery ;