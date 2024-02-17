import React from "react";
import Navbar from "../components/navbar";
import './Credit.css';
import iron from '../assets/images/iron.jpg';
import noise_watch from '../assets/images/noise_watch.jpg';
import philips_mixer_grinder from '../assets/images/philips_mixer_grinder.jpg';
import refrigerator from '../assets/images/refrigerator.jpg';
import mi_powerbank from '../assets/images/mi_powerbank.jpg';
import oneplus_earphone from '../assets/images/oneplus_earphone.jpg';
import oneplus_earbuds from '../assets/images/oneplus_earbuds.png';
import sony_tv from '../assets/images/sony_tv.jpeg';
import lg_washingmachine from '../assets/images/lg_washingmachine.jpg';
import { NavLink } from "react-router-dom";




const Credit = () =>{


 return(
    <>
    <Navbar/>
    <div className="body">
    
    <div class="back-button">
        <NavLink to="/profile">&#x2190;<p>Go back to Profile</p></NavLink>
    </div>
  <div class="heading">
    <h1>Gift Redemption</h1>
  </div>
  
  <div id="pointsDisplay">
    <p>Your Points: <span id="points">4000</span></p>
  </div>
  
  <div id="giftsContainer">
    <div class="gift" data-points="50">
      <img src={noise_watch}/>
      <h2>Noise Colorfir Pro 3</h2>
      <p>Points Required: 2000</p>
      <button onclick="redeemGift(2000)">Redeem</button>
    </div>
    <div class="gift" data-points="100">
      <img src={philips_mixer_grinder}/>
      <h2>Philips HL 7756/00 Mixer Grinder</h2>
      <p>Points Required: 4000</p>
      <button onclick="redeemGift(4000)">Redeem</button>
    </div>
    <div class="gift" data-points="200">
      <img src={refrigerator}/>
      <h2>Samsung 2 Drawer Refrigerator </h2>
      <p>Points Required: 10000</p>
      <button onclick="redeemGift(10000)">Redeem</button>
    </div>
  </div>
  <div id="giftsContainer">
    <div class="gift" data-points="50">
      <img src={mi_powerbank}/>
      <h2>Mi Power Bank 3i 20000mAh </h2>
      <p>Points Required: 1600</p>
      <button onclick="redeemGift(1600)">Redeem</button>
    </div>
    <div class="gift" data-points="100">
      <img src={oneplus_earphone}/>
      <h2>OnePlus Bullets Wireless Z2</h2>
      <p>Points Required: 1200</p>
      <button onclick="redeemGift(1200)">Redeem</button>
    </div>
    <div class="gift" data-points="200">
      <img src={oneplus_earbuds}/>
      <h2>OnePlus Nord Buds CE Blue</h2>
      <p>Points Required: 1000</p>
      <button onclick="redeemGift(1000)">Redeem</button>
    </div>
  </div>

  <div id="giftsContainer">
    <div class="gift" data-points="50">
      <img src={iron}/>
      <h2>Philips PowerLife Steam Iron</h2>
      <p>Points Required: 7000</p>
      <button onclick="redeemGift(7000)">Redeem</button>
    </div>
    <div class="gift" data-points="100">
      <img src={sony_tv}/>
      <h2>Sony Bravia 4k Android LED TV</h2>
      <p>Points Required: 15000</p>
      <button onclick="redeemGift(15000)">Redeem</button>
    </div>
    <div class="gift" data-points="200">
      <img src={lg_washingmachine}/>
      <h2>LG Intros Washing Machine</h2>
      <p>Points Required: 13500</p>
      <button onclick="redeemGift(13500)">Redeem</button>
    </div>
  </div>
  </div>
    </>
 )   
}

export default Credit;