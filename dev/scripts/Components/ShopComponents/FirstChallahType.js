import React from 'react';

const FirstChallahType = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection }
) => {

    const { firstChallahType, firstChallahTypeSelectionMade, numberOfWeeklyChallahs } = orderInformation
    
    const challahTypes = [
        {
            name: 'Sweet',
            description: "Plain Challah with Streusel Topping"
        },
        {
            name: 'Raisin',
            description: "Raisin Challah with Streusel Topping"
        },
        {
            name: 'Original',
            description: "Plain Challah with Sesame Seed Topping"
        }
    ]

    return (
        <div className="vh">
            { userLoggedIn ? <h2>Select Your Fresh Challah</h2> : <h2>Our Fresh Challahs</h2> }
            
            { userLoggedIn && firstChallahType && firstChallahTypeSelectionMade === true ?
                <div>
                    <h1>Your Selection: <br></br>
                    {firstChallahType} Fresh Challah</h1>
                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('firstChallahTypeSelectionMade')}>Click Here To Change Selection</button>
                </div>

            : userLoggedIn === false || userLoggedIn === true && firstChallahTypeSelectionMade === false ?
                <div>
                    {numberOfWeeklyChallahs === '1' ? 
                        <p>What Type Of Fresh Challah Would You Like?</p>
                    : numberOfWeeklyChallahs === '2' ?
                        <p>Please Select Your First Fresh Challah</p>
                    : null }
                    <div className="challah-row">
                        {challahTypes.map((challah, i) => {
                            return (
                                <div className="challah-container challah-type" key={i}>
                                    <h1>{challah.name}</h1>
                                    <p>{challah.description}</p>
                                    {userLoggedIn ?
                                        <button type="submit" data-challahtype={challah.name} onClick={(e) => makeSelection(`firstChallahType-${e.target.dataset.challahtype}`)} >Select This Challah</button>
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