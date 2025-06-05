import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY2ErSpo_XO7JGf0U0HP-uzg9NMhCvypw",
  authDomain: "ctrack-b6662.firebaseapp.com",
  projectId: "ctrack-b6662",
  storageBucket: "ctrack-b6662.firebasestorage.app",
  messagingSenderId: "958369267575",
  appId: "1:958369267575:web:d7a4a97fdf8a64a3916b72",
  measurementId: "G-KCCBRW1DGH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, doc, getDoc, setDoc };