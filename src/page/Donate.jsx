import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import './Donate.css';
import { addDoc, collection } from "firebase/firestore";
import { database } from "../Firebase";

const Donate = () => {
  const demoRef = useRef(null);
  const [foodDes, setFoodDes] = useState('');
  const [foodAmount, setFoodAmount] = useState('');
  const [address, setAddress] = useState('');
  const [foodEntries, setFoodEntries] = useState([{ type: '', description: '', amount: '' }]);

  const handleFoodTypeChange = (index, value) => {
    const newFoodEntries = [...foodEntries];
    newFoodEntries[index].type = value;
    setFoodEntries(newFoodEntries);
  };

  const handleDescriptionChange = (index, value) => {
    const newFoodEntries = [...foodEntries];
    newFoodEntries[index].description = value;
    setFoodEntries(newFoodEntries);
  };

  const handleAmountChange = (index, value) => {
    const newFoodEntries = [...foodEntries];
    newFoodEntries[index].amount = value;
    setFoodEntries(newFoodEntries);
  };

  const handleAddField = () => {
    setFoodEntries([...foodEntries, { type: '', description: '', amount: '' }]);
  };

  const handleDeleteField = (index) => {
    const newFoodEntries = [...foodEntries];
    newFoodEntries.splice(index, 1);
    setFoodEntries(newFoodEntries);
};

  const value = collection(database, 'donation');

  const resetForm = () => {
    setFoodEntries([{ type: '', description: '', amount: '' }]);
    setAddress('');
};

  const onSubmit = async () => {

    const entriesArray = foodEntries.map((foodEntry) => ({
      FoodType: foodEntry.type,
      FoodDescription: foodEntry.description,
      FoodAmount: foodEntry.amount,
  }));

  try {
      await addDoc(value, {
          Entries: entriesArray,
          Address: address,
      });

      console.log('Document added successfully!');
      resetForm();
      alert('Your Form is submitted !! Thank you.');
      
  } catch (error) {
      console.error('Error adding document: ', error);
  }
    // for (const foodEntry of foodEntries) {
    //   // Ensure required fields are present before adding to the collection
    //   if (foodEntry.type && foodEntry.description && foodEntry.amount) {
    //     try {
    //       // Assuming yourCollectionRef is your Firestore collection reference
    //       await addDoc(value, {
    //         FoodType: foodEntry.type,
    //         FoodDescription: foodEntry.description,
    //         FoodAmount: foodEntry.amount,
    //         Address: address, // Assuming address is a constant value for all entries
    //       });
    //       console.log('Document added successfully!');
    //     } catch (error) {
    //       console.error('Error adding document: ', error);
    //     }
    //   }
    // }
    // await addDoc(value,{FoodDescription:foodDes,FoodAmount:foodAmount,Address:address});
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


  return (
    <>
      <Navbar />
      <div className="donation-front-page">
        <div id="donation">
          <div className="container">
            <h1>Love Food Not Waste</h1>
            {foodEntries.map((food, index) => (
              <div key={index}>
                <label htmlFor={`food-type-${index}`}>Food Type:</label>
                <select
                  id={`food-type-${index}`}
                  value={food.type}
                  onChange={(e) => handleFoodTypeChange(index, e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="solid">Solid</option>
                  <option value="liquid">Liquid</option>
                </select>

                <label htmlFor={`description-${index}`}>Description:</label>
                <input
                  type="text"
                  id={`description-${index}`}
                  value={food.description}
                  placeholder="Food Description"
                  onChange={(e) => handleDescriptionChange(index, e.target.value)}
                />

                <label htmlFor={`amount-${index}`}>Amount:</label>
                {food.type === 'solid' ? (
                  <input
                    type="number"
                    id={`amount-${index}`}
                    value={food.amount}
                    placeholder="Amount (in kg)"
                    onChange={(e) => handleAmountChange(index, e.target.value)}
                  />
                ) : (
                  <input
                    type="number"
                    id={`amount-${index}`}
                    value={food.amount}
                    placeholder="Amount (in liters)"
                    onChange={(e) => handleAmountChange(index, e.target.value)}
                  />
                )}

                <button className= "delete-button" onClick={() => handleDeleteField(index)}>Delete</button>
              </div>
            ))}


            <button onClick={handleAddField}>Add More</button>
            &nbsp;
            <button onClick={getLocation}>Get Location</button>
            <p ref={demoRef} id="demo"></p>
            <label htmlFor="address"></label>
            <input type="text" id="address" name="address" placeholder="Enter your Address" onChange={(e) => { setAddress(e.target.value) }} />
            <select name="credential" id="credential" >
              <option value="" >Choose the Document to upload</option>
              <option value="aadhaar-card">Aadhaar Card</option>
              <option value="pan-card">PAN Card</option>
              <option value="driving-liscense">Driving License</option>
            </select>
            {/* <input type="file" accept=".png,.jpeg,.jpg,.pdf" onchange={validateImage()} id="image"/>  */}
            <div style={{display:"flex",justifyContent : "space-around", width:"max-width"}}>
            <button onClick={onSubmit}>Submit</button>
            <button className ="delete-button" onClick={resetForm}>Reset</button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;