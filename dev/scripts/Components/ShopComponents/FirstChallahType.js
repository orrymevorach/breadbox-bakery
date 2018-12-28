import React from 'react';

const FirstChallahType = (
    { userProfile: { orderInformation },
        subscriptionInfo,
        userLoggedIn,
        userChangingSelection }
) => {

    const { firstChallahType, firstChallahTypeSelectionMade, numberOfWeeklyChallahs } = orderInformation
    
    function makeSelection(e) {
        const el = e.target
        const challahType = `firstChallahType:${el.dataset.challahtype}`
        subscriptionInfo(challahType)
    }

    const challahTypes = ['Sweet', 'Raisin', 'Plain']

    return (
        <div className="vh">
            <div className="text-container">
                <h2>Our Challahs</h2>
            </div>
            {userLoggedIn && firstChallahType && firstChallahTypeSelectionMade === true ?
                <div className="wrapper-small">
                    <h1>Your Selection: <br></br>
                    {firstChallahType} Challah</h1>
                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('firstChallahTypeSelectionMade')}>Click Here To Change Selection</button>
                </div>

                : userLoggedIn === false || userLoggedIn === true && firstChallahTypeSelectionMade === false ?
                    <div>
                        <div className="text-container">
                            {numberOfWeeklyChallahs === '1' ? 
                            <p>What Type Of Challah Would You Like?</p>
                            : numberOfWeeklyChallahs === '2' ?
                            <p>Please Select Your First Challah</p>
                            : null }
                        </div>
                        <div className="challah-row">
                            {challahTypes.map((challah, i) => {
                                return (
                                    <div className="challah-container challah-type" key={i}>
                                        <h1>{challah}</h1>
                                        {userLoggedIn ?
                                            <button type="submit" onClick={makeSelection} data-challahtype={challah}>Select This Challah</button>
                                            : null}
                                    </div>        
                                )
                            })}
                        </div>
                    </div>
            : null}
        </div>
    )
}

export default FirstChallahType;