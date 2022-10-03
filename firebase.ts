// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJY5zjiVEzBe4qUlvjrZ1Slq6nRusaRVA",
  authDomain: "portfolio-23b56.firebaseapp.com",
  projectId: "portfolio-23b56",
  storageBucket: "portfolio-23b56.appspot.com",
  messagingSenderId: "409861190475",
  appId: "1:409861190475:web:c719d28fed733131546ece",
  measurementId: "G-R01MJ1KY3G",
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}