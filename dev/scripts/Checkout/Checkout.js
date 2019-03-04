import React from 'react';
import OrderSummary from '../OrderSummary';
import Delivery from './Delivery';
import Payment from './Payment';

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditingOrderSummary: true,
            isEditingDelivery: false,
            isEditingPayment: false
        }

        this.confirmDeliveryAddress = this.confirmDeliveryAddress.bind(this)
        this.editDeliveryAddress = this.editDeliveryAddress.bind(this)
        this.confirmOrderSummary = this.confirmOrderSummary.bind(this)
        this.editOrderSummary = this.editOrderSummary.bind(this)

    }

    confirmOrderSummary() {
        this.setState({
            isEditingOrderSummary: false,
            isEditingDelivery: true
        })

        window.scrollBy(0, 400)
    }

    editOrderSummary() {
        this.setState({
            isEditingOrderSummary: true,
            isEditingDelivery: false
        })
    }

    confirmDeliveryAddress() {
        this.setState({
            isEditingDelivery: false,
            isEditingPayment: true
        })

        window.scrollBy(0, 400)
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
                    <OrderSummary 
                        isEditing={isEditing}
                        userProfile={userProfile}
                        isEditingOrderSummary={this.state.isEditingOrderSummary}
                        confirmOrderSummary={this.confirmOrderSummary}
                        editOrderSummary={this.editOrderSummary}
                    />
                    <Delivery 
                        userProfile={userProfile}
                        selectAlternateDeliveryAddress={selectAlternateDeliveryAddress}
                        isEditingDelivery={this.state.isEditingDelivery}
                        confirmDeliveryAddress={this.confirmDeliveryAddress}
                        editDeliveryAddress={this.editDeliveryAddress}
                    />
                <Payment />
            </section>
        )
    }
}

export default Checkout ;