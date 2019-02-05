import React from 'react'

const FreshOrFrozen = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection }
) => {
  
  const { freshOrFrozen, freshChallahSelected, freshOrFrozenSelectionMade, frozenChallahSelected } = orderInformation

  const selection = ( freshOrFrozenSelectionMade && freshOrFrozen === 'Fresh' ) ? 'Fresh' :
  ( freshOrFrozenSelectionMade && freshOrFrozen === 'Frozen' ) ? 'Frozen' :
  ( freshOrFrozenSelectionMade && freshOrFrozen === 'Both' ) ? 'Both' : 
  null

  const challahTypes = [
    {
        name: 'Fresh',
        description: "Our Freshly Baked Challahs"
    },
    {
        name: 'Frozen',
        description: "Our Frozen Challahs"
    },
    {
        name: 'Both',
        description: "Both!"
    }
]
  
  return (
    <div className="vh">
      
      {!userLoggedIn ? <h2>We Serve Fresh and Frozen Challahs</h2>: userLoggedIn && !freshOrFrozenSelectionMade ? <h2>Would You Like Your Challahs Fresh, Frozen, or Both?</h2> : null}

      { userLoggedIn && freshOrFrozenSelectionMade  ?
        <div>
            <h1>Your Selection: <br></br>
            {selection}</h1>
            <button type="submit" className="change-selection" onClick={() => userChangingSelection('freshOrFrozenSelectionMade')}>Click Here To Change Selection</button>
        </div>
      
        : !userLoggedIn || userLoggedIn && !freshOrFrozenSelectionMade? 
        <div className="challah-row">
            {challahTypes.map((challah, i) => {
                return (
                    <div className="challah-container challah-type" key={i}>
                        <h1>{challah.name}</h1>
                        <p>{challah.description}</p>
                        {userLoggedIn ?
                            <button type="submit" data-challahtype={challah.name} onClick={(e) => makeSelection(`freshOrFrozen-${e.target.dataset.challahtype}`)} >Select This Challah</button>
                        : null}
                    </div>        
                )
            })}
        </div>
      
        : null}


      
      
      
      
    </div>
  )
}

export default FreshOrFrozen;