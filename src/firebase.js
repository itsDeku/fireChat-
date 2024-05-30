// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ9DsdCGLcOdEP8F4gsqwXpx7x2KN53sA",
  authDomain: "fire-chat-fb187.firebaseapp.com",
  projectId: "fire-chat-fb187",
  storageBucket: "fire-chat-fb187.appspot.com",
  messagingSenderId: "482235040033",
  appId: "1:482235040033:web:8fc709d7304c5e7d963e60",
  measurementId: "G-XWX6YEYBX8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
