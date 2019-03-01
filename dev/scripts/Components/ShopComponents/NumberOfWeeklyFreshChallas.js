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
            description: "1 Challah",
            anchor: "#firstFreshChallahType",
            text: "1 Fresh Challah Weekly x 1 Month - $40"
        },
        {
            number: 2,
            description: "2 Challahs",
            anchor: "#firstFreshChallahType",
            text: "2 Fresh Challahs Weekly x 1 Month - $72"
        }
    ]

    return (
        <section className="vh shop-section" id="numberOfWeeklyFreshChallahs">
            <h2>Select Quantity</h2>
            
            { numberOfWeeklyFreshChallahsSelectionMade === false ?
                <div className="challah-row">
                    {numberOfChallahs.map((challah, index) => {
                        return (
                            <div className="challah-container challah-number" key={index}>
                                <h1>{challah.description}</h1>
                                <a href={challah.anchor}>
                                    <p>{challah.text}</p>
                                    <button type="submit" data-challahnumber={challah.number} onClick={(e) => makeSelection(`numberOfWeeklyFreshChallahs-${e.target.dataset.challahnumber}`)} >Select This Plan</button>
                                </a>
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

                    <button type="submit" className="change-selection" onClick={() => userChangingSelection('numberOfWeeklyFreshChallahsSelectionMade')}>Change Selection</button>
                </div>

            
            : null}
        </section> /* Closing VH */
    )
}

export default NumberOfWeeklyFreshChallahs;