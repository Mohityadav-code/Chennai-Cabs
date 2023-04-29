// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQAcrx7L56lG_cyzlyKPnCrXuPSHqcnJg",
  authDomain: "chennai-cabs-cd386.firebaseapp.com",
  databaseURL: "https://chennai-cabs-cd386-default-rtdb.firebaseio.com",
  projectId: "chennai-cabs-cd386",
  storageBucket: "chennai-cabs-cd386.appspot.com",
  messagingSenderId: "613172267307",
  appId: "1:613172267307:web:0d6f0a0e12e9edb0081d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};
