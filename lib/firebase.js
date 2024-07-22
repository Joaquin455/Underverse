import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAX6T8nnOG3hjuNhZjTKBrC8zm4-ch8b2U",
    authDomain: "underverse-mi-primera-web.firebaseapp.com",
    projectId: "underverse-mi-primera-web",
    storageBucket: "underverse-mi-primera-web.appspot.com",
    messagingSenderId: "767344501084",
    appId: "1:767344501084:web:f9d66e6d13baca9ab72199"
  };

  const googleProvider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, GoogleAuthProvider, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut };
