
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPiSw0ECatGQJbLE1yrfdhkht-Ur3mBWI",
  authDomain: "smit-final-hackathon-81d78.firebaseapp.com",
  projectId: "smit-final-hackathon-81d78",
  storageBucket: "smit-final-hackathon-81d78.appspot.com",
  messagingSenderId: "1032336267493",
  appId: "1:1032336267493:web:f1b58cabdefa7613e91c0c",
  measurementId: "G-WZW2CFFWM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);