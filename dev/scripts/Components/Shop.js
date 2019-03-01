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
import OrderSummary from '../OrderSummary';

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    // componentDidMount() {
    //     const { userProfile: { orderInformation: 
    //         { freshOrFrozenSelectionMade,  
    //             numberOfWeeklyFreshChallahs,
    //             numberOfWeeklyFrozenChallahs,
    //             numberOfWeeklyFreshChallahsSelectionMade,
    //             numberOfWeeklyFrozenChallahsSelectionMade,
    //             firstFreshChallahTypeSelectionMade,
    //             firstFrozenChallahTypeSelectionMade,
    //             secondFreshChallahTypeSelectionMade,
    //             secondFrozenChallahTypeSelectionMade,
    //             deliveryTimeSelectionMade,
            
    //         }}} = this.props

    //     const secondChallah = (numberOfWeeklyFreshChallahs === 1 && !secondFreshChallahTypeSelectionMade ) || (numberOfWeeklyFrozenChallahs === 1 && !secondFrozenChallahTypeSelectionMade) || (numberOfWeeklyFreshChallahs === 2 && secondFreshChallahTypeSelectionMade ) || (numberOfWeeklyFrozenChallahs === 2 && secondFrozenChallahTypeSelectionMade) ? true : false ;

    //     if (freshOrFrozenSelectionMade && (numberOfWeeklyFreshChallahsSelectionMade || numberOfWeeklyFrozenChallahsSelectionMade) && (firstFreshChallahTypeSelectionMade || firstFrozenChallahTypeSelectionMade) && secondChallah && deliveryTimeSelectionMade) {
    //         this.setState({
    //             formComplete: true
    //         })
    //     }
    // }

    // componentDidUpdate(prevProps) {
    //     if(prevProps !== this.props) {

    //         const { userProfile: { orderInformation: 
    //             { freshOrFrozenSelectionMade,  
    //                 numberOfWeeklyFreshChallahs,
    //                 numberOfWeeklyFrozenChallahs,
    //                 numberOfWeeklyFreshChallahsSelectionMade,
    //                 numberOfWeeklyFrozenChallahsSelectionMade,
    //                 firstFreshChallahTypeSelectionMade,
    //                 firstFrozenChallahTypeSelectionMade,
    //                 secondFreshChallahTypeSelectionMade,
    //                 secondFrozenChallahTypeSelectionMade,
    //                 deliveryTimeSelectionMade
                
    //             }}} = this.props
    
    //         const secondChallah = (numberOfWeeklyFreshChallahs === 1 && !secondFreshChallahTypeSelectionMade ) || (numberOfWeeklyFrozenChallahs === 1 && !secondFrozenChallahTypeSelectionMade) || (numberOfWeeklyFreshChallahs === 2 && secondFreshChallahTypeSelectionMade ) || (numberOfWeeklyFrozenChallahs === 2 && secondFrozenChallahTypeSelectionMade) ? true : false ;
    
    //         if (freshOrFrozenSelectionMade && (numberOfWeeklyFreshChallahsSelectionMade || numberOfWeeklyFrozenChallahsSelectionMade) && (firstFreshChallahTypeSelectionMade || firstFrozenChallahTypeSelectionMade) && secondChallah && deliveryTimeSelectionMade) {
    //             this.setState({
    //                 formComplete: true
    //             })
    //         }
    //     }
    // }

    render() {

        const formComplete = this.props.userProfile.orderInformation.formComplete
        
        const { userProfile,
                makeSelection,
                userLoggedIn,
                userChangingSelection,
                deliverySchedule,
                freshChallahTypes,
                frozenChallahTypes,
                doneEditing,
                isEditing,
                userProfile: { orderInformation: { freshChallahSelected, frozenChallahSelected, numberOfWeeklyFreshChallahs, numberOfWeeklyFrozenChallahs } }
            } = this.props
            
        return (
            <div className="shop wrapper-large">
                {userLoggedIn ? 
                    <div>
                        {/* Form Tracker */}
                        <FormTracker 
                            userProfile={userProfile} 
                        />  
                        
                        {/* Back To Top Button */}
                        <a href="#freshOrFrozen"> 
                            <button className="back-to-top">Top</button>
                        </a> 
                        
                     </div> 


                : null } 

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

                { userLoggedIn && numberOfWeeklyFreshChallahs === 2  ?
                    <SecondFreshChallahType
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        freshChallahTypes={freshChallahTypes}
                    />

                : userLoggedIn && numberOfWeeklyFrozenChallahs === 2  ?
                    <SecondFrozenChallahType 
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        frozenChallahTypes={frozenChallahTypes}
                    />

                : null } 

                { userLoggedIn  ?
                    <DeliveryTime
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                        deliverySchedule={deliverySchedule}
                    />
                : null }

                 { userLoggedIn && formComplete ?
                    <button onClick={ doneEditing }>Confirm Order</button>

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