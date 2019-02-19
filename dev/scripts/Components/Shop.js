import React from 'react';
import NumberOfWeeklyFreshChallahs from './ShopComponents/NumberOfWeeklyFreshChallas';
import NumberOfWeeklyFrozenChallahs from './ShopComponents/NumberOfWeeklyFrozenChallahs';
import FirstFreshChallahType from './ShopComponents/FirstFreshChallahType';
import SecondFreshChallahType from './ShopComponents/SecondFreshChallahType';
import DeliveryTime from './ShopComponents/DeliveryTime';
import FreshOrFrozen from './ShopComponents/FreshOrFrozen';
import FirstFrozenChallahType from './ShopComponents/FirstFrozenChallahType';
import SecondFrozenChallahType from './ShopComponents/SecondFrozenChallahType';
import FormTracker from './ShopComponents/FormTracker';

class Shop extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const userProfile = this.props.userProfile,
            makeSelection = this.props.makeSelection,
            userLoggedIn = this.props.userLoggedIn,
            userChangingSelection = this.props.userChangingSelection,
            deliverySchedule = this.props.deliverySchedule,
            freshChallahTypes = this.props.freshChallahTypes,
            frozenChallahTypes = this.props.frozenChallahTypes,
            freshChallahSelected = this.props.userProfile.orderInformation.freshChallahSelected,
            frozenChallahSelected = this.props.userProfile.orderInformation.frozenChallahSelected,
            numberOfWeeklyFreshChallahs = this.props.userProfile.orderInformation.numberOfWeeklyFreshChallahs,
            numberOfWeeklyFrozenChallahs = this.props.userProfile.orderInformation.numberOfWeeklyFrozenChallahs
            
        return (
            <div className="shop wrapper-large">
                <FormTracker 
                    userProfile={userProfile}
                />
                <FreshOrFrozen 
                    userProfile={userProfile}
                    makeSelection={makeSelection}
                    userLoggedIn={userLoggedIn}
                    userChangingSelection={userChangingSelection}
                />
                
                { userLoggedIn && freshChallahSelected ? 
                    <NumberOfWeeklyFreshChallahs
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                    />
                : null }

                { userLoggedIn && frozenChallahSelected ? 
                    <NumberOfWeeklyFrozenChallahs 
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                    />
                : null }

                { !userLoggedIn || userLoggedIn && freshChallahSelected  ?
                    <FirstFreshChallahType
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        freshChallahTypes={freshChallahTypes}
                    />
                : null }
                
                { !userLoggedIn || userLoggedIn && frozenChallahSelected ?
                    <FirstFrozenChallahType 
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        frozenChallahTypes={frozenChallahTypes}
                    />
                : null }

                { userLoggedIn && numberOfWeeklyFreshChallahs === 2 ?
                    <SecondFreshChallahType
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        freshChallahTypes={freshChallahTypes}
                    />

                : userLoggedIn && numberOfWeeklyFrozenChallahs === 2 ?
                    <SecondFrozenChallahType 
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        frozenChallahTypes={frozenChallahTypes}
                    />

                : null }

                { userLoggedIn ?
                    <DeliveryTime
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        deliverySchedule={deliverySchedule}
                    />
                : null }

                
            </div> /* Closing Shop / Wrapper */
        )
    }
}

export default Shop;