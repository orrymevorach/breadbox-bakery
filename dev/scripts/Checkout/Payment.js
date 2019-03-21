import React from 'react';
import Paypal from './Paypal';

class Payment extends React.Component {
    render() {
        return (
            <section className="payment" id="payment">
                <div className="heading-tab">
                    <div className="row">
                        <h1>Payment</h1>
                    </div>
                </div>
                <div className="main-content">
                    <Paypal 
                        showPaymentSuccess={this.props.showPaymentSuccess}
                    />
                </div>
            </section>
        )
    }
}

export default Payment ;