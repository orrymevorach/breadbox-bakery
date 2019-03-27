import React from 'react';

const WeeklyOrMonthly = (
    { userProfile: { orderInformation },
        selectWeeklyOrMonthly,
        userLoggedIn,
        userChangingSelection,
     }
) => {

    const weeklyOrMonthlyArray = [
        {
            plan: "1 Week",
            text: "Challah delivery this Friday only",
            anchor: "#freshOrFrozen"
        },
        {
            plan: "4 Weeks",
            text: "Challah delivery every Friday for four weeks",
            anchor: "#freshOrFrozen"
        }
    ]

    const { weeklyOrMonthly, weeklyOrMonthlySelectionMade } = orderInformation
    
    return (
        <section className="vh shop-section" id="weeklyOrMonthly">
            <h2>Delivery Plan</h2>

            {userLoggedIn  && !weeklyOrMonthlySelectionMade ?

            <div className="challah-row">
                {weeklyOrMonthlyArray.map((plan, index) => {
                    return (
                        <div className="challah-container challah-type" key={index}>
                            <h1>{plan.plan}</h1>
                            <p>{plan.text}</p>
                            <a href={plan.anchor}>
                                <button type="submit" onClick={(e) => selectWeeklyOrMonthly(plan.plan)} >Select This Plan</button>
                            </a>
                        </div>
                    )
                })}
            </div>

            : userLoggedIn && weeklyOrMonthlySelectionMade ?
            <div>
                <h1>Your Selection: <br></br>
                {weeklyOrMonthly}</h1>
                <button type="submit" className="change-selection" onClick={() => userChangingSelection('weeklyOrMonthlySelectionMade')}>Change Selection</button>
            </div>

            : !userLoggedIn ?

            <div className="challah-row">
                {weeklyOrMonthlyArray.map((plan, index) => {
                    return (
                        <div className="challah-container challah-type" key={index}>
                            <h1>{plan.plan}</h1>
                            <p>{plan.text}</p>
                        </div>
                    )
                })}
            </div>
      
        : null} 
        </section> /* Closing VH */
    )
}

export default WeeklyOrMonthly;