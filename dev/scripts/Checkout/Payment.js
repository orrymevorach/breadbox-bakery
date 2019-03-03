import React from 'react';

class Payment extends React.Component {
    render() {
        return (
            <section className="payment">
                <h1>Payment</h1>
                <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
                <script>paypal.Buttons().render('body');</script>
            </section>
        )
    }
}

export default Payment ;