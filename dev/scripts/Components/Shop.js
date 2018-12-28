import React from 'react';
import NumberOfChallahs from './ShopComponents/NumberOfChallas';
import TypeOfChallah from './ShopComponents/TypeOfChallah';

const Shop = (
    { userProfile, 
        subscriptionInfo, 
        userLoggedIn, 
        userChangingSelection, 
        numberOfChallahsSelectionMade, 
        firstChallahTypeSelectionMade,
     }) => {
    
    return (
        <div className="shop wrapper-large">
            <NumberOfChallahs 
                userProfile={userProfile}
                subscriptionInfo={subscriptionInfo}
                userLoggedIn={userLoggedIn}
                numberOfChallahsSelectionMade={numberOfChallahsSelectionMade}
                userChangingSelection={userChangingSelection}
            />
            <TypeOfChallah 
                userProfile={userProfile}
                subscriptionInfo={subscriptionInfo}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
                firstChallahTypeSelectionMade={firstChallahTypeSelectionMade}
            />
        </div> /* Closing Shop / Wrapper */
    )
}

export default Shop;