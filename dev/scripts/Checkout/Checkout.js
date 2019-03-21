import React from 'react';
import OrderSummary from '../OrderSummary';
import Delivery from './Delivery';
import Payment from './Payment';
import PaymentSuccess from './PaymentSuccess';
import PaymentFail from './PaymentFail';

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditingOrderSummary: true,
            isEditingDelivery: false,
            isEditingPayment: false,
            isPaymentReceived: false,
            didPaymentFail: false
        }

        this.confirmDeliveryAddress = this.confirmDeliveryAddress.bind(this)
        this.editDeliveryAddress = this.editDeliveryAddress.bind(this)
        this.confirmOrderSummary = this.confirmOrderSummary.bind(this)
        this.editOrderSummary = this.editOrderSummary.bind(this)
        this.showPaymentSuccess = this.showPaymentSuccess.bind(this)
        this.showPaymentFail = this.showPaymentFail.bind(this)

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

    showPaymentFail() {
        this.setState({
            didPaymentFail: true
        })
    }
    
    render() {
        const { userProfile, userProfile: {orderInformation: {totalCost}}, isEditing, selectAlternateDeliveryAddress } = this.props
        const { isPaymentReceived, didPaymentFail } = this.state

        return (
            <section className="checkout">
                {!isPaymentReceived && !didPaymentFail ?
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
                            showPaymentFail={this.showPaymentFail}
                            totalCost={totalCost}
                        />
                    </div>
                : !isPaymentReceived && didPaymentFail ?
                    <PaymentFail />
                : isPaymentReceived ? 
                    <PaymentSuccess />
                : null }
            </section>
        )
    }
}

export default Checkout ;