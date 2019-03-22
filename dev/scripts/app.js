import React from 'react';
import ReactDOM from 'react-dom';
import CreateAccountModal from './Components/CreateAccountModal';
import LoginModal from './Components/LoginModal';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Shop from './Components/Shop';
import AccountInfo from './AccountInfo';
import Checkout from './Checkout/Checkout';
import ContactForm from './Components/ContactForm';

  // Initialize Firebase
const config = {
  apiKey: "AIzaSyBDDltEW4zQ85iA8FrxhzJTg0Yb90DU4DM",
  authDomain: "breadboxbakery-885e9.firebaseapp.com",
  databaseURL: "https://breadboxbakery-885e9.firebaseio.com",
  projectId: "breadboxbakery-885e9",
  storageBucket: "breadboxbakery-885e9.appspot.com",
  messagingSenderId: "1073324700462"
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
      isEditing: true,
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
          // Conditions for rendering
          "formComplete": false,
          "totalCost": "",
          "weeklyOrMonthly": "",
          "weeklyOrMonthlySelectionMade": false,
          "orderPlaced": false
        },
        "deliveryAddress": {
          "firstNameDelivery": '',
          "lastNameDelivery": '',
          "addressDelivery": '',
          "apartmentSuiteDelivery": '',
          "cityDelivery": '',
          "provinceDelivery": '',
          "postalCodeDelivery": '',
          "phoneNumberDelivery": '',
        },

      },
      "deliverySchedule": {
        "12:00PM": '',
        "12:30PM": '',
        "1:00PM": '',
        "1:30PM": '',
        "2:00PM": '',
        "2:30PM": '',
        "3:00PM": '',
        "3:30PM": ''
      },
    }

    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.createNewAccount = this.createNewAccount.bind(this)
    this.userChangingSelection = this.userChangingSelection.bind(this)
    this.isEditing = this.isEditing.bind(this)
    this.selectFreshOrFrozen = this.selectFreshOrFrozen.bind(this)
    this.selectFirstFreshChallahType = this.selectFirstFreshChallahType.bind(this)
    this.selectSecondFreshChallahType = this.selectSecondFreshChallahType.bind(this)
    this.selectFirstFrozenChallahType = this.selectFirstFrozenChallahType.bind(this)
    this.selectSecondFrozenChallahType = this.selectSecondFrozenChallahType.bind(this)
    this.selectDeliveryTime = this.selectDeliveryTime.bind(this)
    this.selectNumberOfWeeklyFreshChallahs = this.selectNumberOfWeeklyFreshChallahs.bind(this)
    this.selectNumberOfWeeklyFrozenChallahs = this.selectNumberOfWeeklyFrozenChallahs.bind(this)
    this.selectWeeklyOrMonthly = this.selectWeeklyOrMonthly.bind(this)
    this.confirmOrder = this.confirmOrder.bind(this)
    this.formComplete = this.formComplete.bind(this)
    this.selectAlternateDeliveryAddress = this.selectAlternateDeliveryAddress.bind(this)
    this.changeContactInformation = this.changeContactInformation.bind(this)
    this.resetForm = this.resetForm.bind(this)

  }

  componentDidMount() {
    // Log In User If They Didn't Log Out After Last Use
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dbRefUsers.on('value', snapshot => {
          const data = snapshot.val()
          let currentUser;
          for(let key in data) {
            if (user.uid === data[key].contactInformation.userID) {
              const isEditing = data[key].orderInformation.formComplete ? false : true
              console.log('user auto logged in')
              this.setState({
                userLoggedIn: true,
                userProfile: data[key],
                isEditing: isEditing
              })
            }
          }
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

    // Update Delivery Times Schedule
    // dbRefDeliverySchedule.on('value', snapshot => {
    //   const data = snapshot.val()
    //   let deliverySchedule = this.state.deliverySchedule
    //   for(let key in data) {
    //     if(data[key].contactInformation) {
    //       deliverySchedule[key] = data[key]
    //     }
    //   }
    //   this.setState({
    //     deliverySchedule: deliverySchedule
    //   })
    // })
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

    const userProfile = this.state.userProfile
    let contactInformation, deliveryAddress;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      
      const userID = user.user.uid
      
      contactInformation = {
        // "contactInformation": {
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
        }
        deliveryAddress = {
          "firstNameDelivery": firstName || '',
          "lastNameDelivery": lastName || '',
          "addressDelivery": address || '',
          "apartmentSuiteDelivery": apartmentSuite || '',
          "cityDelivery": city || '',
          "provinceDelivery": province || '',
          "postalCodeDelivery": postalCode || '',
          "phoneNumberDelivery": phoneNumber || '',
        }

        userProfile.contactInformation = contactInformation
        userProfile.deliveryAddress = deliveryAddress

      
      
      // Push user to firebase
      dbRefUsers.child(`${lastName}-${firstName}-${userID}`).set(userProfile)

    })
    .then(() => {
      console.log("new account created")
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

  login() {
    const email = this.state.email
    const password = this.state.password

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
      
      const currentUserID = user.user.uid

      dbRefUsers.on('value', snapshot => {
        const data = snapshot.val()
        for(let key in data) {
          if (currentUserID === data[key].contactInformation.userID) {
            console.log('logged in')
            this.setState({
              userLoggedIn: true,
              userProfile: data[key],
              email: '',
              password: '',
            })   
          }
        }
      })
    })
    .catch(error => {
      console.log(error)
      alert(error.message)
    });
  }

  logout() {
    firebase.auth().signOut()
    .then(() => {
      console.log('signed out')
      let userProfile = this.state.userProfile
      this.setState({
        userLoggedIn: false,
        userProfile: userProfile
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
    if(modal !== "incomplete-order-modal") {
      window.scrollTo(0,0)
    }
  }

  selectFreshOrFrozen(challah) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.freshOrFrozenSelectionMade = true

    if( challah === "Fresh") {
      userProfile.orderInformation.freshChallahSelected = true
      userProfile.orderInformation.frozenChallahSelected = false
      userProfile.orderInformation.numberOfWeeklyFrozenChallahs = 0
      userProfile.orderInformation.numberOfWeeklyFrozenChallahsSelectionMade = false
      userProfile.orderInformation.firstFrozenChallahType = ""
      userProfile.orderInformation.firstFrozenChallahTypeSelectionMade = false
      userProfile.orderInformation.secondFrozenChallahType = ""
      userProfile.orderInformation.secondFrozenChallahTypeSelectionMade = false
    }
    else if ( challah === "Frozen") {
      userProfile.orderInformation.frozenChallahSelected = true
      userProfile.orderInformation.freshChallahSelected = false
      userProfile.orderInformation.numberOfWeeklyFreshChallahs = 0
      userProfile.orderInformation.numberOfWeeklyFreshChallahsSelectionMade = false
      userProfile.orderInformation.firstFreshChallahType = ""
      userProfile.orderInformation.firstFreshChallahTypeSelectionMade = false
      userProfile.orderInformation.secondFreshChallahType = ""
      userProfile.orderInformation.secondFreshChallahTypeSelectionMade = false
    }

    this.setState({
      userProfile: userProfile
    })
    
    setTimeout(() => {
      this.formComplete()
    },500)  

  }

  selectNumberOfWeeklyFreshChallahs(number) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.numberOfWeeklyFreshChallahs = parseInt(number)
    userProfile.orderInformation.numberOfWeeklyFreshChallahsSelectionMade = true
    if (parseInt(number) === 1) {
      userProfile.orderInformation.secondFreshChallahType = ''
      userProfile.orderInformation.secondFreshChallahTypeSelectionMade = false
      userProfile.orderInformation.totalCost = "40"
    }
    else if (parseInt(number) === 2) {
      userProfile.orderInformation.totalCost = "72"
    }
    this.setState({
      userProfile: userProfile
    })
    
    setTimeout(() => {
      this.formComplete()
    },500)  
     
  }

  selectNumberOfWeeklyFrozenChallahs(number) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.numberOfWeeklyFrozenChallahs = parseInt(number)
    userProfile.orderInformation.numberOfWeeklyFrozenChallahsSelectionMade = true
    if (parseInt(number) === 1) {
      userProfile.orderInformation.secondFrozenChallahType = ''
      userProfile.orderInformation.secondFrozenChallahTypeSelectionMade = false
      userProfile.orderInformation.totalCost = "20"
    }
    else if(parseInt(number) === 2) {
      userProfile.orderInformation.totalCost = "36"
    }
    this.setState({
      userProfile: userProfile
    })
    
    setTimeout(() => {
      this.formComplete()
    },500)  
  }

  selectFirstFreshChallahType(challahType) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.firstFreshChallahType = challahType
    userProfile.orderInformation.firstFreshChallahTypeSelectionMade = true
    this.setState({
      userProfile: userProfile
    }),() => {
      this.formComplete()
    }
  }

  selectSecondFreshChallahType(challahType) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.secondFreshChallahType = challahType
    userProfile.orderInformation.secondFreshChallahTypeSelectionMade = true
    this.setState({
      userProfile: userProfile
    })
    
    setTimeout(() => {
      this.formComplete()
    },500)  
  }

  selectFirstFrozenChallahType(challahType) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.firstFrozenChallahType = challahType
    userProfile.orderInformation.firstFrozenChallahTypeSelectionMade = true
    this.setState({
      userProfile: userProfile
    })
    
    setTimeout(() => {
      this.formComplete()
    },500)  
  }

  selectSecondFrozenChallahType(challahType) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.secondFrozenChallahType = challahType
    userProfile.orderInformation.secondFrozenChallahTypeSelectionMade = true
    this.setState({
      userProfile: userProfile
    })
    
    setTimeout(() => {
      this.formComplete()
    },500)  
  }

  selectDeliveryTime(time) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.deliveryTime = time
    userProfile.orderInformation.deliveryTimeSelectionMade = true

    this.setState({
      userProfile: userProfile
    })
    
    setTimeout(() => {
      this.formComplete()
    },500)  
  }

  selectWeeklyOrMonthly(selection) {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.weeklyOrMonthly = selection
    userProfile.orderInformation.weeklyOrMonthlySelectionMade = true

    this.setState({
      userProfile: userProfile
    })
    
    setTimeout(() => {
      this.formComplete()
    },500)  
  }

  formComplete() {
    const { deliveryTimeSelectionMade, 
      freshOrFrozenSelectionMade, 
      numberOfWeeklyFreshChallahsSelectionMade, 
      firstFreshChallahTypeSelectionMade, 
      secondFreshChallahTypeSelectionMade, 
      numberOfWeeklyFrozenChallahsSelectionMade, 
      firstFrozenChallahTypeSelectionMade, 
      secondFrozenChallahTypeSelectionMade, 
      weeklyOrMonthly,
      weeklyOrMonthlySelectionMade,
      numberOfWeeklyFreshChallahs,
      numberOfWeeklyFrozenChallahs,
    } = this.state.userProfile.orderInformation

    const numberOfChallahsSelected = numberOfWeeklyFreshChallahsSelectionMade || numberOfWeeklyFrozenChallahsSelectionMade ? true : false,
          firstChallahSelected = firstFreshChallahTypeSelectionMade || firstFrozenChallahTypeSelectionMade ? true : false,
          secondChallahSelected = (parseInt(numberOfWeeklyFreshChallahsSelectionMade) === 2 && !secondFreshChallahTypeSelectionMade) || (parseInt(numberOfWeeklyFrozenChallahsSelectionMade) === 2 && !secondFrozenChallahTypeSelectionMade) ? false : true,
          weekly = weeklyOrMonthly === "Weekly" ? true : false,
          monthly = weeklyOrMonthly === "Monthly" ? true : false,
          orderTotal = 
            weekly && numberOfWeeklyFreshChallahs === 1 ? 15 
            : weekly && numberOfWeeklyFreshChallahs === 2 ? 25 
            : weekly && numberOfWeeklyFrozenChallahs === 1 ? 10 
            : weekly && numberOfWeeklyFrozenChallahs === 2 ? 18 
            : monthly && numberOfWeeklyFreshChallahs === 1 ? 40
            : monthly && numberOfWeeklyFreshChallahs === 2 ? 72
            : monthly && numberOfWeeklyFrozenChallahs === 1 ? 20 
            : monthly && numberOfWeeklyFrozenChallahs === 2 ? 36
            : console.error("Total not being calculated correctly")

    if(deliveryTimeSelectionMade && freshOrFrozenSelectionMade && numberOfChallahsSelected && firstChallahSelected && secondChallahSelected && weeklyOrMonthlySelectionMade) {
      console.log("Form Complete")
      const userProfile = this.state.userProfile
      userProfile.orderInformation.formComplete = true
      userProfile.orderInformation.totalCost = orderTotal

      this.setState({
        userProfile: userProfile,
      })
    }
  }
        
  confirmOrder() {
    this.setState({
      isEditing: false
    })
    const { userProfile: { contactInformation }, deliverySchedule } = this.state
    
    const lastName = contactInformation.lastName,
          firstName = contactInformation.firstName,
          userId = contactInformation.userID,
          fbId = `${lastName}-${firstName}-${userId}`

    // Save order to users profile in firebase
    dbRefUsers.child(fbId).child('orderInformation').set(this.state.userProfile.orderInformation)
      // Update delivery Schedule in FB and state
      .then(() => {
        dbRefUsers.on('value', snapshot => {
          const data = snapshot.val();
          for(let key in data) {
            const contactInformation = data[key].contactInformation,
                  orderInformation = data[key].orderInformation,
                  deliveryAddress = data[key].deliveryAddress,
                  userDeliveryTime = data[key].orderInformation.deliveryTime

            for(let stateKey in deliverySchedule) {
              const currentUserID = this.state.userProfile.contactInformation.userID
              const previousUser = deliverySchedule[stateKey].contactInformation
              if(stateKey === userDeliveryTime) {
                deliverySchedule[stateKey] = {
                  "contactInformation": contactInformation,
                  "orderInformation": orderInformation,
                  "deliveryAddress": deliveryAddress
                }
              }
              // If user changes desired deliveryTime, remove the user from past time
              else if (previousUser && currentUserID === previousUser.userID && stateKey !== userDeliveryTime) {
                deliverySchedule[stateKey] = ""
              }
            }
          }
          dbRefDeliverySchedule.set(deliverySchedule)
          // this.setState({
          //   deliverySchedule: deliverySchedule
          // })
        })
      })
  }
    

  userChangingSelection(itemBeingChanged) {
    let userProfile = Object.assign({}, this.state.userProfile)
    
    userProfile.orderInformation[itemBeingChanged] = false
    userProfile.orderInformation.formComplete = false
    
    if(itemBeingChanged === "freshOrFrozenSelectionMade") {
      userProfile.orderInformation.freshChallahSelected = false
      userProfile.orderInformation.frozenChallahSelected = false
    }

    this.setState({
      userProfile: userProfile
    })

  }

  isEditing() {
    this.setState({
      isEditing: true
    })
  }

  selectAlternateDeliveryAddress(firstName, lastName, address, apartmentSuite, city, province, postalCode, phoneNumber) {
    const userProfile = this.state.userProfile
    let deliveryAddress = {};
      deliveryAddress.firstNameDelivery = firstName
      deliveryAddress.lastNameDelivery = lastName
      deliveryAddress.addressDelivery = address
      deliveryAddress.apartmentSuiteDelivery = apartmentSuite
      deliveryAddress.cityDelivery = city
      deliveryAddress.provinceDelivery = province
      deliveryAddress.postalCodeDelivery = postalCode
      deliveryAddress.phoneNumberDelivery = phoneNumber
    
    userProfile.deliveryAddress = deliveryAddress

    this.setState({
      userProfile: userProfile
    })

    const contactLastName = this.state.userProfile.contactInformation.lastName,
          contactFirstName = this.state.userProfile.contactInformation.firstName,
          contactUserID = this.state.userProfile.contactInformation.userID,
          fbId = `${contactLastName}-${contactFirstName}-${contactUserID}`,
          timeSlot = this.state.userProfile.orderInformation.deliveryTime

    // Save new address to users profile in firebase
    dbRefUsers.child(fbId).child('deliveryAddress').set(deliveryAddress)
    // Save new address to delivery schedule for Emily 
    dbRefDeliverySchedule.child(timeSlot).child('deliveryAddress').set(deliveryAddress)
  }

  changeContactInformation(firstName, lastName, address, apartmentSuite, city, province, postalCode, phoneNumber, email, fbId) {
    const userProfile = this.state.userProfile,
      userId = this.state.userProfile.contactInformation.userID,
      contactInformation = {
        "userID": userId,
        "firstName": firstName,
        "lastName": lastName,
        "address": address,
        "apartmentSuite": apartmentSuite,
        "city": city,
        "province": province,
        "postalCode": postalCode,
        "phoneNumber": phoneNumber,
        "email": email, 
      },
      deliveryAddress = {
        "firstNameDelivery": firstName,
        "lastNameDelivery": lastName,
        "addressDelivery": address,
        "apartmentSuiteDelivery": apartmentSuite,
        "cityDelivery": city,
        "provinceDelivery": province,
        "postalCodeDelivery": postalCode,
        "phoneNumberDelivery": phoneNumber
      }

      userProfile.contactInformation = contactInformation
      userProfile.deliveryAddress = deliveryAddress

      dbRefUsers.child(fbId).child("contactInformation").set(contactInformation)
      dbRefUsers.child(fbId).child("deliveryAddress").set(contactInformation)

      this.setState({
        userProfile: userProfile
      })

  }

  resetForm() {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.deliveryTime =  ''
    userProfile.orderInformation.deliveryTimeSelectionMade =  false
    userProfile.orderInformation.freshChallahSelected =  false
    userProfile.orderInformation.frozenChallahSelected =  false
    userProfile.orderInformation.freshOrFrozenSelectionMade =  false
    // Fresh Challahs
    userProfile.orderInformation.numberOfWeeklyFreshChallahs =  0
    userProfile.orderInformation.numberOfWeeklyFreshChallahsSelectionMade =  false
    userProfile.orderInformation.firstFreshChallahType =  ''
    userProfile.orderInformation.firstFreshChallahTypeSelectionMade =  false
    userProfile.orderInformation.secondFreshChallahType =  ''
    userProfile.orderInformation.secondFreshChallahTypeSelectionMade =  false
    // Frozen Challahs
    userProfile.orderInformation.numberOfWeeklyFrozenChallahs =  0
    userProfile.orderInformation.numberOfWeeklyFrozenChallahsSelectionMade =  false
    userProfile.orderInformation.firstFrozenChallahType =  ''
    userProfile.orderInformation.firstFrozenChallahTypeSelectionMade =  false
    userProfile.orderInformation.secondFrozenChallahType =  ''
    userProfile.orderInformation.secondFrozenChallahTypeSelectionMade =  false
    // Conditions for rendering
    userProfile.orderInformation.formComplete =  false
    userProfile.orderInformation.totalCost =  ""
    userProfile.orderInformation.weeklyOrMonthly =  ""
    userProfile.orderInformation.weeklyOrMonthlySelectionMade =  false
    this.setState({
      userProfile: userProfile
    })
  }

  orderComplete() {
    const userProfile = this.state.userProfile
    userProfile.orderInformation.orderPlaced = true
    
    this.setState({
      userProfile: userProfile
    })

    const lastName = contactInformation.lastName,
          firstName = contactInformation.firstName,
          userId = contactInformation.userID,
          fbId = `${lastName}-${firstName}-${userId}`

    // Save order to users profile in firebase
    dbRefUsers.child(fbId).child('orderInformation').child('orderPlaced').set(true)
  }

  render() {
    // Close All Modals when user logs in
    this.state.userLoggedIn === true ? this.closeModal('modal-container') : null

    const formComplete = this.state.userProfile.orderInformation.formComplete,
          isEditing = this.state.isEditing,
          userLoggedIn = this.state.userLoggedIn

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
              <div>
                { !formComplete && isEditing || formComplete && isEditing || !userLoggedIn ?
                <Shop 
                  userProfile={this.state.userProfile}
                  makeSelection={this.makeSelection}
                  userLoggedIn={this.state.userLoggedIn}
                  userChangingSelection={this.userChangingSelection}
                  deliverySchedule={this.state.deliverySchedule}
                  closeModal={this.closeModal}
                  showModal={this.showModal}
                  isEditing={this.state.isEditing}
                  selectFreshOrFrozen={this.selectFreshOrFrozen}
                  selectNumberOfWeeklyFreshChallahs={this.selectNumberOfWeeklyFreshChallahs}
                  selectNumberOfWeeklyFrozenChallahs={this.selectNumberOfWeeklyFrozenChallahs}
                  selectFirstFreshChallahType={this.selectFirstFreshChallahType}
                  selectSecondFreshChallahType={this.selectSecondFreshChallahType}
                  selectFirstFrozenChallahType={this.selectFirstFrozenChallahType}
                  selectSecondFrozenChallahType={this.selectSecondFrozenChallahType}
                  selectDeliveryTime={this.selectDeliveryTime}
                  selectWeeklyOrMonthly={this.selectWeeklyOrMonthly}
                  confirmOrder={this.confirmOrder}
                  formComplete={this.formComplete}
                  resetForm={this.resetForm}
                /> 
                : userLoggedIn && formComplete && !isEditing || userLoggedIn && !formComplete && isEditing ?
                <Checkout 
                  userProfile={this.state.userProfile}
                  isEditing={this.isEditing}
                  selectAlternateDeliveryAddress={this.selectAlternateDeliveryAddress}
                />
                : null }
              </div>
            )
          }}/>

          <Route path="/contact" exact render={() => {
            return (
              <ContactForm />
            )
          }} />

          <Route path="/myAccount" exact render={() => {
            return (
                userLoggedIn ?
                <AccountInfo 
                  userProfile={this.state.userProfile}
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
                  isEditing={this.isEditing}
                  changeContactInformation={this.changeContactInformation}
                />
                : window.location = "/"
            )
          }} />

      <Route path="/" render={() => {
        return (
          <Footer />
          )
      }} />
        </div>
      
      </Router>
      
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
