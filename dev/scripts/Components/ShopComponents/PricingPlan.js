import React from 'react';

class PricingPlan extends React.Component {
    render() {
        return (
            <section className="pricing-plan">
                <div className="pricing-plan-container">
                    <div className="weekly">
                        <h1>1 Week Delivery Pricing</h1>
                        <p>1 Fresh Challah x 1 Week - $15</p>
                        <p>2 Fresh Challah x 1 Week - $25</p>
                        <p>1 Frozen Challah x 1 Week - $10</p>
                        <p>2 Frozen Challahs x 1 Week - $18</p>
                    </div>
                    <div className="monthly">
                        <h1>4 Week Delivery Pricing</h1>
                        <p>1 Fresh Challah Weekly X 4 Weeks - $40</p>
                        <p>2 Fresh Challah Weekly X 4 Weeks - $72</p>
                        <p>1 Frozen Challah Weekly X 4 Weeks - $20</p>
                        <p>2  Frozen Challah Weekly X 4 Weeks - $36</p>
                    </div>
                </div>
                <h1>To Place An Order, Create An Account</h1>
            </section>
        )
    }
}

export default PricingPlan ;