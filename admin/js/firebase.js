// ==========================================
// CM ADMIN - FIREBASE CONFIGURATION
// ==========================================

import { initializeApp } from
  "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from
  "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import {
  getFirestore
} from
  "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";


// ==========================================
// YOUR FIREBASE CONFIG
// ==========================================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();


// ==========================================
// EXPORT
// ==========================================

export {
  app,
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
};