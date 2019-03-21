import React from 'react';
import Paypal from './Paypal';

class Payment extends React.Component {
    render() {
        return (
            <section className="payment" id="payment">
                <div className="heading-tab">
                    <div className="row">
                        <h1>Payment</h1>
                        <Paypal 
                            showPaymentSuccess={this.props.showPaymentSuccess}
                            showPaymentFail={this.props.showPaymentFail}
                            className="paypal-button"
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default Payment ;