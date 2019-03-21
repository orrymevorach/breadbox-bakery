import React from 'react';

const NumberOfWeeklyFrozenChallahs = (
    { userProfile: { orderInformation }, 
        selectNumberOfWeeklyFrozenChallahs,
        userChangingSelection }
    ) => {

    const { numberOfWeeklyFrozenChallahs, numberOfWeeklyFrozenChallahsSelectionMade } = orderInformation

    const numberOfChallahs = [
        {
            number: 1,
            description: "1 Challah",
            anchor: "#firstFrozenChallahType",
            text: "1 Frozen Challah Weekly x 1 Month - $20"
        },
        {
            number: 2,
            description: "2 Challahs",
            anchor: "#firstFrozenChallahType",
            text: "2 Frozen Challahs Weekly x 1 Month - $36"
        }
    ]

    return (
        <section className="vh shop-section" id="numberOfWeeklyFrozenChallahs">
            <h2>Select Quantity</h2>
            
            { numberOfWeeklyFrozenChallahsSelectionMade === false ?
                <div className="challah-row">
                    {numberOfChallahs.map((challah, index) => {
                        return (
                            <div className="challah-container challah-number" key={index}>
                                <h1>{challah.description}</h1>
                                <a href={challah.anchor}>
                                    {/* <p>{challah.text}</p> */}
                                    <button type="submit" onClick={(e) => selectNumberOfWeeklyFrozenChallahs(challah.number)} >Select This Plan</button>
                                </a>
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

                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('numberOfWeeklyFrozenChallahsSelectionMade')}>Change Selection</button>
                </div>

            
            : null}
        </section> /* Closing VH */
    )
}

export default NumberOfWeeklyFrozenChallahs;