import React from 'react';
import OrderSummary from '../OrderSummary';
import Delivery from './Delivery';
import Payment from './Payment';

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditingDelivery: true,
            isEditingPayment: false
        }

        this.confirmDeliveryAddress = this.confirmDeliveryAddress.bind(this)
        this.editDeliveryAddress = this.editDeliveryAddress.bind(this)

    }

    confirmDeliveryAddress() {
        this.setState({
            isEditingDelivery: false,
            isEditingPayment: true
        })
    }

    editDeliveryAddress() {
        this.setState({
            isEditingDelivery: true,
            isEditingPayment: false
        })
    }
    
    render() {
        const { userProfile, isEditing, selectAlternateDeliveryAddress } = this.props

        return (
            <section className="checkout">
                <div className="checkout-desktop">
                    <OrderSummary 
                        isEditing={isEditing}
                        userProfile={userProfile}
                    />
                    <Delivery 
                        userProfile={userProfile}
                        selectAlternateDeliveryAddress={selectAlternateDeliveryAddress}
                        isEditingDelivery={this.state.isEditingDelivery}
                        confirmDeliveryAddress={this.confirmDeliveryAddress}
                        editDeliveryAddress={this.editDeliveryAddress}
                    />
                </div>
                <Payment />
            </section>
        )
    }
}

export default Checkout ;