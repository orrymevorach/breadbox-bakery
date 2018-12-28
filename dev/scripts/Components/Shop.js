import React from 'react';
import NumberOfWeeklyChallahs from './ShopComponents/NumberOfWeeklyChallas';
import FirstChallahType from './ShopComponents/FirstChallahType';
import SecondChallahType from './ShopComponents/SecondChallahType';

const Shop = (
    { userProfile, 
        subscriptionInfo, 
        userLoggedIn, 
        userChangingSelection, 
     }) => {
    
    return (
        <div className="shop wrapper-large">
            <NumberOfWeeklyChallahs 
                userProfile={userProfile}
                subscriptionInfo={subscriptionInfo}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
            />
            <FirstChallahType 
                userProfile={userProfile}
                subscriptionInfo={subscriptionInfo}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
            />
            {/* If 2 Challahs were selected, show this section */}
            {userProfile.orderInformation.numberOfWeeklyChallahs === '2' ?
            <SecondChallahType 
                userProfile={userProfile}
                subscriptionInfo={subscriptionInfo}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
            /> 
            : null }
        </div> /* Closing Shop / Wrapper */
    )
}

export default Shop;