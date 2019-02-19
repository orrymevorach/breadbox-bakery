import React from 'react';

const secondFreshChallahType = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection,
        freshChallahTypes
    }
) => {

    const { secondFreshChallahType, secondFreshChallahTypeSelectionMade, numberOfWeeklyFreshChallahs } = orderInformation
    
    return (
        <section className="vh shop-section">
            <h2>Select Your Second Challah</h2>
            { !secondFreshChallahTypeSelectionMade  ?
            <div className="challah-row">
                {freshChallahTypes.map((challah, i) => {
                    return (
                        <div className="challah-container challah-type" key={i}>
                            <h1>{challah.name}</h1>
                            <p>{challah.description}</p>
                            {userLoggedIn ? 
                                <button type="submit" data-challahtype={challah.name} onClick={(e) => makeSelection(`secondFreshChallahType-${e.target.dataset.challahtype}`)} >Select This Challah</button>
                            : null }
                        </div>        
                    )
                })}
            </div>
            : secondFreshChallahTypeSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {secondFreshChallahType}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('secondFreshChallahTypeSelectionMade')}>Click Here To Change Selection</button>
        </div>
      
        : null}
        </section> /* Closing VH */
    )
}

export default secondFreshChallahType;