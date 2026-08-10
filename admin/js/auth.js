// ==========================================
// CM ADMIN - AUTHENTICATION
// ==========================================

import {
  auth,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "./firebase.js";


// ==========================================
// GOOGLE LOGIN
// ==========================================

export async function loginWithGoogle() {

  try {

    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    const user = result.user;

    console.log("Logged in:", user.email);

    return user;

  } catch (error) {

    console.error(
      "Google Login Error:",
      error
    );

    throw error;

  }

}


// ==========================================
// LOGOUT
// ==========================================

export async function logout() {

  try {

    await signOut(auth);

    window.location.href = "index.html";

  } catch (error) {

    console.error(
      "Logout Error:",
      error
    );

  }

}


// ==========================================
// CHECK AUTH STATE
// ==========================================

export function watchAuth(callback) {

  return onAuthStateChanged(
    auth,
    callback
  );

}