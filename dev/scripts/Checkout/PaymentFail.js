import React from 'react';

class PaymentFail extends React.Component {
    render() {
        return (
            <div className="payment-success">
                <h1>Your Payment Was Unsuccessful</h1>    
                <p>Please try again, or contact us for alternative payment options. </p>
                <p>eatbreadbox@gmail.com</p>
            </div>
        )
    }
}

export default PaymentFail ;