import React from 'react';

const DeliveryTime = (
    { userProfile: { orderInformation },
        makeSelection,
        userLoggedIn,
        userChangingSelection,
        deliverySchedule }
) => {

    const { deliveryTime, deliveryTimeSelectionMade } = orderInformation

    const deliveryTimes = []

    for(let key in deliverySchedule) {
        const value = deliverySchedule[key]
        deliveryTimes.push(`${key}:${value}`)
    }

    return (
        <section className="vh shop-section">
            <h2>Delivery Time Options</h2>
            {userLoggedIn && deliveryTime && deliveryTimeSelectionMade === true ?
                <div>
                    <h1>Your Selection: <br></br>
                        {deliveryTime}</h1>
                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('deliveryTimeSelectionMade')}>Click Here To Change Selection</button>
                </div>
            : userLoggedIn === false || userLoggedIn === true && deliveryTimeSelectionMade === false ?
                <div>
                    <p>Please Select Your Delivery Time Slot</p>
                
                    <div className="challah-row">
                        {deliveryTimes.map((keyValue, i) => {
                            const time = `${keyValue.split(":")[0]}:${keyValue.split(":")[1]}`
                            const customer = keyValue.split(":")[2]
                            if(customer === '') {
                                return(
                                    <div className="challah-container delivery-time" key={i}>
                                        <p>{time}</p>
                                        {userLoggedIn ?
                                            <button type="submit" data-deliverytime={time} onClick={(e) => makeSelection(`deliveryTime-${e.target.dataset.deliverytime}`)}>Select</button>
                                            : null}
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="challah-container delivery-time" key={i}>
                                        <p>{time}</p>
                                        <p>Not Available</p>
                                    </div> 
                                )
                            }
                        })}
                    </div>
                </div>
            : null}
        </section> /* Closing VH */

    )
}

export default DeliveryTime;