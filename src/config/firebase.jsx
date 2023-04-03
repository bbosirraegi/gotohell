import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA22OV1KrFZLWnQmJ5FGuGO-oBgYdGtOnM",
  authDomain: "gotohell-94c39.firebaseapp.com",
  projectId: "gotohell-94c39",
  storageBucket: "gotohell-94c39.appspot.com",
  messagingSenderId: "462850607524",
  appId: "1:462850607524:web:c8f2269c0fdf6e1a5b9931",
  measurementId: "G-BF67P0BP0H",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
