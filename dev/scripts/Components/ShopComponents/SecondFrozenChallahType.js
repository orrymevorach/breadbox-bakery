import React from 'react';

const SecondFrozenChallahType = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection,
        frozenChallahTypes
     }
) => {

    const { secondFrozenChallahType, secondFrozenChallahTypeSelectionMade, numberOfWeeklyFrozenChallahs } = orderInformation
    
    return (
        <section className="vh shop-section" id="secondFrozenChallahType">
            <h2>Select Your Second Challah</h2>  
            { !secondFrozenChallahTypeSelectionMade  ?
            <div className="challah-row">
                {frozenChallahTypes.map((challah, i) => {
                    return (
                        <div className="challah-container challah-type" key={i}>
                            <h1>{challah.name}</h1>
                            <p>{challah.description}</p>
                            {userLoggedIn ? 
                            <a href="#deliveryTime">
                                <button type="submit" data-challahtype={challah.name} onClick={(e) => makeSelection(`secondFrozenChallahType-${e.target.dataset.challahtype}`)} >Select This Challah</button>
                            </a>
                            : null }
                        </div>        
                    )
                })}
            </div>
            : secondFrozenChallahTypeSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {secondFrozenChallahType}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('secondFrozenChallahTypeSelectionMade')}>Change Selection</button>
        </div>
      
        : null}
        </section> /* Closing VH */
    )
}

export default SecondFrozenChallahType;