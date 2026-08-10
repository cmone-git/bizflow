// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, onSnapshot, setDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const MY_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCXyKSTlmlzkYnH2LW408cVVWV1CPvlfBo",
  authDomain: "cmfilings-6a37c.firebaseapp.com",
  projectId: "cmfilings-6a37c",
  storageBucket: "cmfilings-6a37c.firebasestorage.app",
  messagingSenderId: "138705123778",
  appId: "1:138705123778:web:9561bff9f0f5d89bb6fe5b"
};

const app = initializeApp(MY_FIREBASE_CONFIG);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const FB = {
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, 
    GoogleAuthProvider, signOut, onAuthStateChanged, collection, doc, addDoc, 
    updateDoc, deleteDoc, onSnapshot, setDoc, getDocs, query, where, appId: MY_FIREBASE_CONFIG.appId
};
