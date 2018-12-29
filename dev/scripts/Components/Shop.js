import React from 'react';
import NumberOfWeeklyChallahs from './ShopComponents/NumberOfWeeklyChallas';
import FirstChallahType from './ShopComponents/FirstChallahType';
import SecondChallahType from './ShopComponents/SecondChallahType';
import DeliveryTime from './ShopComponents/DeliveryTime';

const Shop = (
    { userProfile, 
        makeSelection, 
        userLoggedIn, 
        userChangingSelection, 
        deliverySchedule
     }) => {
    
    return (
        <div className="shop wrapper-large">
            <NumberOfWeeklyChallahs 
                userProfile={userProfile}
                makeSelection={makeSelection}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
            />
            <FirstChallahType 
                userProfile={userProfile}
                makeSelection={makeSelection}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
            />
            {/* If 2 Challahs were selected, show this section */}
            {userProfile.orderInformation.numberOfWeeklyChallahs === '2' ?
            <SecondChallahType 
                userProfile={userProfile}
                makeSelection={makeSelection}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
            /> 
            : null }
            <DeliveryTime 
                userProfile={userProfile}
                makeSelection={makeSelection}
                userLoggedIn={userLoggedIn}
                userChangingSelection={userChangingSelection}
                deliverySchedule={deliverySchedule}
            />
        </div> /* Closing Shop / Wrapper */
    )
}

export default Shop;