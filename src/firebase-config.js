// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCO7JoE6NVXP0mJZQQJmXGPCdsm3cV5YQ",
  authDomain: "pazer-b3282.firebaseapp.com",
  projectId: "pazer-b3282",
  storageBucket: "pazer-b3282.appspot.com",
  messagingSenderId: "69148336731",
  appId: "1:69148336731:web:2ac2ccc52bbf7fa6ad957e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);