// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw-WXOQ-F9jLVDfQs4PZIh5qYB_p39Btk",
  authDomain: "sarvangini-org.firebaseapp.com",
  projectId: "sarvangini-org",
  storageBucket: "sarvangini-org.firebasestorage.app",
  messagingSenderId: "621460829249",
  appId: "1:621460829249:web:a1391ac9a4e548f6c9c2c0",
  measurementId: "G-DX57K12S45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
