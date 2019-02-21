import React from 'react';

const FirstFrozenChallahType = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection,
        frozenChallahTypes
     }
) => {

    const { firstFrozenChallahType, firstFrozenChallahTypeSelectionMade, numberOfWeeklyFrozenChallahs } = orderInformation
    
    return (
        <section className="vh shop-section" id="firstFrozenChallahType">
            { !userLoggedIn ? <h2>Our Frozen Challahs</h2> 
            : userLoggedIn && numberOfWeeklyFrozenChallahs === 1 ? <h2>Select Your Challah</h2>
            : userLoggedIn && numberOfWeeklyFrozenChallahs === 2 ? <h2>Select Your First Challah</h2>  
            : null }
            { !userLoggedIn || (userLoggedIn && !firstFrozenChallahTypeSelectionMade)  ?
            <div className="challah-row">
                {frozenChallahTypes.map((challah, i) => {
                    const anchor = numberOfWeeklyFrozenChallahs === 1 ? "#deliveryTime" : numberOfWeeklyFrozenChallahs === 2 ? "#secondFrozenChallahType" : null
                    return (
                        <div className="challah-container challah-type" key={i}>
                            <h1>{challah.name}</h1>
                            <p>{challah.description}</p>
                            {userLoggedIn ? 
                                <a href={anchor}>
                                    <button type="submit" data-challahtype={challah.name} onClick={(e) => makeSelection(`firstFrozenChallahType-${e.target.dataset.challahtype}`)} >Select This Challah</button>
                                </a>
                            : null }
                        </div>        
                    )
                })}
            </div>
            : userLoggedIn && firstFrozenChallahTypeSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {firstFrozenChallahType}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('firstFrozenChallahTypeSelectionMade')}>Click Here To Change Selection</button>
        </div>
      
        : null}
        </section> /* Closing VH */
    )
}

export default FirstFrozenChallahType;