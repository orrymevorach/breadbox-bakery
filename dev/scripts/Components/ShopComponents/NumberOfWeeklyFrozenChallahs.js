import React from 'react';

const NumberOfWeeklyFrozenChallahs = (
    { userProfile: { orderInformation }, 
        makeSelection, 
        userChangingSelection }
    ) => {

    const { numberOfWeeklyFrozenChallahs, numberOfWeeklyFrozenChallahsSelectionMade } = orderInformation

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
        <section className="vh shop-section">
            <h2>Select Quantity</h2>
            
            { numberOfWeeklyFrozenChallahsSelectionMade === false ?
                <div className="challah-row">
                    {numberOfChallahs.map((challah, index) => {
                        return (
                            <div className="challah-container challah-number" key={index}>
                                <h1>{challah.description}</h1>
                                <button type="submit" data-challahnumber={challah.number} onClick={(e) => makeSelection(`numberOfWeeklyFrozenChallahs-${e.target.dataset.challahnumber}`)} >Select This Plan</button>
                            </div>    
                        )
                    })}
                </div>
                        
            : numberOfWeeklyFrozenChallahsSelectionMade === true ?
                <div>
                    { // If 1 Challah was Selected
                    numberOfWeeklyFrozenChallahs === 1 ?
                        <h1>Your Selection: <br></br>
                        {numberOfWeeklyFrozenChallahs} Frozen Challah will be delivered Weekly</h1>

                    // If 2 Challahs were selected
                    : numberOfWeeklyFrozenChallahs === 2 ?
                        <h1>Your Selection: <br></br>
                        {numberOfWeeklyFrozenChallahs} Frozen Challahs will be delivered Weekly</h1>
                    : null }

                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('numberOfWeeklyFrozenChallahsSelectionMade')}>Click Here To Change Selection</button>
                </div>

            
            : null}
        </section> /* Closing VH */
    )
}

export default NumberOfWeeklyFrozenChallahs;