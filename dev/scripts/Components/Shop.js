import React from 'react';
import NumberOfWeeklyFreshChallahs from './ShopComponents/NumberOfWeeklyFreshChallas';
import NumberOfWeeklyFrozenChallahs from './ShopComponents/NumberOfWeeklyFrozenChallahs';
import FirstFreshChallahType from './ShopComponents/FirstFreshChallahType';
import SecondFreshChallahType from './ShopComponents/SecondFreshChallahType';
import DeliveryTime from './ShopComponents/DeliveryTime';
import FreshOrFrozen from './ShopComponents/FreshOrFrozen';
import FirstFrozenChallahType from './ShopComponents/FirstFrozenChallahType';
import SecondFrozenChallahType from './ShopComponents/SecondFrozenChallahType';

class Shop extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const userProfile = this.props.userProfile
        const makeSelection = this.props.makeSelection
        const userLoggedIn = this.props.userLoggedIn
        const userChangingSelection = this.props.userChangingSelection
        const deliverySchedule = this.props.deliverySchedule
        const freshChallahTypes = this.props.freshChallahTypes
        const frozenChallahTypes = this.props.frozenChallahTypes
            
        return (
            <div className="shop wrapper-large">
                <FreshOrFrozen 
                    userProfile={userProfile}
                    makeSelection={makeSelection}
                    userLoggedIn={userLoggedIn}
                    userChangingSelection={userChangingSelection}
                />
                
                { userLoggedIn && userProfile.orderInformation.freshChallahSelected ? 
                    <NumberOfWeeklyFreshChallahs
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                    />
                : null }

                { userLoggedIn && userProfile.orderInformation.frozenChallahSelected ? 
                    <NumberOfWeeklyFrozenChallahs 
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                    />
                : null }

                { !userLoggedIn || ( userLoggedIn && userProfile.orderInformation.freshChallahSelected === true ) ?
                    <FirstFreshChallahType
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        freshChallahTypes={freshChallahTypes}
                    />
                : null }
                
                { !userLoggedIn || ( userLoggedIn && userProfile.orderInformation.frozenChallahSelected ) === true ?
                    <FirstFrozenChallahType 
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        frozenChallahTypes={frozenChallahTypes}
                    />
                : null }

                { userLoggedIn && userProfile.orderInformation.numberOfWeeklyFreshChallahs === 2 ?
                    <SecondFreshChallahType
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        freshChallahTypes={freshChallahTypes}
                    />

                : userLoggedIn && userProfile.orderInformation.numberOfWeeklyFrozenChallahs === 2 ?
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