import React from 'react';

const NumberOfChallahs = ({ userProfile, subscriptionInfo, userLoggedIn, numberOfChallahsSelectionMade, userChangingSelection }) => {
    
    function makeSelection(e) {
        const el = e.target
        const numberOfChallahsSelected = `numberOfChallahsSelected:${el.dataset.challahnumber}`
        subscriptionInfo(numberOfChallahsSelected)
    }

    return (
        <div className="vh">
            <div className="text-container">
                <h2>Our Subscription Plans</h2>
            </div>
            {userLoggedIn && userProfile.numberOfWeeklyChallahs && numberOfChallahsSelectionMade === true ?
                <div className="wrapper-small">
                    { // If 1 Challah was Selected
                        userProfile.numberOfWeeklyChallahs === '1' ?
                            <h1>Your Selection: <br></br>
                                {userProfile.numberOfWeeklyChallahs} Challah will be delivered Weekly</h1>

                            // If 2 Challahs were selected
                            : userProfile.numberOfWeeklyChallahs === '2' ?
                                <h1>Your Selection: <br></br>
                                    {userProfile.numberOfWeeklyChallahs} Challahs will be delivered Weekly</h1>
                                : null}

                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('numberOfChallahsSelectionMade')}>Click Here To Change Selection</button>
                </div>

                : userLoggedIn === false || userLoggedIn === true && numberOfChallahsSelectionMade === false ?
                    <div>
                        <div className="text-container">
                            <p>Select How Many Challahs You Would Like Delivered To Your Door Each Week</p>
                        </div>
                        <div className="challah-row">
                            <div className="challah-container challah-number">
                                <h1>1 Challah</h1>
                                {userLoggedIn ?
                                    <button type="submit" onClick={makeSelection} data-challahnumber="1">Select This Plan</button>
                                    : null}
                            </div>
                            <div className="challah-container challah-number">
                                <h1>2 Challahs</h1>
                                {userLoggedIn ?
                                    <button type="submit" onClick={makeSelection} data-challahnumber="2">Select This Plan</button>
                                    : null}
                            </div>
                        </div>
                    </div>
                    : null}
            {/* Closing VH */}
        </div> 
    )
}

export default NumberOfChallahs;