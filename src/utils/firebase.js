// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzsuVDPuGwTnNxVBMmHc4Ke5vQb--Dv6I",
  authDomain: "netflix-gpt-nextgen.firebaseapp.com",
  projectId: "netflix-gpt-nextgen",
  storageBucket: "netflix-gpt-nextgen.appspot.com",
  messagingSenderId: "618924050589",
  appId: "1:618924050589:web:6a4e8f906175c6c3e12c74",
  measurementId: "G-FNG7NNXS61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
