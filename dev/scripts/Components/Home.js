import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <section className="section-one">
                <div className="section-wrapper">
                    <div className="section-text-container">
                        <img src="../img/homepage/official-banner.jpg" alt="Header Image"/>
                    </div>
                </div>
            </section>
            <section className="section-two wrapper">
                <div className="left">
                    <h1>Baked with<br></br>
                        Quality
                <br/>
                        Ingredients</h1>
                </div>
                <div className="right">
                    <p>Breadbox Bakery is a local artisan bakery. Each of our handmade Challahs are crafted with love and all natural ingredients. We make each Challah in small batches to ensure the quality of your bread is never compromised. Each batch of Challah dough is made with: Flour, Water, Canola Oil, Eggs, Yeast, Salt, and Vanilla. Each Challah is handmade and unique in its own way. Therefore, no two Challahs are the same.</p>
                </div>
            </section>
            <section className="section-three wrapper">
                <div className="challah-box"><img src="../img/homepage/Shop_Sesame.jpg" alt="Challah"/></div>
                <div className="mobile-hide challah-box"><img src="../img/homepage/Shop_Sweet.jpg" alt="Challah"/></div>
                <div className="mobile-hide challah-box"><img src="../img/homepage/Shop_Raisin.jpg" alt="Challah"/></div>
            </section>
            <section className="section-four wrapper">
                <div className="left">
                    <h1>Delivered to
              <br/>
                        your home
            </h1>
                </div>
                <div className="right">
                    <p>Whether you want freshly baked Challah delivered to your door every Friday for four weeks, or one Friday, Breadbox Bakery has your covered with our One Week Delivery Service, and our Four Week Delivery Service. We want to fundamentally change your Shabbat experience by introducing all natural and handmade Challah into your home. Each Challah is carefully crafted, freshly baked, and delivered to you so that you can have an easy and delicious Shabbat dinner.</p>
                </div>
            </section>
            {/* <div className="mobile-show"><img src="../img/homepage/ShopPage_Sweet.jpg" alt="Challah"/></div> */}
            <section className="section-five wrapper">
                <h1>"5 Words: Warm. Golden. Doughy. Fluffy. Mmmmmmmm ...."</h1>
                <p className="small-text">- Orry Mevorach</p>
            </section>
            <section className="section-six wrapper">
                <div className="left">
                    <h1>The
                    <br/>
                        Breadwinner
                    </h1>
                    <div className="image-container">
                        <img src="../img/homepage/emily.jpg" alt="Emily"/>
                    </div>
                </div>
                <div className="right">
                    <p>Emily Turkenicz has set out to change peoples Shabbat dinner experiences by enhancing a crucial element to every Shabbat dinner, the Challah. Emily has always loved food and naturally took a liking to cooking and baking. Baking Challah became a weekly ritual to welcome the Shabbat and conclude her week. Her homemade Challah brought newfound warmth to the family’s Shabbat dinner. She mastered her recipe and technique, and with every dinner she attended, there was a request for her homemade artisan Challah. Friends and Family sought out her special recipe, and it was then that Emily realized that Toronto lacks an easily accessible freshly baked Challah. It is Emily’s goal to bring this warmth to people’s homes in Toronto. Her One Week Delivery Service, and Four Week Delivery Service will allow families to experience homemade Challah to enrich their Friday night dinners.</p>
                </div>
            </section>
            {/* <div className="mobile-show"><img src="../img/homepage/ShopPage_Raisin.jpg" alt="Challah"/></div> */}
        </div>
    )
}

export default Home;