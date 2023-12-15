// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5mttDB04qrKar0XaxRNPutsA633EmQy8",
  authDomain: "diariodeclasse-c05f6.firebaseapp.com",
  projectId: "diariodeclasse-c05f6",
  storageBucket: "diariodeclasse-c05f6.appspot.com",
  messagingSenderId: "316853284876",
  appId: "1:316853284876:web:fc09f728d038254895fe29",
  measurementId: "G-WMNTXR5KML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, getDoc };