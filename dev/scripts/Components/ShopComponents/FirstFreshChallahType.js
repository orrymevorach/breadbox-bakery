import React from 'react';

const FirstFreshChallahType = (
    { userProfile: { orderInformation },
        selectFirstFreshChallahType,
        userLoggedIn,
        userChangingSelection,
        freshChallahTypes
     }
) => {

    const { firstFreshChallahType, firstFreshChallahTypeSelectionMade, numberOfWeeklyFreshChallahs } = orderInformation
    
    return (
        <section className="vh shop-section" id="firstFreshChallahType">
            { !userLoggedIn ? <h2>Our Fresh Challahs</h2> 
            : userLoggedIn && numberOfWeeklyFreshChallahs === 1 ? <h2>Select Your Challah</h2>
            : userLoggedIn && numberOfWeeklyFreshChallahs === 2 ? <h2>Select Your First Challah</h2>  
            : null }
            { !userLoggedIn || (userLoggedIn && !firstFreshChallahTypeSelectionMade)  ?
            <div className="challah-row">
                {freshChallahTypes.map((challah, i) => {
                    const anchor = numberOfWeeklyFreshChallahs === 1 ? "#deliveryTime" : numberOfWeeklyFreshChallahs === 2 ? "#secondFreshChallahType" : null
                    return (
                        <div className="challah-container challah-type" key={i}>
                            <h1>{challah.name}</h1>
                            <p>{challah.description}</p>
                            {userLoggedIn ? 
                            <a href={anchor}>
                                <button type="submit" onClick={(e) => selectFirstFreshChallahType(challah.name)} >Select This Challah</button>
                            </a>
                            : null }
                        </div>        
                    )
                })}
            </div>
            : userLoggedIn && firstFreshChallahTypeSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {firstFreshChallahType}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('firstFreshChallahTypeSelectionMade')}>Change Selection</button>
        </div>
      
        : null}
        </section> /* Closing VH */
    )
}

export default FirstFreshChallahType;