import React from 'react';

class FormTracker extends React.Component {
    componentDidMount() {
        const verticalLines = document.getElementsByClassName("tracking-vertical-line")
        const lastVeritcalLine = verticalLines.length - 1
        verticalLines[lastVeritcalLine].style.height = "35px"
        verticalLines[lastVeritcalLine].style.bottom = "-35px"
    }
    render() {
        const { userProfile: { orderInformation: { 
            freshChallahSelected, 
            frozenChallahSelected,
            numberOfWeeklyFreshChallahs,
            numberOfWeeklyFreshChallahsSelectionMade,
            firstFreshChallahType,
            firstFreshChallahTypeSelectionMade,
            secondFreshChallahType,
            secondFreshChallahTypeSelectionMade,
            numberOfWeeklyFrozenChallahs,
            numberOfWeeklyFrozenChallahsSelectionMade,
            firstFrozenChallahType,
            firstFrozenChallahTypeSelectionMade,
            secondFrozenChallahType,
            secondFrozenChallahTypeSelectionMade,
            deliveryTime,
            deliveryTimeSelectionMade,
        }}} = this.props

        const sections = [
            {
                title: "Fresh or Frozen",
                selection: freshChallahSelected ? "Fresh" : frozenChallahSelected ? "Frozen" : "Selection Not Made"
            },
            {
                title: "Number of Challahs",
                selection: freshChallahSelected && numberOfWeeklyFreshChallahsSelectionMade ? numberOfWeeklyFreshChallahs : frozenChallahSelected && numberOfWeeklyFrozenChallahsSelectionMade ? numberOfWeeklyFrozenChallahs : "Selection Not Made"
            },
            {
                title: numberOfWeeklyFreshChallahs === 2 || numberOfWeeklyFrozenChallahs === 2 ? "First Challah" : "Selected Challah",
                selection: firstFreshChallahTypeSelectionMade ? firstFreshChallahType : firstFrozenChallahTypeSelectionMade ? firstFrozenChallahType : "Selection Not Made"
            },
            {
                title: "Second Challah",
                selection: secondFreshChallahTypeSelectionMade ? secondFreshChallahType : secondFrozenChallahTypeSelectionMade ? secondFrozenChallahType : numberOfWeeklyFreshChallahs === 2 || numberOfWeeklyFrozenChallahs === 2 ? "Selection Not Made" : "Not Applicable"
            },
            {
                title: "Delivery Window",
                selection: deliveryTimeSelectionMade ? deliveryTime : "Selection Not Made"
            }
            
        ]

        return (
            <div className="form-tracker">
                {sections.map((section, index) => {
                    return (
                        <div className="tracking-container" key={index}>
                            <div className="tracking-circle">
                                <div className="tracking-vertical-line"></div>
                                <div className="tracking-horizontal-line"></div>
                            </div>
                            <div className="tracking-text-container">
                                <p>{section.title}</p>
                                <p className="tracking-selection">{section.selection}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default FormTracker ;