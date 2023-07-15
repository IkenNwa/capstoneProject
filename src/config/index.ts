// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDzZdUVnRkHMEYFUJfNfN4LsQxGs6x3Ng",
  authDomain: "chatterapp-4852a.firebaseapp.com",
  projectId: "chatterapp-4852a",
  storageBucket: "chatterapp-4852a.appspot.com",
  messagingSenderId: "611475490950",
  appId: "1:611475490950:web:8c370962e9a7a760662907",
  measurementId: "G-2KLE46XM0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


export {
  app,
  provider,
  auth,
  facebookProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  createUserWithEmailAndPassword,
  db,
  sendPasswordResetEmail,
};