import React from 'react';
import OrderSummary from '../OrderSummary';
import Shipping from './Shipping';
import Payment from './Payment';

class Checkout extends React.Component {
    render() {
        const { userProfile, isEditing, selectAlternateDeliveryAddress } = this.props
        return (
            <section className="checkout">
                <div>
                    <Shipping 
                        userProfile={userProfile}
                        selectAlternateDeliveryAddress={selectAlternateDeliveryAddress}
                    />
                    <Payment />
                </div>
                <OrderSummary 
                    isEditing={isEditing}
                    userProfile={userProfile}
                />
            </section>
        )
    }
}

export default Checkout ;