import React from 'react';

const NumberOfWeeklyFreshChallahs = (
    { userProfile: { orderInformation }, 
        makeSelection, 
        userChangingSelection }
    ) => {

    const { numberOfWeeklyFreshChallahs, numberOfWeeklyFreshChallahsSelectionMade } = orderInformation

    const numberOfChallahs = [
        {
            number: 1,
            description: "1 Challah"
        },
        {
            number: 2,
            description: "2 Challahs"
        }
    ]

    return (
        <div className="vh">
            <h2>Select Quantity</h2>
            
            { numberOfWeeklyFreshChallahsSelectionMade === false ?
                <div className="challah-row">
                    {numberOfChallahs.map((challah, index) => {
                        return (
                            <div className="challah-container challah-number" key={index}>
                                <h1>{challah.description}</h1>
                                <button type="submit" data-challahnumber={challah.number} onClick={(e) => makeSelection(`numberOfWeeklyFreshChallahs-${e.target.dataset.challahnumber}`)} >Select This Plan</button>
                            </div>    
                        )
                    })}
                </div>
                        
            : numberOfWeeklyFreshChallahsSelectionMade === true ?
                <div>
                    { // If 1 Challah was Selected
                    numberOfWeeklyFreshChallahs === 1 ?
                        <h1>Your Selection: <br></br>
                        {numberOfWeeklyFreshChallahs} Fresh Challah will be delivered Weekly</h1>

                    // If 2 Challahs were selected
                    : numberOfWeeklyFreshChallahs === 2 ?
                        <h1>Your Selection: <br></br>
                        {numberOfWeeklyFreshChallahs} Fresh Challahs will be delivered Weekly</h1>
                    : null }

                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('numberOfWeeklyFreshChallahsSelectionMade')}>Click Here To Change Selection</button>
                </div>

            
            : null}
        </div> /* Closing VH */
    )
}

export default NumberOfWeeklyFreshChallahs;