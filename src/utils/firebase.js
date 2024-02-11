// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeGMfz3QKfULUmLzsjhh4Hd9Jc4dUFZjs",
  authDomain: "netflixgpt-2de34.firebaseapp.com",
  projectId: "netflixgpt-2de34",
  storageBucket: "netflixgpt-2de34.appspot.com",
  messagingSenderId: "715174987751",
  appId: "1:715174987751:web:44eb247c57c0ae31569f42",
  measurementId: "G-E48FXPREZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();