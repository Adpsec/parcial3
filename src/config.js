import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMMZ1rYySA1fEh385nIXcatvuQ3Lx_XjA",
  authDomain: "instagramart17.firebaseapp.com",
  projectId: "instagramart17",
  storageBucket: "instagramart17.appspot.com",
  messagingSenderId: "744620068492",
  appId: "1:744620068492:web:5972a462a5d34e486fb5a9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};