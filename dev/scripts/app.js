import React from 'react';
import ReactDOM from 'react-dom';
import CreateAccountModal from './CreateAccountModal';
import LoginModal from './LoginModal';
import Header from './Header';

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
      phoneNumber: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.createNewAccount = this.createNewAccount.bind(this)
  }

  componentDidMount() {
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
    const email = e.target[8].value
    const password = e.target[9].value

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log("new account created")
      this.setState({
        userLoggedIn: true
      })
    })
    .catch(function (error) {
      alert(`${error.code}: ${error.message}`)
    });
  }

  login(e) {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("logged In")
      this.setState({
        userLoggedIn: true
      })
    }).catch(function (error) {
      alert(`${error.code}: ${error.message}`)
    });
  }

  logout() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).then(function() {
      console.log('signed out')
      this.setState({
        userLoggedIn: false
      })
    }).catch(function (error) {
      // An error happened.
    });
  }

  closeModal(modal) {
    document.getElementById(modal).style.display = 'none'
    document.getElementsByTagName('body')[0].removeAttribute('id', 'stop-scroll')
  }

  showModal(modal) {
    document.getElementById(modal).style.display = 'block'
    document.getElementsByTagName('body')[0].setAttribute('id', 'stop-scroll')
  }

  
  
  render() {
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

      <Header 
        userLoggedIn={this.state.userLoggedIn}
        showModal={this.showModal}
        logout={this.state.logout}
      />

        <section className="section-one">
            <div className="section-wrapper">
              <div className="section-text-container">
                <p className="section-text">Shop Now</p>
              </div>
            </div>
        </section>
        <section className="section-two">
          <div className="left">
            <h1>Baked with<br></br>
            Quality
            <br></br>
            Ingredients</h1>
          </div>
          <div className="right">
            <p>Our bakery maintains the integrity of bread and bakes each loaf with love. Breadbox Bakery is a local and artisanal bakery. We proude ourselves on all natural ingredients and handmade products. Each loaf of challah is made with quality flour, yeast, organic eggs, and natural vanilla. We make ach loaf in small batches to ensure the quality of your bread is not compromised.</p>
          </div>
        </section>
        <section className="section-three">
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
        </section>
        <section className="section-four">
          <div className="left">
            <h1>Delivered to
              <br></br>
              your home
            </h1>
          </div>
          <div className="right">
            <p>Our bakery maintains the integrity of bread and bakes each loaf with love. Breadbox Bakery is a local and artisanal bakery. We proude ourselves on all natural ingredients and handmade products. Each loaf of challah is made with quality flour, yeast, organic eggs, and natural vanilla. We make ach loaf in small batches to ensure the quality of your bread is not compromised.</p>
          </div>
        </section>
        <section className="section-one">
          <div className="section-text-container">
            <p className="section-text">Shop Now</p>
          </div>
          <img src="../../img/" alt="" />
        </section>
        <section className="section-five">
          <h1>"The best challah this world has ever seen."</h1>
          <p className="small-text">- Orry Mevorach</p>
        </section>
        <section className="section-one">
          <div className="section-text-container">
            <p className="section-text">Shop Now</p>
          </div>
          <img src="../../img/" alt="" />
        </section>
        <section className="section-six">
          <div className="left">
            <h1>Challah
              <br></br>
              pioneer
            </h1>
          </div>
          <div className="right">
            <p>Emily Turk is the greatest challah whisperer that Bathurst and Glencair has ever seen. And that is saying a lot, because this neighborhood has seen millions, no, billions of self procalimed challah whisperes since the 1700s when wood burning ovens became a thing.</p>
          </div>
        </section>
        <footer>
          <nav className="footer-nav">
            <ul>
              <li>FAQ</li>
              <li>Privacy</li>
              <li>Terms of Use</li>
              <li>Contact</li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
