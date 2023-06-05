import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDy3--OkoSGNm1YgcG-qGR0p0KycWNQrCo",
    authDomain: "musicosapp.firebaseapp.com",
    projectId: "musicosapp",
    storageBucket: "musicosapp.appspot.com",  
    messagingSenderId: "298831854633", 
    appId: "1:298831854633:web:b1234b11aa002daed07038", 
    measurementId: "G-FHQF69ZBNT"
  
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
    storage, firestore as default
} 