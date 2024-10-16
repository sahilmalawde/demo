import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1E7TUT1Ege-cz4or8eTxzioG7rArj2kA",
  authDomain: "ping-657cf.firebaseapp.com",
  projectId: "ping-657cf",
  storageBucket: "ping-657cf.appspot.com",
  messagingSenderId: "837798429354",
  appId: "1:837798429354:web:02aed10d3d0eb722c506d3",
  measurementId: "G-GNBECX2ZSC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
