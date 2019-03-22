import React from 'react';
import classnames from 'classnames';
import NumberOfWeeklyFreshChallahs from './ShopComponents/NumberOfWeeklyFreshChallas';
import NumberOfWeeklyFrozenChallahs from './ShopComponents/NumberOfWeeklyFrozenChallahs';
import FirstFreshChallahType from './ShopComponents/FirstFreshChallahType';
import SecondFreshChallahType from './ShopComponents/SecondFreshChallahType';
import DeliveryTime from './ShopComponents/DeliveryTime';
import FreshOrFrozen from './ShopComponents/FreshOrFrozen';
import FirstFrozenChallahType from './ShopComponents/FirstFrozenChallahType';
import SecondFrozenChallahType from './ShopComponents/SecondFrozenChallahType';
import FormTracker from './ShopComponents/FormTracker';
import WeeklyOrMonthly from './ShopComponents/WeeklyOrMonthly';
import PricingPlan from './ShopComponents/PricingPlan';

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
              "freshChallahTypes": [
                {
                  name: 'Sesame',
                  description: "Plain Challah with Sesame Seed Topping"
                },
                {
                  name: 'Sweet',
                  description: "Plain Challah with Streusel Topping"
                },
                {
                  name: 'Raisin',
                  description: "Raisin Challah with Streusel Topping"
                }
              ],
              "frozenChallahTypes": [
                {
                  name: 'Original',
                  description: "Plain Challah with No Topping"
                },
                {
                  name: 'Raisin',
                  description: "Raisin Challah with Streusel Topping"
                },
              ]
        }
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.userProfile.orderInformation.formComplete)
    // }

    render() {

        const freshChallahTypes = this.state.freshChallahTypes,
                frozenChallahTypes = this.state.frozenChallahTypes
        
        const { userProfile,
                userLoggedIn,
                userChangingSelection,
                deliverySchedule,
                confirmOrder,
                selectFreshOrFrozen,
                selectNumberOfWeeklyFreshChallahs,
                selectNumberOfWeeklyFrozenChallahs,
                selectFirstFreshChallahType,
                selectSecondFreshChallahType,
                selectFirstFrozenChallahType,
                selectSecondFrozenChallahType,
                selectDeliveryTime,
                selectWeeklyOrMonthly,
                resetForm,
                userProfile: { orderInformation: { freshChallahSelected, frozenChallahSelected, numberOfWeeklyFreshChallahs, numberOfWeeklyFrozenChallahs, formComplete } }
            } = this.props
            
        return (
            <div className="shop wrapper-large">
                {/* {userLoggedIn && ( 
                        <FormTracker 
                            userProfile={userProfile} 
                        />  
                )}  */}

                {/* Back To Top Button */}
                <div className="fixed-buttons-container">
                    <button className="reset-form" onClick={resetForm}>Reset Form</button>
                    <a href="#freshOrFrozen"> 
                        <button className="back-to-top">Top</button>
                    </a> 
                </div>

                <PricingPlan />

                <WeeklyOrMonthly 
                    userProfile={userProfile}
                    userLoggedIn={userLoggedIn}
                    userChangingSelection={userChangingSelection}
                    selectWeeklyOrMonthly={selectWeeklyOrMonthly}
                />

                <FreshOrFrozen 
                    userProfile={userProfile}
                    userLoggedIn={userLoggedIn}
                    userChangingSelection={userChangingSelection}
                    selectFreshOrFrozen={selectFreshOrFrozen}
                />
                
                { userLoggedIn && freshChallahSelected ? 
                    <NumberOfWeeklyFreshChallahs
                        userProfile={userProfile}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        selectNumberOfWeeklyFreshChallahs={selectNumberOfWeeklyFreshChallahs}

                    />
                : null }

                { userLoggedIn && frozenChallahSelected ? 
                    <NumberOfWeeklyFrozenChallahs 
                        userProfile={userProfile}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        selectNumberOfWeeklyFrozenChallahs={selectNumberOfWeeklyFrozenChallahs}
                    />
                : null }

                { !userLoggedIn || userLoggedIn && freshChallahSelected  ?
                    <FirstFreshChallahType
                        userProfile={userProfile}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        freshChallahTypes={freshChallahTypes}
                        selectFirstFreshChallahType={selectFirstFreshChallahType}
                    />
                : null }
                
                { !userLoggedIn || userLoggedIn && frozenChallahSelected ?
                    <FirstFrozenChallahType 
                        userProfile={userProfile}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        frozenChallahTypes={frozenChallahTypes}
                        selectFirstFrozenChallahType={selectFirstFrozenChallahType}
                    />
                : null }

                { userLoggedIn && numberOfWeeklyFreshChallahs === 2  ?
                    <SecondFreshChallahType
                        userProfile={userProfile}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        freshChallahTypes={freshChallahTypes}
                        selectSecondFreshChallahType={selectSecondFreshChallahType}
                    />

                : userLoggedIn && numberOfWeeklyFrozenChallahs === 2  ?
                    <SecondFrozenChallahType 
                        userProfile={userProfile}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        frozenChallahTypes={frozenChallahTypes}
                        selectSecondFrozenChallahType={selectSecondFrozenChallahType}
                    />

                : null } 

                { userLoggedIn  ?
                    <DeliveryTime
                        userProfile={userProfile}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        deliverySchedule={deliverySchedule}
                        selectDeliveryTime={selectDeliveryTime}
                    />
                : null }

                 { userLoggedIn && formComplete ?
                    <button onClick={ confirmOrder }>Confirm Order</button>

                : userLoggedIn && !formComplete ?
                    <button 
                        className="disabled"
                        >Confirm Order
                        <div className="hover-note"><p>Please Complete The Form Before Submitting</p></div>
                    </button>
                 : null } 

                
            </div> /* Closing Shop / Wrapper */
        )
    }
}

export default Shop;