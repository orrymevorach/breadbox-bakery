import React from 'react';

class PaymentSuccess extends React.Component {
    render() {
        return (
            <div className="payment-success">
                <h1>Order Confirmed!</h1>    
                <p>Thank you for ordering from Breadbox Bakery.</p>
                <p>See you Friday!</p>
            </div>
        )
    }
}

export default PaymentSuccess ;