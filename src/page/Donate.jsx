import React,{useRef, useState} from "react";
import Navbar from "../components/navbar";
import './Donate.css';
import { addDoc, collection } from "firebase/firestore";
import { database } from "../Firebase";

const Donate = () =>{
    const demoRef = useRef(null);
    const [foodDes,setFoodDes] = useState('');
    const [foodAmount,setFoodAmount] = useState('');
    const [address,setAddress] = useState('');

    const value = collection(database,'donation');

    const onSubmit = async () =>{
        await addDoc(value,{FoodDescription:foodDes,FoodAmount:foodAmount,Address:address});
    }

  const getLocation = () => {
    console.log("daba diya");
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      // Update using useRef
      if (demoRef.current) {
        demoRef.current.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
  };

  function showPosition(position) {
    // Update using useRef
    if (demoRef.current) {
      demoRef.current.innerHTML =
        "" + position.coords.latitude + " " + position.coords.longitude;
    }
  }
        

    return(
        <>
        <Navbar/>
        <div className="donation-front-page">
            <div id="donation">
                <div className="container">
                    <h1>Love Food Not Waste</h1>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Food Description" onChange={ (e)=>{setFoodDes(e.target.value)}}/>
                    <label htmlFor="phone no"></label>
                    <input type="number" id="phone no" name="phone no" placeholder="amount (in kgs. apprx)" onChange={ (e)=>{setFoodAmount(e.target.value)}}/>
                    
                    <button onClick={getLocation}>Get Location</button>
                    <p ref={demoRef} id="demo"></p>
                    <label htmlFor="address"></label>
                    <input type="text" id="address" name="address" placeholder="Enter your Address" onChange={ (e)=>{setAddress(e.target.value)}}/>
                    <select name="credential" id="credential" >
                        <option value="" >Choose the Document to upload</option>
                        <option value="aadhaar-card">Aadhaar Card</option>
                        <option value="pan-card">PAN Card</option>
                        <option value="driving-liscense">Driving License</option>
                    </select>
                    {/* <input type="file" accept=".png,.jpeg,.jpg,.pdf" onchange={validateImage()} id="image"/>  */}
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Donate;