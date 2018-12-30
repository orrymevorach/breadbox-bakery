import React from 'react';

const NumberOfWeeklyChallahs = (
    { userProfile: { orderInformation }, 
        makeSelection, 
        userLoggedIn, 
        userChangingSelection,
        scrollToNextSection }
    ) => {

    const { numberOfWeeklyChallahs, numberOfWeeklyChallahsSelectionMade } = orderInformation
    
    return (
        <div className="vh numberOfWeeklyChallahs">
            <h2>Our Subscription Plans</h2>
            {userLoggedIn === true && numberOfWeeklyChallahs !== '0' && numberOfWeeklyChallahsSelectionMade === true ?
                <div>
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
                    <p>Select How Many Challahs You Would Like Delivered To Your Door Each Week</p>
                    <div className="challah-row">
                        <div className="challah-container challah-number" onClick={(e) => scrollToNextSection(e)}>
                        <h1>1 Challah</h1>
                            {userLoggedIn ?
                                <button type="submit" data-challahnumber="1" onClick={(e) => makeSelection(`numberOfWeeklyChallahs-${e.target.dataset.challahnumber}`)} >Select This Plan</button>
                            : null}
                        </div>
                        <div className="challah-container challah-number">
                            <h1>2 Challahs</h1>
                                {userLoggedIn ?
                                    <button type="submit" data-challahnumber="2" onClick={(e) => makeSelection(`numberOfWeeklyChallahs-${e.target.dataset.challahnumber}`)} >Select This Plan</button>
                                : null}
                        </div>
                    </div>
                </div>
            : null}
        </div> /* Closing VH */
    )
}

export default NumberOfWeeklyChallahs;