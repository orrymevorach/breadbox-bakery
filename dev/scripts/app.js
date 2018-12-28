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

const dbRefUsers = firebase.database().ref('users')



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
          "numberOfWeeklyChallahs": 0,
          "firstChallahType": '',
          "secondChallahType": '',
          "deliveryTime": '',
          "numberOfWeeklyChallahsSelectionMade": false,
          "firstChallahTypeSelectionMade": false,
          "secondChallahTypeSelectionMade": false,
          "deliveryTimeSelectionMade": false
        }
      },
    }

    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.createNewAccount = this.createNewAccount.bind(this)
    this.subscriptionInfo = this.subscriptionInfo.bind(this)
    this.userChangingSelection = this.userChangingSelection.bind(this)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let userProfile = Object.assign({}, this.state.userProfile)
        dbRefUsers.on('value', snapshot => {
          const data = snapshot.val()
          for(let key in data) {
            const contactInformation = data[key].contactInformation
            const orderInformation = data[key].orderInformation
            if (user.uid === contactInformation.userID) {
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
              userProfile.orderInformation.numberOfWeeklyChallahs = orderInformation.numberOfWeeklyChallahs || 0
              userProfile.orderInformation.firstChallahType = orderInformation.firstChallahType || ''
              userProfile.orderInformation.secondChallahType = orderInformation.secondChallahType || ''
              userProfile.orderInformation.deliveryTime = orderInformation.deliveryTime || ''
              userProfile.orderInformation.numberOfWeeklyChallahsSelectionMade = orderInformation.numberOfWeeklyChallahsSelectionMade || false
              userProfile.orderInformation.firstChallahTypeSelectionMade = orderInformation.firstChallahTypeSelectionMade || false
              userProfile.orderInformation.secondChallahTypeSelectionMade = orderInformation.secondChallahTypeSelectionMade || false
              userProfile.orderInformation.deliveryTimeSelectionMade = orderInformation.deliveryTimeSelectionMade || false
        
            }
          }
            
        })
        
        // setTimeout(() => {
          console.log('user auto logged in')
          this.setState({
            userLoggedIn: true,
            userProfile: userProfile
          })
        // }, 1000);    
      } 
    })
    
    
    // Close Any Modal When Clicking Escape
    document.addEventListener("keydown", function(e) {
      if(e.which === 27) {
        const el = document.getElementsByClassName('modal-container')
        for(let i = 0; i < el.length; i++) {
          el[i].style.display = 'none'
        }
      }
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
          "numberOfWeeklyChallahs": 0,
          "firstChallahType": '',
          "secondChallahType": '',
          "deliveryTime": '',
          "numberOfWeeklyChallahsSelectionMade": false,
          "firstChallahTypeSelectionMade": false,
          "secondChallahTypeSelectionMade": false,
          "deliveryTimeSelectionMade": false
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
          if (user.userID === currentUserID) {
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
            userProfile.orderInformation.numberOfWeeklyChallahs = orderInformation.numberOfWeeklyChallahs || 0
            userProfile.orderInformation.firstChallahType = orderInformation.firstChallahType || ''
            userProfile.orderInformation.secondChallahType = orderInformation.secondChallahType || ''
            userProfile.orderInformation.deliveryTime = orderInformation.deliveryTime || ''
            userProfile.orderInformation.numberOfWeeklyChallahsSelectionMade = orderInformation.numberOfWeeklyChallahsSelectionMade || false
            userProfile.orderInformation.firstChallahTypeSelectionMade = orderInformation.firstChallahTypeSelectionMade || false
            userProfile.orderInformation.secondChallahTypeSelectionMade = orderInformation.secondChallahTypeSelectionMade || false
            userProfile.orderInformation.deliveryTimeSelectionMade = orderInformation.deliveryTimeSelectionMade || false
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
  }

  subscriptionInfo(challahInfo) {
    const userID = this.state.userProfile.contactInformation.userID
    const firstName = this.state.userProfile.contactInformation.firstName
    const lastName = this.state.userProfile.contactInformation.lastName
    const child = `${lastName}-${firstName}-${userID}`
    let updatedProfile = Object.assign({}, this.state.userProfile)

    let numberOfWeeklyChallahs = this.state.userProfile.orderInformation.numberOfWeeklyChallahs
    let firstChallahType = this.state.userProfile.orderInformation.firstChallahType
    let secondChallahType = this.state.userProfile.orderInformation.secondChallahType

    if (challahInfo.split(':')[0] === 'numberOfWeeklyChallahs') {
      numberOfWeeklyChallahs = challahInfo.split(':')[1]

      // In case the user changes their selection from two challahs to once challah, make sure no selection is made for Second Challah
      if(numberOfWeeklyChallahs === '1') {
        updatedProfile.orderInformation.secondChallahType = ''
        updatedProfile.orderInformation.secondChallahTypeSelectionMade = false
      }

      updatedProfile.orderInformation.numberOfWeeklyChallahs = numberOfWeeklyChallahs
      updatedProfile.orderInformation.numberOfWeeklyChallahsSelectionMade = true
      dbRefUsers.child(child).child('orderInformation').set(updatedProfile.orderInformation)
    }

    else if (challahInfo.split(':')[0] === 'firstChallahType') {
      firstChallahType = challahInfo.split(':')[1]

      updatedProfile.orderInformation.firstChallahType = firstChallahType
      updatedProfile.orderInformation.firstChallahTypeSelectionMade = true
      dbRefUsers.child(child).child('orderInformation').set(updatedProfile.orderInformation)
    }

    else if (challahInfo.split(':')[0] === 'secondChallahType') {
      secondChallahType = challahInfo.split(':')[1]

      updatedProfile.orderInformation.secondChallahType = secondChallahType
      updatedProfile.orderInformation.secondChallahTypeSelectionMade = true
      dbRefUsers.child(child).child('orderInformation').set(updatedProfile.orderInformation)
    }
    
    this.setState({
      userProfile: updatedProfile,
    })
  }

  userChangingSelection(itemBeingChanged) {
    let userProfile = Object.assign({}, this.state.userProfile)
    
    userProfile.orderInformation[itemBeingChanged] = false
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
                subscriptionInfo={this.subscriptionInfo}
                userLoggedIn={this.state.userLoggedIn}
                userChangingSelection={this.userChangingSelection}
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
