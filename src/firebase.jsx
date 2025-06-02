// Import the functions you need from the SDKs you need
// Function to initialize firebase app
import { initializeApp } from "firebase/app";
// Functions to use Authentication
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// Function to use FireStore
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (connect React and Firebase)
// (copy and paste from firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyCFDjg-V5YuievUrJsRcv8bf_4RKp8rsgY",
  authDomain: "blog-91f39.firebaseapp.com",
  projectId: "blog-91f39",
  storageBucket: "blog-91f39.firebasestorage.app",
  messagingSenderId: "359819134847",
  appId: "1:359819134847:web:1039bcd66b598be47ebc4a",
  measurementId: "G-XQEZLM9V6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Create instance to use Login and Logout
const auth = getAuth(app);
// Create instance for authentication provider
const provider = new GoogleAuthProvider();
// Create instance for database
const db = getFirestore(app);

// Export instances to be able to use them in other files
export {auth, provider, db};
