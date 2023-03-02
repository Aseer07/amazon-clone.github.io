import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"}
            price={690}
            rating={5}
            image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}
          />
          <Product
            id="49538094"
            title={"Learning How to Fly: Life Lessons for the Youth"}
            price={239.0}
            rating={5}
            image={"https://m.media-amazon.com/images/I/61xPDmYV7SL.jpg"}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title={"Apple iPhone 14 Pro Max 128GB Deep Purple"}
            price={`1,29,990`}
            rating={3}
            image={"https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"}
          />
          <Product
            id="23445930"
            title={"Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm"}
            price={`89,990`}
            rating={5}
            image={"https://m.media-amazon.com/images/I/81lghf1fdzL._SL1500_.jpg"}
          />
          <Product
            id="3254354345"
            title={"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"}
            price={`75,990`}
            rating={4}
            image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title={`LC34J791SamsungWTWXXL 34" Wide ScreenThunderbolt 3 Curved Monitor 3440 x 1440`}
            price={`77,490`}
            rating={4}
            image={"https://m.media-amazon.com/images/I/81oADRhNq2L._SL1500_.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
