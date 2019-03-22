import React from 'react';
import WeeklyOrMonthly from './Components/ShopComponents/WeeklyOrMonthly';

class OrderSummary extends React.Component {
    render() {
        const { isEditingOrderSummary,
                editOrderSummary,
                confirmOrderSummary,
                isEditing,
                userProfile: { orderInformation: 
                    { freshOrFrozenSelectionMade,  
                    freshChallahSelected,
                    frozenChallahSelected,
                    numberOfWeeklyFreshChallahs,
                    numberOfWeeklyFrozenChallahs,
                    numberOfWeeklyFreshChallahsSelectionMade,
                    numberOfWeeklyFrozenChallahsSelectionMade,
                    firstFreshChallahTypeSelectionMade,
                    firstFrozenChallahTypeSelectionMade,
                    secondFreshChallahTypeSelectionMade,
                    secondFrozenChallahTypeSelectionMade,
                    firstFreshChallahType,
                    firstFrozenChallahType,
                    secondFreshChallahType,
                    secondFrozenChallahType,
                    weeklyOrMonthly,
                    deliveryTime,
                    totalCost }
            }} = this.props

        const freshOrFrozen = freshChallahSelected ? "Fresh" : frozenChallahSelected ? "Frozen" : null,
              numberOfChallahs = numberOfWeeklyFreshChallahsSelectionMade ? numberOfWeeklyFreshChallahs : numberOfWeeklyFrozenChallahsSelectionMade ? numberOfWeeklyFrozenChallahs : null,
              firstChallah = firstFreshChallahTypeSelectionMade ? firstFreshChallahType : firstFrozenChallahTypeSelectionMade ? firstFrozenChallahType : null,
              secondChallah = secondFreshChallahTypeSelectionMade ? secondFreshChallahType : secondFrozenChallahTypeSelectionMade ? secondFrozenChallahType : null,
              deliveryWindow = 
                deliveryTime === "12:00PM" ? "12:00PM - 12:30PM" :
                deliveryTime === "12:30PM" ? "12:30PM - 1:00PM" :
                deliveryTime === "1:00PM" ? "1:00PM - 1:30PM" :
                deliveryTime === "1:30PM" ? "1:30PM - 2:00PM" :
                deliveryTime === "2:00PM" ? "2:00PM - 2:30PM" :
                deliveryTime === "2:30PM" ? "2:30PM - 3:00PM" :
                deliveryTime === "3:00PM" ? "3:00PM - 3:30PM" :
                deliveryTime === "3:30PM" ? "3:30PM - 4:00PM" : null,
                challahFirstChallah = numberOfChallahs === 1 ? "Challah" : "First Challah",
                challahOrChallahs = numberOfChallahs === 1 ? "Challah" : "Challahs",
                oneOrFourWeeks = weeklyOrMonthly === "Weekly" ? "1 Week Only" : weeklyOrMonthly === "Monthly" ? "4 Weeks" : null
          
                const date = new Date(),
                    month = date.getMonth(),
                    day = date.getDay(),
                    year = date.getFullYear(),
                    monthInWords = 
                        month === 1 ? "January"
                        : month === 2 ? "February"
                        : month === 3 ? "March"
                        : month === 4 ? "April"
                        : month === 5 ? "May"
                        : month === 6 ? "June"
                        : month === 7 ? "July"
                        : month === 8 ? "August"
                        : month === 9 ? "September"
                        : month === 10 ? "October"
                        : month === 11 ? "November"
                        : month === 12 ? "December"
                        : null,
                    deliveryDate = `${monthInWords} ${day}, ${year}`

        return (
            <section className="order-summary">
                <div className="heading-tab">
                    <div className="row">
                        <h1>Order Summary</h1>
                        { !isEditingOrderSummary && (<button className="link" onClick={editOrderSummary}>Review</button>) }
                    </div>
                </div>
                    {!isEditingOrderSummary && (
                      <div className="summary">
                          <p>Delivering <span className="bold">{numberOfChallahs}</span> {challahOrChallahs} at <span className="bold">{deliveryWindow}</span></p>
                          <div className="row challah-selections">
                            <p>{challahFirstChallah}: <span className="bold">{firstChallah}</span></p>
                            {numberOfChallahs === 2 && (
                                <p>Second Challah: <span className="bold">{secondChallah}</span></p>
                            )}
                          </div>
                          <p>Delivery Plan: <span className="bold"> {oneOrFourWeeks}</span></p>
                      </div>  
                    )}
                 
                
                {isEditingOrderSummary && (
                <div className="main-content text-container">
                    <div className="row">
                        <p className="text-left">Delivery Plan:</p>
                        <div>
                            <p className="text-right">{oneOrFourWeeks}</p>
                            {/* <p className="delivery-date">({deliveryDate})</p> */}
                        </div>
                    </div>
                    <div className="row">
                        <p className="text-left">Fresh Or Frozen Challah:</p>
                        <p className="text-right">{freshOrFrozen}</p>
                    </div>
                    <div className="row">
                        <p className="text-left">Number Of Challahs:</p>
                        <p className="text-right">{numberOfChallahs}</p>
                    </div>
                    <div className="row">
                        <p className="text-left">{challahFirstChallah}</p>
                        <p className="text-right">{firstChallah}</p>
                    </div>
                    { freshChallahSelected && numberOfWeeklyFreshChallahs === 2 || frozenChallahSelected && numberOfWeeklyFrozenChallahs === 2 ?
                        <div className="row">
                            <p className="text-left">Second Challah:</p>
                            <p className="text-right">{secondChallah}</p>
                        </div>
                    : null }
                    <div className="row delivery-window">
                        <div>
                            <p className="text-left bold">Delivery Window:</p>
                            <p className="subtext">*Please make sure someone is home at this time</p>
                            <p className="subtext">*If no one is home, the Challah will be left at the front door</p>
                            <p className="subtext">*Breadbox Bakery is not responsible for stolen or damaged Challah</p>
                        </div>
                        <p className="text-right">{deliveryWindow}</p>
                    </div>
                    <div className="row order-total">
                        <p className="text-left bold">Order Total:</p>
                        <p className="text-right">${totalCost}.00</p>
                    </div>
                    <div className="row buttons-container">
                        <button onClick={ confirmOrderSummary }>Continue</button>
                        <button className="link" onClick={ isEditing }>Edit Order</button>
                    </div>
                </div>
                )}
            </section>
                
        )
    }
}

export default OrderSummary ;