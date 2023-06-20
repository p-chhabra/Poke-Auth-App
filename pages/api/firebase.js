// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAVLfXc8K-17oP9N3SJ3CIZwQbbQsfNGA",
  authDomain: "task-3001f.firebaseapp.com",
  projectId: "task-3001f",
  storageBucket: "task-3001f.appspot.com",
  messagingSenderId: "519778768565",
  appId: "1:519778768565:web:110eb3f67fb089c82d50fc",
  measurementId: "G-KEHC8N0VTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
