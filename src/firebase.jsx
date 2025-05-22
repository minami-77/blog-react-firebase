// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// インスタンス化
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};
