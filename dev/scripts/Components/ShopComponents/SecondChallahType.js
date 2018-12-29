import React from 'react';

const SecondChallahType = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection }
) => {

    const { secondChallahType, secondChallahTypeSelectionMade } = orderInformation

    const challahTypes = ['Sweet', 'Raisin', 'Plain']

    return (
        <div className="vh">
            <h2>Our Challahs</h2>
            {userLoggedIn && secondChallahType && secondChallahTypeSelectionMade === true ?
                <div>
                    <h1>Your Selection: <br></br>
                        {secondChallahType} Challah</h1>
                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('secondChallahTypeSelectionMade')}>Click Here To Change Selection</button>
                </div>
            : userLoggedIn === false || userLoggedIn === true && secondChallahTypeSelectionMade === false ?
                <div>
                    <p>Please Select Your Second Challah</p>
                    <div className="challah-row">
                        {challahTypes.map((challah, i) => {
                            return (
                                <div className="challah-container challah-type" key={i}>
                                    <h1>{challah}</h1>
                                    {userLoggedIn ?
                                        <button type="submit" data-challahtype={challah} onClick={(e) => makeSelection(`secondChallahType:${e.target.dataset.challahtype}`)}>Select This Challah</button>
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

export default SecondChallahType;