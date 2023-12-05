// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "sipsavvy-baa21.firebaseapp.com",
  projectId: "sipsavvy-baa21",
  storageBucket: "sipsavvy-baa21.appspot.com",
  messagingSenderId: "485580600705",
  appId: "1:485580600705:web:13e59c1124284519d96480"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
