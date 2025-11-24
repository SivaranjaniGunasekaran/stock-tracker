// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrtFxS6Ph97tb8Nk5kEgrHavaL0rNu9f0",
  authDomain: "stock-tracker-b8ef4.firebaseapp.com",
  projectId: "stock-tracker-b8ef4",
  storageBucket: "stock-tracker-b8ef4.firebasestorage.app",
  messagingSenderId: "86509667288",
  appId: "1:86509667288:web:0ad8d7551a1e93bd39e8ad",
  measurementId: "G-5HLGSTJZ9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);