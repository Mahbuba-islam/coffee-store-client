// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUur75KQ-HD5RlyaKvnpoJY36kr5w5I3I",
  authDomain: "coffee-store-3beb6.firebaseapp.com",
  projectId: "coffee-store-3beb6",
  storageBucket: "coffee-store-3beb6.firebasestorage.app",
  messagingSenderId: "485648331579",
  appId: "1:485648331579:web:d2e1347e74019742b5fd1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
