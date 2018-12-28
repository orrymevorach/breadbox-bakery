import React from 'react';

const NumberOfWeeklyChallahs = (
    { userProfile: { orderInformation }, 
        subscriptionInfo, 
        userLoggedIn, 
        userChangingSelection }
    ) => {

    const { numberOfWeeklyChallahs, numberOfWeeklyChallahsSelectionMade } = orderInformation
    
    function makeSelection(e) {
        const el = e.target
        const numOfWeeklyChallahs = `numberOfWeeklyChallahs:${el.dataset.challahnumber}`
        subscriptionInfo(numOfWeeklyChallahs)
    }

    return (
        <div className="vh">
            <div className="text-container">
                <h2>Our Subscription Plans</h2>
            </div>
            {userLoggedIn === true && numberOfWeeklyChallahs !== '0' && numberOfWeeklyChallahsSelectionMade === true ?
                <div className="wrapper-small">
                    { // If 1 Challah was Selected
                        numberOfWeeklyChallahs === '1' ?
                            <h1>Your Selection: <br></br>
                                {numberOfWeeklyChallahs} Challah will be delivered Weekly</h1>

                            // If 2 Challahs were selected
                            : numberOfWeeklyChallahs === '2' ?
                                <h1>Your Selection: <br></br>
                                    {numberOfWeeklyChallahs} Challahs will be delivered Weekly</h1>
                                : null}

                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('numberOfWeeklyChallahsSelectionMade')}>Click Here To Change Selection</button>
                </div>

                : userLoggedIn === false || ( userLoggedIn === true && numberOfWeeklyChallahsSelectionMade === false )?
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

export default NumberOfWeeklyChallahs;