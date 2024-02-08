// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth } from "firebase/auth"
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0oow9Tb9YcjhdLE5wBkBp1YmFU9TloiI",
  authDomain: "food-donation-app-52d8d.firebaseapp.com",
  projectId: "food-donation-app-52d8d",
  storageBucket: "food-donation-app-52d8d.appspot.com",
  messagingSenderId: "308565056942",
  appId: "1:308565056942:web:e7e0c96bf910f4fd9dfc3f",
  measurementId: "G-0GBMCX3X29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);

export default app;