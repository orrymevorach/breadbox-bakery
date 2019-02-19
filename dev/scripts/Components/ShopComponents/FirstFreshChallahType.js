import React from 'react';

const FirstFreshChallahType = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection,
        freshChallahTypes
     }
) => {

    const { firstFreshChallahType, firstFreshChallahTypeSelectionMade, numberOfWeeklyFreshChallahs } = orderInformation
    
    return (
        <section className="vh shop-section">
            { !userLoggedIn ? <h2>Our Fresh Challahs</h2> 
            : userLoggedIn && numberOfWeeklyFreshChallahs === 1 ? <h2>Select Your Challah</h2>
            : userLoggedIn && numberOfWeeklyFreshChallahs === 2 ? <h2>Select Your First Challah</h2>  
            : null }
            { !userLoggedIn || (userLoggedIn && !firstFreshChallahTypeSelectionMade)  ?
            <div className="challah-row">
                {freshChallahTypes.map((challah, i) => {
                    return (
                        <div className="challah-container challah-type" key={i}>
                            <h1>{challah.name}</h1>
                            <p>{challah.description}</p>
                            {userLoggedIn ? 
                                <button type="submit" data-challahtype={challah.name} onClick={(e) => makeSelection(`firstFreshChallahType-${e.target.dataset.challahtype}`)} >Select This Challah</button>
                            : null }
                        </div>        
                    )
                })}
            </div>
            : userLoggedIn && firstFreshChallahTypeSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {firstFreshChallahType}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('firstFreshChallahTypeSelectionMade')}>Click Here To Change Selection</button>
        </div>
      
        : null}
        </section> /* Closing VH */
    )
}

export default FirstFreshChallahType;