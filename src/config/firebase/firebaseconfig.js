// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCOhq35fJfAbcLmJVVYqadfc465T0i07E",
  authDomain: "fir-authentication-59111.firebaseapp.com",
  projectId: "fir-authentication-59111",
  storageBucket: "fir-authentication-59111.appspot.com",
  messagingSenderId: "17429003366",
  appId: "1:17429003366:web:3147c3d68d9de464e201a7",
  measurementId: "G-Y026MJE8CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);