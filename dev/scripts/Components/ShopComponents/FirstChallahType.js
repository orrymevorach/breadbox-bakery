import React from 'react';

const FirstChallahType = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection }
) => {

    const { firstChallahType, firstChallahTypeSelectionMade, numberOfWeeklyChallahs } = orderInformation
    
    const challahTypes = ['Sweet', 'Raisin', 'Plain']

    return (
        <div className="vh">
            <h2>Our Challahs</h2>
            {userLoggedIn && firstChallahType && firstChallahTypeSelectionMade === true ?
                <div>
                    <h1>Your Selection: <br></br>
                    {firstChallahType} Challah</h1>
                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('firstChallahTypeSelectionMade')}>Click Here To Change Selection</button>
                </div>

            : userLoggedIn === false || userLoggedIn === true && firstChallahTypeSelectionMade === false ?
                <div>
                    {numberOfWeeklyChallahs === '1' ? 
                        <p>What Type Of Challah Would You Like?</p>
                    : numberOfWeeklyChallahs === '2' ?
                        <p>Please Select Your First Challah</p>
                    : null }
                    <div className="challah-row">
                        {challahTypes.map((challah, i) => {
                            return (
                                <div className="challah-container challah-type" key={i}>
                                    <h1>{challah}</h1>
                                    {userLoggedIn ?
                                        <button type="submit" data-challahtype={challah} onClick={(e) => makeSelection(`firstChallahType:${e.target.dataset.challahtype}`)} >Select This Challah</button>
                                    : null}
                                </div>        
                            )
                        })}
                    </div>
                </div>
            : null}
        </div> /* Closing VH */
    )
}

export default FirstChallahType;