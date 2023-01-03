// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQlW6Wq5aGX4CRvJNVCOR_fG9SLKdvN-0",
  authDomain: "my-music-app-3.firebaseapp.com",
  projectId: "my-music-app-3",
  storageBucket: "my-music-app-3.appspot.com",
  messagingSenderId: "28717468761",
  appId: "1:28717468761:web:fab2c896aafc2d2a2df548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);