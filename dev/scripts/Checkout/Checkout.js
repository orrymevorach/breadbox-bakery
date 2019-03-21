import React from 'react';
import OrderSummary from '../OrderSummary';
import Delivery from './Delivery';
import Payment from './Payment';
import PaymentSuccess from './PaymentSuccess';

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditingOrderSummary: true,
            isEditingDelivery: false,
            isEditingPayment: false,
            isPaymentReceived: false
        }

        this.confirmDeliveryAddress = this.confirmDeliveryAddress.bind(this)
        this.editDeliveryAddress = this.editDeliveryAddress.bind(this)
        this.confirmOrderSummary = this.confirmOrderSummary.bind(this)
        this.editOrderSummary = this.editOrderSummary.bind(this)
        this.showPaymentSuccess = this.showPaymentSuccess.bind(this)

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
    }

    editDeliveryAddress() {
        this.setState({
            isEditingDelivery: true,
            isEditingPayment: false
        })
    }

    showPaymentSuccess() {
        this.setState({
            isPaymentReceived: true
        })
    }
    
    render() {
        const { userProfile, isEditing, selectAlternateDeliveryAddress } = this.props

        return (
            <section className="checkout">
                <PaymentSuccess />
                {/* {!this.state.isPaymentReceived ?
                    <div>
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
                        <Payment 
                            showPaymentSuccess={this.showPaymentSuccess}
                        />
                    </div>
                : <h1>Order Confirmed</h1> } */}
            </section>
        )
    }
}

export default Checkout ;