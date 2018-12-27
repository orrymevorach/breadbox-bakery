import React from 'react';

const Shop = ({ userProfile, subscriptionInfo }) => {

    console.log(userProfile.numberOfWeeklyChallahs)
    function makeSelection(e) {
        const el = e.target
        const numberOfChallahsSelected = el.dataset.challahnumber
        subscriptionInfo(numberOfChallahsSelected)
    }
    return (
        <div className="shop wrapper">
            <div className="vh">
                <div className="text-container">
                    <h2>Our Subscription Plans</h2>
                    <p>Select How Many Challahs You Would Like Delivered To Your Door Each Week</p>
                </div>
                {userProfile.numberOfWeeklyChallahs === '1' ? 
                    <div className="challah-row">
                        <div className="challah-number selected">
                            <h1>1 Challah</h1>
                            {/* <button type="submit" onClick={makeSelection} data-challahnumber="1">Select This Plan</button> */}
                        </div>
                        <div className="challah-number">
                            <h1>2 Challahs</h1>
                            <button type="submit" onClick={makeSelection} data-challahnumber="2">Change Selection</button>
                        </div>
                    </div>
                    : userProfile.numberOfWeeklyChallahs === '2' ? 
                        <div className="challah-row">
                            <div className="challah-number">
                                <h1>1 Challah</h1>
                                <button type="submit" onClick={makeSelection} data-challahnumber="1">Change Selection</button>
                            </div>
                            <div className="challah-number selected">
                                <h1>2 Challahs</h1>
                                {/* <button type="submit" onClick={makeSelection} data-challahnumber="2">Select This Plan</button> */}
                            </div>
                        </div>
                    : <div className="challah-row">
                        <div className="challah-number">
                            <h1>1 Challah</h1>
                            <button type="submit" onClick={makeSelection} data-challahnumber="1">Select This Plan</button>      
                        </div>
                        <div className="challah-number">
                            <h1>2 Challahs</h1>
                            <button type="submit" onClick={makeSelection} data-challahnumber="2">Select This Plan</button>    
                        </div>
                    </div> 
                }
            </div> {/* Closing VH */}
        </div> /* Closing Shop / Wrapper */
    )
}

export default Shop;