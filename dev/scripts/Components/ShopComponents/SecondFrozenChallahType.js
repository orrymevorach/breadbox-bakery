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
        <div className="vh">
            <h2>Select Your Second Challah</h2>  
            { !secondFrozenChallahTypeSelectionMade  ?
            <div className="challah-row">
                {frozenChallahTypes.map((challah, i) => {
                    return (
                        <div className="challah-container challah-type" key={i}>
                            <h1>{challah.name}</h1>
                            <p>{challah.description}</p>
                            {userLoggedIn ? 
                                <button type="submit" data-challahtype={challah.name} onClick={(e) => makeSelection(`secondFrozenChallahType-${e.target.dataset.challahtype}`)} >Select This Challah</button>
                            : null }
                        </div>        
                    )
                })}
            </div>
            : secondFrozenChallahTypeSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {secondFrozenChallahType}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('secondFrozenChallahTypeSelectionMade')}>Click Here To Change Selection</button>
        </div>
      
        : null}
        </div> /* Closing VH */
    )
}

export default SecondFrozenChallahType;