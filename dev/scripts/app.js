import React from 'react';
import ReactDOM from 'react-dom';
import CreateAccountModal from './Components/CreateAccountModal';
import LoginModal from './Components/LoginModal';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Shop from './Components/Shop';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB1KLWrQKKfaV77GA5hINfhZFgkPsLTnKM",
  authDomain: "breadbox-bakery.firebaseapp.com",
  databaseURL: "https://breadbox-bakery.firebaseio.com",
  projectId: "breadbox-bakery",
  storageBucket: "breadbox-bakery.appspot.com",
  messagingSenderId: "629017584696"
};
firebase.initializeApp(config);

// Firebase Database Variables
const dbRefUsers = firebase.database().ref('users')
const dbRefDeliverySchedule = firebase.database().ref('deliverySchedule')

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userLoggedIn: false,
      // Create Account Inputs
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      apartmentSuite: '',
      city: '',
      province: '',
      postalCode: '',
      phoneNumber: '',
      userProfile: {
        "contactInformation": {
          "userID": '',
          "firstName": '',
          "lastName": '',
          "address": '',
          "apartmentSuite": '',
          "city": '',
          "province": '',
          "postalCode": '',
          "phoneNumber": '',
          "email": '',
        },
        "orderInformation": {
          // General Info
          "deliveryTime": '',
          "deliveryTimeSelectionMade": false,
          "freshChallahSelected": false,
          "frozenChallahSelected": false,
          "freshOrFrozenSelectionMade": false,
          // Fresh Challahs
          "numberOfWeeklyFreshChallahs": 0,
          "numberOfWeeklyFreshChallahsSelectionMade": false,
          "firstFreshChallahType": '',
          "firstFreshChallahTypeSelectionMade": false,
          "secondFreshChallahType": '',
          "secondFreshChallahTypeSelectionMade": false,
          // Frozen Challahs
          "numberOfWeeklyFrozenChallahs": 0,
          "numberOfWeeklyFrozenChallahsSelectionMade": false,
          "firstFrozenChallahType": '',
          "firstFrozenChallahTypeSelectionMade": false,
          "secondFrozenChallahType": '',
          "secondFrozenChallahTypeSelectionMade": false,
        }
      },
      "deliverySchedule": {
        "10:00AM": '',
        "10:30AM": '',
        "11:00AM": '',
        "11:30AM": '',
        "12:00PM": '',
        "12:30PM": '',
        "1:00PM": '',
        "1:30PM": '',
        "2:00PM": '',
        "2:30PM": '',
        "3:00PM": '',
        "3:30PM": ''
      },
      "freshChallahTypes": [
        {
          name: 'Original',
          description: "Plain Challah with No Topping"
        },
        {
          name: 'Sesame',
          description: "Plain Challah with Sesame Seed Topping"
        },
        {
          name: 'Sweet',
          description: "Plain Challah with Streusel Topping"
        },
        {
          name: 'Raisin',
          description: "Raisin Challah with Streusel Topping"
        }
      ],
      "frozenChallahTypes": [
        {
          name: 'Original',
          description: "Plain Challah with No Topping"
        },
        {
          name: 'Raisin',
          description: "Raisin Challah with Streusel Topping"
        },
      ]

    }

    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.createNewAccount = this.createNewAccount.bind(this)
    this.makeSelection = this.makeSelection.bind(this)
    this.userChangingSelection = this.userChangingSelection.bind(this)
  }

  componentDidMount() {
    // Log In User If They Didn't Log Out After Last Use
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let userProfile = Object.assign({}, this.state.userProfile)
        dbRefUsers.on('value', snapshot => {
          const data = snapshot.val()
          for(let key in data) {
            const contactInformation = data[key].contactInformation
            const orderInformation = data[key].orderInformation
            if (user.uid === contactInformation.userID) {
              // contact information
              userProfile.contactInformation.userID = contactInformation.userID
              userProfile.contactInformation.firstName = contactInformation.firstName || ''
              userProfile.contactInformation.lastName = contactInformation.lastName || ''
              userProfile.contactInformation.address = contactInformation.address || ''
              userProfile.contactInformation.apartmentSuite = contactInformation.apartmentSuite || ''
              userProfile.contactInformation.city = contactInformation.city || ''
              userProfile.contactInformation.province = contactInformation.province || ''
              userProfile.contactInformation.postalCode = contactInformation.postalCode || ''
              userProfile.contactInformation.phoneNumber = contactInformation.phoneNumber || ''
              userProfile.contactInformation.email = contactInformation.email
              // order information
              userProfile.orderInformation.deliveryTime = orderInformation.deliveryTime || ''
              userProfile.orderInformation.deliveryTimeSelectionMade = orderInformation.deliveryTimeSelectionMade || false
              userProfile.orderInformation.freshChallahSelected = orderInformation.freshChallahSelected || false
              userProfile.orderInformation.frozenChallahSelected = orderInformation.frozenChallahSelected || false
              userProfile.orderInformation.freshOrFrozenSelectionMade = orderInformation.freshOrFrozenSelectionMade || false
              // Fresh Challahs
              userProfile.orderInformation.numberOfWeeklyFreshChallahs = orderInformation.numberOfWeeklyFreshChallahs || 0
              userProfile.orderInformation.numberOfWeeklyFreshChallahsSelectionMade = orderInformation.numberOfWeeklyFreshChallahsSelectionMade || false
              userProfile.orderInformation.firstFreshChallahType = orderInformation.firstFreshChallahType || ''
              userProfile.orderInformation.firstFreshChallahTypeSelectionMade = orderInformation.firstFreshChallahTypeSelectionMade || false
              userProfile.orderInformation.secondFreshChallahType = orderInformation.secondFreshChallahType || ''
              userProfile.orderInformation.secondFreshChallahTypeSelectionMade = orderInformation.secondFreshChallahTypeSelectionMade || false
              // Frozen Challahs
              userProfile.orderInformation.numberOfWeeklyFrozenChallahs = orderInformation.numberOfWeeklyFrozenChallahs || 0
              userProfile.orderInformation.numberOfWeeklyFrozenChallahsSelectionMade = orderInformation.numberOfWeeklyFrozenChallahsSelectionMade || false
              userProfile.orderInformation.firstFrozenChallahType = orderInformation.firstFrozenChallahType || ''
              userProfile.orderInformation.firstFrozenChallahTypeSelectionMade = orderInformation.firstFrozenChallahTypeSelectionMade || false
              userProfile.orderInformation.secondFrozenChallahType = orderInformation.secondFrozenChallahType || ''
              userProfile.orderInformation.secondFrozenChallahTypeSelectionMade = orderInformation.secondFrozenChallahTypeSelectionMade || false

            }
          }
        })
        console.log('user auto logged in')
        this.setState({
          userLoggedIn: true,
          userProfile: userProfile
        })
      } 
    })
    
    // Close Any Modal When Clicking Escape
    document.addEventListener("keydown", function(e) {
      if(e.which === 27) {
        document.getElementsByTagName('body')[0].removeAttribute('id', 'stop-scroll')
        const el = document.getElementsByClassName('modal-container')
        for(let i = 0; i < el.length; i++) {
          el[i].style.display = 'none'
        }
      }
    })

    // Update Delivery Times Available
    dbRefUsers.on('value', snapshot => {
      const data = snapshot.val()
      let deliverySchedule = Object.assign({}, this.state.deliverySchedule)
      for(let key in data) {
        const contactInformation = data[key].contactInformation
        const orderInformation = data[key].orderInformation
        const userDeliveryTime = data[key].orderInformation.deliveryTime
        for(let stateKey in deliverySchedule) {
          const currentUserID = this.state.userProfile.contactInformation.userID
          const previousUser = deliverySchedule[stateKey].contactInformation
          if(stateKey === userDeliveryTime) {
            deliverySchedule[stateKey] = {
              "contactInformation": contactInformation,
              "orderInformation": orderInformation
            }
          }
          // If user changes desired deliveryTime, remove the user from past time
          else if (previousUser && currentUserID === previousUser.userID && stateKey !== userDeliveryTime) {
            deliverySchedule[stateKey] = ""
          }
        }
      }
      dbRefDeliverySchedule.set(deliverySchedule)
      this.setState({
        deliverySchedule: deliverySchedule
      })
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  createNewAccount(e) {
    e.preventDefault();
    const el = e.target
    const firstName = el[0].value
    const lastName = el[1].value
    const address = el[2].value
    const apartmentSuite = el[3].value
    const city = el[4].value
    const province = el[5].value
    const postalCode = el[6].value
    const phoneNumber = el[7].value
    const email = el[8].value
    const password = el[9].value

    let userProfile = Object.assign({}, this.state.userProfile)

    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      
      console.log("new account created")
      
      const userID = user.user.uid
      
      userProfile = {
        "contactInformation": {
          "userID": userID,
          "firstName": firstName || '',
          "lastName": lastName || '',
          "address": address || '',
          "apartmentSuite": apartmentSuite || '',
          "city": city || '',
          "province": province || '',
          "postalCode": postalCode || '',
          "phoneNumber": phoneNumber || '',
          "email": email
        },
        "orderInformation": {
          // General Info
          "deliveryTime": '',
          "deliveryTimeSelectionMade": false,
          "freshChallahSelected": false,
          "frozenChallahSelected": false,
          "freshOrFrozenSelectionMade": false,
          // Fresh Challahs
          "numberOfWeeklyFreshChallahs": 0,
          "numberOfWeeklyFreshChallahsSelectionMade": false,
          "firstFreshChallahType": '',
          "firstFreshChallahTypeSelectionMade": false,
          "secondFreshChallahType": '',
          "secondFreshChallahTypeSelectionMade": false,
          // Frozen Challahs
          "numberOfWeeklyFrozenChallahs": 0,
          "numberOfWeeklyFrozenChallahsSelectionMade": false,
          "firstFrozenChallahType": '',
          "firstFrozenChallahTypeSelectionMade": false,
          "secondFrozenChallahType": '',
          "secondFrozenChallahTypeSelectionMade": false,
        }
      }

      dbRefUsers.child(`${lastName}-${firstName}-${userID}`).set(userProfile)

    })
    .then(() => {
      this.setState({
        userLoggedIn: true,
        userProfile: userProfile,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        apartmentSuite: '',
        city: '',
        province: '',
        postalCode: '',
        phoneNumber: '',
      })
      
    })
    .catch(function (error) {
      console.log(error)
      alert(`${error.code}: ${error.message}`)
    });
  }

  login(e) {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value

    let userProfile = Object.assign({}, this.state.userProfile)

    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      console.log("logged In")
      
      const currentUserID = user.user.uid

      dbRefUsers.on('value', snapshot => {
        const data = snapshot.val()
        for(let key in data) {
          const contactInformation = data[key].contactInformation
          const orderInformation = data[key].orderInformation
          if (currentUserID === contactInformation.userID) {
            userProfile.contactInformation.userID = contactInformation.userID
            userProfile.contactInformation.firstName = contactInformation.firstName || ''
            userProfile.contactInformation.lastName = contactInformation.lastName || ''
            userProfile.contactInformation.address = contactInformation.address || ''
            userProfile.contactInformation.apartmentSuite = contactInformation.apartmentSuite || ''
            userProfile.contactInformation.city = contactInformation.city || ''
            userProfile.contactInformation.province = contactInformation.province || ''
            userProfile.contactInformation.postalCode = contactInformation.postalCode || ''
            userProfile.contactInformation.phoneNumber = contactInformation.phoneNumber || ''
            userProfile.contactInformation.email = contactInformation.email
            // order information
            userProfile.orderInformation.deliveryTime = orderInformation.deliveryTime || ''
            userProfile.orderInformation.deliveryTimeSelectionMade = orderInformation.deliveryTimeSelectionMade || false
            userProfile.orderInformation.freshChallahSelected = orderInformation.freshChallahSelected || false
            userProfile.orderInformation.frozenChallahSelected = orderInformation.frozenChallahSelected || false
            userProfile.orderInformation.freshOrFrozenSelectionMade = orderInformation.freshOrFrozenSelectionMade || false
            // Fresh Challahs
            userProfile.orderInformation.numberOfWeeklyFreshChallahs = orderInformation.numberOfWeeklyFreshChallahs || 0
            userProfile.orderInformation.numberOfWeeklyFreshChallahsSelectionMade = orderInformation.numberOfWeeklyFreshChallahsSelectionMade || false
            userProfile.orderInformation.firstFreshChallahType = orderInformation.firstFreshChallahType || ''
            userProfile.orderInformation.firstFreshChallahTypeSelectionMade = orderInformation.firstFreshChallahTypeSelectionMade || false
            userProfile.orderInformation.secondFreshChallahType = orderInformation.secondFreshChallahType || ''
            userProfile.orderInformation.secondFreshChallahTypeSelectionMade = orderInformation.secondFreshChallahTypeSelectionMade || false
            // Frozen Challahs
            userProfile.orderInformation.numberOfWeeklyFrozenChallahs = orderInformation.numberOfWeeklyFrozenChallahs || 0
            userProfile.orderInformation.numberOfWeeklyFrozenChallahsSelectionMade = orderInformation.numberOfWeeklyFrozenChallahsSelectionMade || false
            userProfile.orderInformation.firstFrozenChallahType = orderInformation.firstFrozenChallahType || ''
            userProfile.orderInformation.firstFrozenChallahTypeSelectionMade = orderInformation.firstFrozenChallahTypeSelectionMade || false
            userProfile.orderInformation.secondFrozenChallahType = orderInformation.secondFrozenChallahType || ''
            userProfile.orderInformation.secondFrozenChallahTypeSelectionMade = orderInformation.secondFrozenChallahTypeSelectionMade || false
          }
        }
      })
      
    })
    .then(() => {
      this.setState({
        userLoggedIn: true,
        userProfile: userProfile,
        email: '',
        password: '',
      })
    })
    .catch(function (error) {
      console.log(error)
      alert(`${error.code}: ${error.message}`)
    });
  }

  logout() {
    firebase.auth().signOut()
    .then(() => {
      console.log('signed out')
      let userProfile = Object.assign({}, this.state.userProfile)
      this.setState({
        userLoggedIn: false,
        userProfile: userProfile,
      })
    }).catch(function (error) {
      console.log(error)
      alert(`${error.code}: ${error.message}`)
    });
  }

  closeModal(modal) {
    // Modal-container param gets passed when the user logs in
    if(modal === 'modal-container') {
      const el = document.getElementsByClassName('modal-container')
      for(let i = 0; i < el.length; i++) {
        el[i].style.display = 'none'
      }
    }
    // Data attr param gets passed when user clicks 'x' or escape
    else {
      document.querySelector(`[data-modal='${modal}']`).style.display = 'none'
    }
    // Stop scroll gets removed no matter what
    document.getElementsByTagName('body')[0].removeAttribute('id', 'stop-scroll')
  }

  showModal(modal) {
    document.querySelector(`[data-modal='${modal}']`).style.display = 'block'
    document.getElementsByTagName('body')[0].setAttribute('id', 'stop-scroll')
    window.scrollTo(0,0)
  }

  makeSelection(newInfo) {
    // ***** This section only updates the User Profile
    // ***** The deliverySchedule is updated in ComponentDidMount automatically everytime a user adds / changes a deliveryTIme (delivery schedule will only update on refresh).

    // Variables needed to update Firebase
    const userID = this.state.userProfile.contactInformation.userID
    const firstName = this.state.userProfile.contactInformation.firstName
    const lastName = this.state.userProfile.contactInformation.lastName
    const child = `${lastName}-${firstName}-${userID}`
    
    // Current User Profile Information
    let updatedProfile = Object.assign({}, this.state.userProfile)

    // Breaking up newInfo string to define key / value pairs that are being updated
    if( newInfo.includes("freshChallahSelected" ) || newInfo.includes("frozenChallahSelected")) {
      updatedProfile.orderInformation[newInfo] = true
      updatedProfile.orderInformation.freshOrFrozenSelectionMade = true
      if( newInfo.includes("freshChallahSelected")) {
        updatedProfile.orderInformation.frozenChallahSelected = false
        updatedProfile.orderInformation.numberOfWeeklyFrozenChallahs = 0
        updatedProfile.orderInformation.numberOfWeeklyFrozenChallahsSelectionMade = false
        updatedProfile.orderInformation.firstFrozenChallahType = ""
        updatedProfile.orderInformation.firstFrozenChallahTypeSelectionMade = false
        updatedProfile.orderInformation.secondFrozenChallahType = ""
        updatedProfile.orderInformation.secondFrozenChallahTypeSelectionMade = false
      }
      else if ( newInfo.includes("frozenChallahSelected")) {
        updatedProfile.orderInformation.freshChallahSelected = false
        updatedProfile.orderInformation.numberOfWeeklyFreshChallahs = 0
        updatedProfile.orderInformation.numberOfWeeklyFreshChallahsSelectionMade = false
        updatedProfile.orderInformation.firstFreshChallahType = ""
        updatedProfile.orderInformation.firstFreshChallahTypeSelectionMade = false
        updatedProfile.orderInformation.secondFreshChallahType = ""
        updatedProfile.orderInformation.secondFreshChallahTypeSelectionMade = false
      }
    }
    else {
      const split = newInfo.split("-")
      const key = split[0]
      let value = split[1]
      const keySelectionMade = `${key}SelectionMade`

      if(value === "1" || value === "2") {
        value = parseInt(value)
      }
      updatedProfile.orderInformation[key] = value
      updatedProfile.orderInformation[keySelectionMade] = true
  
      // In case preference is changed from 2 Challahs to 1, empty first Challah Selection
      if (updatedProfile.orderInformation.numberOfWeeklyChallahs === '1') {
        updatedProfile.orderInformation.secondChallahType = ''
        updatedProfile.orderInformation.secondChallahTypeSelectionMade = false
      }
  
      if(typeof value === "string" && value.includes(":")) {
        const contactInformation = this.state.userProfile.contactInformation
        const orderInformation = this.state.userProfile.orderInformation
        const userInformation = {
          "contactInformation": contactInformation,
          "orderInformation": orderInformation
        }
        dbRefDeliverySchedule.child(value).set(userInformation)
      }
    }
    
    dbRefUsers.child(child).child('orderInformation').set(updatedProfile.orderInformation)
    
    this.setState({
      userProfile: updatedProfile,
    })

  }

  userChangingSelection(itemBeingChanged) {
    let userProfile = Object.assign({}, this.state.userProfile)

    
    userProfile.orderInformation[itemBeingChanged] = false
    
    if(itemBeingChanged === "freshOrFrozenSelectionMade") {
      userProfile.orderInformation.freshChallahSelected = false
      userProfile.orderInformation.frozenChallahSelected = false
    }

    this.setState({
      userProfile: userProfile
    })
  }
  
  render() {
    // Close All Modals when user logs in
    this.state.userLoggedIn === true ? this.closeModal('modal-container') : null

    return (
      <div>
        <LoginModal 
          closeModal={this.closeModal}
          showModal={this.showModal}
          handleChange={this.handleChange}
          email={this.state.email}
          password={this.state.password}
          login={this.login}
        />
        <CreateAccountModal 
          handleChange={this.handleChange}
          email={this.state.email}
          password={this.state.password}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          address={this.state.address}
          apartmentSuite={this.state.apartmentSuite}
          city={this.state.city}
          province={this.state.province}
          postalCode={this.state.postalCode}
          phoneNumber={this.state.phoneNumber}
          closeModal={this.closeModal}
          createNewAccount={this.createNewAccount}
      />

      <Router>
        <div>
          
          <Route path="/" render={() => {
            return (
              <Header 
                userLoggedIn={this.state.userLoggedIn}
                showModal={this.showModal}
                logout={this.logout}
              />
            )
          }}/>
          
          <Route path="/" exact render={() => {
            return (
              <Home />
            )
          }}/>

          <Route path="/shop" exact render={() => {
            return (
              <Shop 
                userProfile={this.state.userProfile}
                makeSelection={this.makeSelection}
                userLoggedIn={this.state.userLoggedIn}
                userChangingSelection={this.userChangingSelection}
                deliverySchedule={this.state.deliverySchedule}
                freshChallahTypes={this.state.freshChallahTypes}
                frozenChallahTypes={this.state.frozenChallahTypes}

              />
            )
          }}/>
        </div>

      </Router>
      
      <Footer />
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
