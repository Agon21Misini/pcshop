// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHMn4gGNnCwMCSLLdG1N1FhUBmRgFpglA",
  authDomain: "pc-online-shop.firebaseapp.com",
  projectId: "pc-online-shop",
  storageBucket: "pc-online-shop.appspot.com",
  messagingSenderId: "349481694462",
  appId: "1:349481694462:web:fb5dff1dda4af9f38261af",
  measurementId: "G-4JL7N7FHBH",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
// eslint-disable-next-line
const auth = getAuth(app);

export default fireDB;
