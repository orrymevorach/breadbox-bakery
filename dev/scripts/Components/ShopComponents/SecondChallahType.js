import React from 'react';

const SecondChallahType = ({ userProfile, subscriptionInfo, userLoggedIn, userChangingSelection, secondChallahTypeSelectionMade }) => {

    function makeSelection(e) {
        const el = e.target
        const secondChallahType = `secondChallahType:${el.dataset.challahtype}`
        subscriptionInfo(secondChallahType)
    }

    const challahTypes = ['Sweet', 'Raisin', 'Plain']

    return (
        <div className="vh">
            <div className="text-container">
                <h2>Our Challahs</h2>
            </div>
            {userLoggedIn && userProfile.secondChallahType && secondChallahTypeSelectionMade === true ?
                <div className="wrapper-small">
                    <h1>Your Selection: <br></br>
                        {userProfile.secondChallahType} Challah</h1>
                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('secondChallahTypeSelectionMade')}>Click Here To Change Selection</button>
                </div>

                : userLoggedIn === false || ( userLoggedIn === true && secondChallahTypeSelectionMade === false ) ?
                    <div>
                        <div className="text-container">
                            <p>Please Select Your Second Challah</p>
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

export default SecondChallahType;