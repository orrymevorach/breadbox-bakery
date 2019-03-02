import React from 'react'

const FreshOrFrozen = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection,
    selectFreshOrFrozen }
) => {
  
  const { freshChallahSelected, frozenChallahSelected, freshOrFrozenSelectionMade } = orderInformation

  const challahSelection = freshChallahSelected === true ? "Fresh" : frozenChallahSelected === true ? "Frozen" : null 

  const challahTypes = [
    {
        name: 'Fresh',
        description: "Our Freshly Baked Challahs",
        anchor: "#numberOfWeeklyFreshChallahs"
    },
    {
        name: 'Frozen',
        description: "Our Frozen Challahs",
        anchor: "#numberOfWeeklyFrozenChallahs"
    },
]
  return (
    <section className="vh shop-section" id="freshOrFrozen">
      
      { !userLoggedIn ? <h2>Our Subscription Plans</h2>: userLoggedIn && !freshOrFrozenSelectionMade ? <h2>Select Subscription Plan</h2> : null}

      { (userLoggedIn && !freshOrFrozenSelectionMade) || !userLoggedIn ?
        <div className="challah-row">
            {challahTypes.map((challah, i) => {
                return (
                    <div className="challah-container challah-type" key={i}>
                        <h1>{challah.name}</h1>
                        <p>{challah.description}</p>
                        {userLoggedIn ?
                        <a href={challah.anchor}>
                            <button type="submit" onClick={() => selectFreshOrFrozen(challah.name)}>Select This Challah</button>
                        </a>
                        : null}
                    </div>        
                )
            })}
        </div>
      : userLoggedIn && freshOrFrozenSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {challahSelection}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('freshOrFrozenSelectionMade')}>Change Selection</button>
        </div>
      
        : null}
      
    </section>
  )
}

export default FreshOrFrozen;