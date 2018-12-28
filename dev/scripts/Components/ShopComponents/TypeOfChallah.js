import React from 'react';

const TypeOfChallah = ({ userProfile, subscriptionInfo, userLoggedIn, userChangingSelection, firstChallahTypeSelectionMade}) => {
    
    function makeSelection(e) {
        const el = e.target
        const firstChallahType = `firstChallahType:${el.dataset.challahtype}`
        subscriptionInfo(firstChallahType)
    }

    const challahTypes = ['Sweet', 'Raisin', 'Plain']

    return (
        <div className="vh">
            <div className="text-container">
                <h2>Our Challahs</h2>
            </div>
            {userLoggedIn && userProfile.firstChallahType && firstChallahTypeSelectionMade === true ?
                <div className="wrapper-small">
                    <h1>Your Selection: <br></br>
                    {userProfile.firstChallahType} Challah</h1>
                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('firstChallahTypeSelectionMade')}>Click Here To Change Selection</button>
                </div>

                : userLoggedIn === false || userLoggedIn === true && firstChallahTypeSelectionMade === false ?
                    <div>
                        <div className="text-container">
                            <p>What Type Of Challah Would You Like?</p>
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
                            {/* <div className="challah-container challah-type">
                                <h1>Sweet</h1>
                                {userLoggedIn ?
                                    <button type="submit" onClick={makeSelection} data-challahtype="Sweet">Select This Challah</button>
                                    : null}
                            </div>
                            <div className="challah-container challah-type">
                                <h1>Raisin</h1>
                                {userLoggedIn ?
                                    <button type="submit" onClick={makeSelection} data-challahtype="Raisin">Select This Challah</button>
                                    : null}
                            </div>
                            <div className="challah-container challah-type">
                                <h1>Plain</h1>
                                {userLoggedIn ?
                                    <button type="submit" onClick={makeSelection} data-challahtype="Plain">Select This Challah</button>
                                    : null}
                            </div> */}
                            
                        </div>
                    </div>
            : null}
        </div>
    )
}

export default TypeOfChallah;