import React from 'react';

const Frozen = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection }
) => {
        
    const { numberOfFrozenChallahs, numberOfFrozenChallahsSelectionMade } = orderInformation
    
    return (
        <div className="vh numberOfWeeklyChallahs">
            { userLoggedIn ? <h2>Select Your Subscription Plan</h2> : <h2>Subscription Plans</h2> }
            
            {userLoggedIn === true && numberOfFrozenChallahs !== '0' && numberOfFrozenChallahsSelectionMade === true ?
                <div>
                    { // If 1 Challah was Selected
                    numberOfFrozenChallahs === '1' ?
                        <h1>Your Selection: <br></br>
                        {numberOfFrozenChallahs} Frozen Challah will be delivered Weekly</h1>

                    // If 2 Challahs were selected
                    : numberOfWeeklyChallahs === '2' ?
                        <h1>Your Selection: <br></br>
                        {numberOfFrozenChallahs} Frozen Challahs will be delivered Weekly</h1>
                    : null}

                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('numberOfFrozenChallahsSelectionMade')}>Click Here To Change Selection</button>
                </div>

            : userLoggedIn === false || ( userLoggedIn === true && numberOfFrozenChallahsSelectionMade === false )?
                <div>
                    <p>Select How Many Frozen Challahs You Would Like Delivered To Your Door Each Week</p>
                    <div className="challah-row">
                        <div className="challah-container challah-number">
                        <h1>1 Challah</h1>
                            {userLoggedIn ?
                                <button type="submit" data-challahnumber="1" onClick={(e) => makeSelection(`numberOfFrozenChallahs-${e.target.dataset.challahnumber}`)} >Select This Plan</button>
                            : null}
                        </div>
                        <div className="challah-container challah-number">
                            <h1>2 Challahs</h1>
                                {userLoggedIn ?
                                    <button type="submit" data-challahnumber="2" onClick={(e) => makeSelection(`numberOfFrozenChallahs-${e.target.dataset.challahnumber}`)} >Select This Plan</button>
                                : null}
                        </div>
                    </div>
                </div>
            : null}
        </div> /* Closing VH */
    )
}

export default Frozen;
