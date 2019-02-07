import React from 'react'

const FreshOrFrozen = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection }
) => {
  
  const { freshChallahSelected, frozenChallahSelected, freshOrFrozenSelectionMade } = orderInformation

  const challahSelection = freshChallahSelected === true ? "Fresh" : frozenChallahSelected === true ? "Frozen" : null 

  const challahTypes = [
    {
        name: 'Fresh',
        description: "Our Freshly Baked Challahs",
        valuePassedToMakeSelection: 'fresh'
    },
    {
        name: 'Frozen',
        description: "Our Frozen Challahs",
        valuePassedToMakeSelection: 'frozen'
    },
]
  
  return (
    <div className="vh">
      
      { !userLoggedIn ? <h2>Our Subscription Plans</h2>: userLoggedIn && !freshOrFrozenSelectionMade ? <h2>Select Subscription Plan</h2> : null}

      { (userLoggedIn && !freshOrFrozenSelectionMade) || !userLoggedIn ?
        <div className="challah-row">
            {challahTypes.map((challah, i) => {
                return (
                    <div className="challah-container challah-type" key={i}>
                        <h1>{challah.name}</h1>
                        <p>{challah.description}</p>
                        {userLoggedIn ?
                            <button type="submit" data-challahtype={challah.name} onClick={(e) => makeSelection(`${challah.valuePassedToMakeSelection}ChallahSelected`)}>Select This Challah</button>
                        : null}
                    </div>        
                )
            })}
        </div>
      : userLoggedIn && freshOrFrozenSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {challahSelection}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('freshOrFrozenSelectionMade')}>Click Here To Change Selection</button>
        </div>
      
        : null}
      
    </div>
  )
}

export default FreshOrFrozen;