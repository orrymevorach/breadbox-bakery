import React from 'react';

class OrderSummary extends React.Component {
    render() {
        const { userProfile: { orderInformation: 
            { freshOrFrozenSelectionMade,  
                freshChallahSelected,
                frozenChallahSelected,
                numberOfWeeklyFreshChallahs,
                numberOfWeeklyFrozenChallahs,
                numberOfWeeklyFreshChallahsSelectionMade,
                numberOfWeeklyFrozenChallahsSelectionMade,
                firstFreshChallahTypeSelectionMade,
                firstFrozenChallahTypeSelectionMade,
                secondFreshChallahTypeSelectionMade,
                secondFrozenChallahTypeSelectionMade,
                firstFreshChallahType,
                firstFrozenChallahType,
                secondFreshChallahType,
                secondFrozenChallahType,
                deliveryTime
            
            }}} = this.props

        const freshOrFrozen = freshChallahSelected ? "Fresh" : frozenChallahSelected ? "Frozen" : null
        const numberOfChallahs = numberOfWeeklyFreshChallahsSelectionMade ? numberOfWeeklyFreshChallahs : numberOfWeeklyFrozenChallahsSelectionMade ? numberOfWeeklyFrozenChallahs : null 
        const firstChallah = firstFreshChallahTypeSelectionMade ? firstFreshChallahType : firstFrozenChallahTypeSelectionMade ? firstFrozenChallahType : null
        const secondChallah = secondFreshChallahTypeSelectionMade ? secondFreshChallahType : secondFrozenChallahTypeSelectionMade ? secondFrozenChallahType : null
        
        return (
            <section className="order-summary">
                <h1>Order Summary:</h1>
                
                <div className="text-container">
                    <div className="row">
                        <p className="text-left">Fresh Or Frozen Challah:</p>
                        <p className="text-right">{freshOrFrozen}</p>
                    </div>
                    <div className="row">
                        <p className="text-left">Number Of Challahs:</p>
                        <p className="text-right">{numberOfChallahs}</p>
                    </div>
                    {freshChallahSelected && numberOfWeeklyFreshChallahs === 1 || frozenChallahSelected && numberOfWeeklyFrozenChallahs === 1 ?
                        <div className="row">
                            <p className="text-left">Challah:</p>
                            <p className="text-right">{firstChallah}</p>
                        </div>
                    : freshChallahSelected && numberOfWeeklyFreshChallahs === 2 || frozenChallahSelected && numberOfWeeklyFrozenChallahs === 2 ?
                        <div className="row">
                            <p className="text-left">First Challah:</p>
                            <p className="text-right">{firstChallah}</p>
                        </div>
                    : null}
                    {freshChallahSelected && numberOfWeeklyFreshChallahs === 2 || frozenChallahSelected && numberOfWeeklyFrozenChallahs === 2 ?
                        <div className="row">
                            <p className="text-left">Second Challah:</p>
                            <p className="text-right">{secondChallah}</p>
                        </div>
                    : null }
                    <div className="row">
                        <p className="text-left">Delivery Time:</p>
                        <p className="text-right">{deliveryTime}</p>
                    </div>
                </div>
                <button onClick={ this.props.isEditing }>Edit Order</button>
            </section>
                
        )
    }
}

export default OrderSummary ;