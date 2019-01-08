import React from 'react';
import NumberOfWeeklyChallahs from './ShopComponents/NumberOfWeeklyChallas';
import FirstChallahType from './ShopComponents/FirstChallahType';
import SecondChallahType from './ShopComponents/SecondChallahType';
import DeliveryTime from './ShopComponents/DeliveryTime';

class Shop extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // const oldHeaderHeight = document.getElementsByTagName('header')[0].clientHeight
        // const windowHeight = window.innerHeight
        // const newHeaderHeight = 100 - (oldHeaderHeight / windowHeight * 100)

        // document.getElementsByClassName('begin-now')[0].style.height = `${newHeaderHeight}vh`

        // if(this.props.userProfile.orderInformation.firstTimeCustomer === true) {
        //     document.getElementsByClassName('begin-now')[0].style.display = 'inline-block'
        //     console.log(document.getElementsByTagName('body')[0])
        //     document.getElementsByTagName('body')[0].style.height = '100vh'
        //     document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        // }

        // console.log(document.getElementsByClassName('numberOfWeeklyChallahs')[0])

    }
    scrollToNextSection(e) {
        console.log(e.target)
        let nextElement;
        if(e.target.className === "begin-button") {
            nextElement = document.getElementsByClassName('numberOfWeeklyChallahs')[0].clientHeight
        }
        else {
            nextElement = e.target.nextSibling.offsetTop
        }

        window.scrollTo({
            top: nextElement,
            behavior: 'smooth'
        })
    }

    render() {
        
        const userProfile = this.props.userProfile
        const makeSelection = this.props.makeSelection
        const userLoggedIn = this.props.userLoggedIn
        const userChangingSelection = this.props.userChangingSelection
        const deliverySchedule = this.props.deliverySchedule
            
        return (
            <div className="shop wrapper-large">
                {/* <div className="begin-now">
                    <button className="begin-button" type="submit" onClick={(e) => this.scrollToNextSection(e)}>Begin Now</button>
                </div> */}
                <NumberOfWeeklyChallahs
                    userProfile={userProfile}
                    makeSelection={makeSelection}
                    userLoggedIn={userLoggedIn}
                    userChangingSelection={userChangingSelection}
                    scrollToNextSection={this.scrollToNextSection}
                />
                <FirstChallahType
                    userProfile={userProfile}
                    makeSelection={makeSelection}
                    userLoggedIn={userLoggedIn}
                    userChangingSelection={userChangingSelection}
                />
                {/* If 2 Challahs were selected, show this section */}
                {userProfile.orderInformation.numberOfWeeklyChallahs === '2' ?
                    <SecondChallahType
                        userProfile={userProfile}
                        makeSelection={makeSelection}
                        userLoggedIn={userLoggedIn}
                        userChangingSelection={userChangingSelection}
                    />
                    : null}
                <DeliveryTime
                    userProfile={userProfile}
                    makeSelection={makeSelection}
                    userLoggedIn={userLoggedIn}
                    userChangingSelection={userChangingSelection}
                    deliverySchedule={deliverySchedule}
                />
            </div> /* Closing Shop / Wrapper */
        )
    }
}

export default Shop;