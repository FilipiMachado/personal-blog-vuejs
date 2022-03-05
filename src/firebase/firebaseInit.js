// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "personal-blog-1b16f.firebaseapp.com",
  projectId: "personal-blog-1b16f",
  storageBucket: "personal-blog-1b16f.appspot.com",
  messagingSenderId: "238055556364",
  appId: "1:238055556364:web:4ffd0d8aeae0ee31993529",
  measurementId: "G-VBHMHXGJE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);