import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy3--OkoSGNm1YgcG-qGR0p0KycWNQrCo",
  authDomain: "musicosapp.firebaseapp.com",
  projectId: "musicosapp",
  storageBucket: "musicosapp.appspot.com",  
  messagingSenderId: "298831854633", 
  appId: "1:298831854633:web:b1234b11aa002daed07038", 
  measurementId: "G-FHQF69ZBNT"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};