import React from 'react';

class PricingPlan extends React.Component {
    render() {
        return (
            <section className="pricing-plan">
                <div className="monthly">
                    <h1>Monthly Subscription Pricing Plan</h1>
                    <p>1 Fresh Challah weekly X 1 Month - $40</p>
                    <p>2 Fresh Challah weekly X 1 Month - $72</p>
                    <p>1 Frozen Challah Weekly X 1 Month - $20</p>
                    <p>2  Frozen Challah Weekly X 1 Month - $36</p>
                </div>
                <div className="weekly">
                    <h1>Weekly Delivery Pricing</h1>
                    <p>1 Fresh Challah - $15</p>
                    <p>2 Fresh Challah - $25</p>
                    <p>1 Frozen Challah - $10</p>
                    <p>2 Frozen Challahs - $18</p>
                </div>
            </section>
        )
    }
}

export default PricingPlan ;