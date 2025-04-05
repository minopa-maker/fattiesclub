// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import getFirestore to initialize Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlmS6PbOc_flmQ6iu9NNhhgXPIXV5I7VY",
  authDomain: "fatties-club.firebaseapp.com",
  projectId: "fatties-club",
  storageBucket: "fatties-club.firebasestorage.app",
  messagingSenderId: "941484167515",
  appId: "1:941484167515:web:cac5cb2340c7872e4e4a7e",
  measurementId: "G-NNJP2JCJ4V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // This initializes Firestore

// Initialize Analytics (if needed)
const analytics = getAnalytics(app);

// Export Firestore instance (db)
export { db };
