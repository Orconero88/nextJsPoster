// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9csCSnge79VYTrzBpM2xr3qoBuXTQcSI",
  authDomain: "nextposter-3e8f6.firebaseapp.com",
  projectId: "nextposter-3e8f6",
  storageBucket: "nextposter-3e8f6.appspot.com",
  messagingSenderId: "898467613789",
  appId: "1:898467613789:web:085b4084c4baa331a291b4",
  measurementId: "G-4GCDZF9EGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app, firebaseConfig);
export const db = getFirestore(app);
