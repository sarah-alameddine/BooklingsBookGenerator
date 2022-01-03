// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCiG8lXttILms0fhmCSCVv7lkEGW5dkGU",
    authDomain: "booklingsbookgenerator.firebaseapp.com",
    projectId: "booklingsbookgenerator",
    storageBucket: "booklingsbookgenerator.appspot.com",
    messagingSenderId: "896733435453",
    appId: "1:896733435453:web:fcdb551bf273294ab83c54",
    measurementId: "G-EB4BPCS45M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize reference to the data base in firebase
export const db = getFirestore(app)