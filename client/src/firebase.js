// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b4251.firebaseapp.com",
  projectId: "mern-estate-b4251",
  storageBucket: "mern-estate-b4251.appspot.com",
  messagingSenderId: "624495089268",
  appId: "1:624495089268:web:cd405dc128da7d7889a321"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);