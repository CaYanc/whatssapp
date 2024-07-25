// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY8ewvG67-OUEtZIiOPfv3C88HOFMpflM",
  authDomain: "whatsapp-c68a5.firebaseapp.com",
  projectId: "whatsapp-c68a5",
  storageBucket: "whatsapp-c68a5.appspot.com",
  messagingSenderId: "1097355075065",
  appId: "1:1097355075065:web:a5b104fb47a6c0b0947128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


