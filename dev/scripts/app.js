import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="wrapper">
            <div className="header-logo">
              <img src="../../img/logo.png" alt="BreadBox Bakery Logo"/>
            </div>
            <nav className="header-nav">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div> {/* Closing Wrapper */}
        </header>
        <section className="section-one">
            <div className="section-text-container">
              <p className="section-text">Shop Now</p>
            </div>
            <img src="../../img/" alt=""/>
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
