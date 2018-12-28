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
        "numberOfWeeklyChallahs": 0,
        "firstChallahType": '',
        "secondChallahType": '',
        "deliveryTime": ''
      },
      numberOfWeeklyChallahsSelectionMade: false,
      firstChallahTypeSelectionMade: false,
      secondChallahTypeSelectionMade: false,
      deliveryTimeSelectionMade: false
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
        dbRefUsers.on('value', snapshot => {
          const data = snapshot.val()
          for(let key in data) {
            const currentUser = data[key]
            if (currentUser.userID === user.uid) {
              let userProfile = Object.assign({}, this.state.userProfile)
              userProfile.userID = currentUser.userID
              userProfile.firstName = currentUser.firstName || ''
              userProfile.lastName = currentUser.lastName || ''
              userProfile.address = currentUser.address || ''
              userProfile.apartmentSuite = currentUser.apartmentSuite || ''
              userProfile.city = currentUser.city || ''
              userProfile.province = currentUser.province || ''
              userProfile.postalCode = currentUser.postalCode || ''
              userProfile.phoneNumber = currentUser.phoneNumber || ''
              userProfile.email = currentUser.email
              userProfile.numberOfWeeklyChallahs = currentUser.numberOfWeeklyChallahs || 0
              userProfile.firstChallahType = currentUser.firstChallahType || ''
              userProfile.secondChallahType = currentUser.secondChallahType || ''
              userProfile.deliveryTime = currentUser.deliveryTime || ''
        
        this.setState({
          userLoggedIn: true,
          userProfile: userProfile
        })
            }
          }
        })
        console.log('user auto logged in')
        
        
      } 
    });
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
        "userID": userID,
        "firstName": firstName || '',
        "lastName": lastName || '',
        "address": address || '',
        "apartmentSuite": apartmentSuite || '',
        "city": city || '',
        "province": province || '',
        "postalCode": postalCode || '',
        "phoneNumber": phoneNumber || '',
        "email": email,
        "numberOfWeeklyChallahs": 0,
        "firstChallahType": '',
        "secondChallahType": '',
        "deliveryTime": ''
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

    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log("logged In")
      
      const currentUserID = res.user.uid

      dbRefUsers.on('value', snapshot => {
        const data = snapshot.val()
        for(let key in data) {
          const user = data[key]
          if (user.userID === currentUserID) {
            userProfile.userID = user.userID
            userProfile.firstName = user.firstName || ''
            userProfile.lastName = user.lastName || ''
            userProfile.address = user.address || ''
            userProfile.apartmentSuite = user.apartmentSuite || ''
            userProfile.city = user.city || ''
            userProfile.province = user.province || ''
            userProfile.postalCode = user.postalCode || ''
            userProfile.phoneNumber = user.phoneNumber || ''
            userProfile.email = user.email
            userProfile.numberOfWeeklyChallahs = user.numberOfWeeklyChallahs || 0
            userProfile.firstChallahType = user.firstChallahType || ''  
            userProfile.secondChallahType = user.secondChallahType || ''
            userProfile.deliveryTime = user.deliveryTime || ''
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
      this.setState({
        userLoggedIn: false,
        userProfile: {},
        numberOfWeeklyChallahsSelectionMade: false,
        firstChallahTypeSelectionMade: false,
        secondChallahTypeSelectionMade: false,
        deliveryTimeSelectionMade: false
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
    const userID = this.state.userProfile.userID
    const firstName = this.state.userProfile.firstName
    const lastName = this.state.userProfile.lastName
    const child = `${lastName}-${firstName}-${userID}`
    let updatedProfile = Object.assign({}, this.state.userProfile)
    
    let numberOfWeeklyChallahs = this.state.userProfile.numberOfWeeklyChallahs
    let firstChallahType = this.state.userProfile.firstChallahType
    let secondChallahType = this.state.userProfile.secondChallahType

    if (challahInfo.split(':')[0] === 'numberOfWeeklyChallahs') {
      numberOfWeeklyChallahs = challahInfo.split(':')[1]
     
      updatedProfile.numberOfWeeklyChallahs = numberOfWeeklyChallahs
      
    }
    else if (challahInfo.split(':')[0] === 'firstChallahType') {
      firstChallahType = challahInfo.split(':')[1]

      updatedProfile.firstChallahType = firstChallahType

    }
    else if (challahInfo.split(':')[0] === 'secondChallahType') {
      secondChallahType = challahInfo.split(':')[1]

      updatedProfile.secondChallahType = secondChallahType

    }
    
    const selectedKey = `${challahInfo.split(":")[0]}SelectionMade`

    dbRefUsers.child(child).child('numberOfWeeklyChallahs').set(numberOfWeeklyChallahs)
    dbRefUsers.child(child).child('firstChallahType').set(firstChallahType)
    dbRefUsers.child(child).child('secondChallahType').set(secondChallahType)


    .then(() => {
      this.setState({
        userProfile: updatedProfile,
        [selectedKey]: true,
      })
    })
    
  }

  userChangingSelection(itemBeingChanged) {
    this.setState({
      [itemBeingChanged]: false
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
                numberOfWeeklyChallahsSelectionMade={this.state.numberOfWeeklyChallahsSelectionMade}
                firstChallahTypeSelectionMade={this.state.firstChallahTypeSelectionMade}
                secondChallahTypeSelectionMade={this.state.secondChallahTypeSelectionMade}
                deliveryTimeSelectionMade={this.state.deliveryTimeSelectionMade}
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
