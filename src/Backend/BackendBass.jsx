// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDF4XrmJm0xtaJumck90N0K6EA-QtCe4JU",
    authDomain: "ecart-2953e.firebaseapp.com",
    projectId: "ecart-2953e",
    storageBucket: "ecart-2953e.firebasestorage.app",
    messagingSenderId: "789611415367",
    appId: "1:789611415367:web:91764630c6bbe6b01d6e62"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const _Auth=getAuth(app)
export const _DB=getFirestore(app)