import React from 'react';
import NumberOfChallahs from './ShopComponents/NumberOfChallas';
import FirstChallahType from './ShopComponents/FirstChallahType';
import SecondChallahType from './ShopComponents/SecondChallahType';

const Shop = (
    { userProfile, 
        subscriptionInfo, 
        userLoggedIn, 
        userChangingSelection, 
        numberOfWeeklyChallahsSelectionMade, 
        firstChallahTypeSelectionMade,
     }) => {
    
    return (
        <div className="shop wrapper-large">
            <NumberOfChallahs 
                userProfile={userProfile}
                subscriptionInfo={subscriptionInfo}
                userLoggedIn={userLoggedIn}
                numberOfWeeklyChallahsSelectionMade={numberOfWeeklyChallahsSelectionMade}
                userChangingSelection={userChangingSelection}
            />
            <FirstChallahType 
                userProfile={userProfile}
                subscriptionInfo={subscriptionInfo}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
                firstChallahTypeSelectionMade={firstChallahTypeSelectionMade}
            />
            {/* If 2 Challahs were selected, show this section */}
            {userProfile.numberOfWeeklyChallahs === '2' ?
            <SecondChallahType 
                userProfile={userProfile}
                subscriptionInfo={subscriptionInfo}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
                secondChallahTypeSelectionMade={firstChallahTypeSelectionMade}
            /> 
            : null }
        </div> /* Closing Shop / Wrapper */
    )
}

export default Shop;