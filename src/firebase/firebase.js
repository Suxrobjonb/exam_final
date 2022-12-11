import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
const firebaseConfig = {
      apiKey: "AIzaSyDniHOuqOFxeUdcPyDGJqR-4C1w0B9vahc",
      authDomain: "exam-59438.firebaseapp.com",
      projectId: "exam-59438",
      storageBucket: "exam-59438.appspot.com",
      messagingSenderId: "283470892413",
      appId: "1:283470892413:web:5984ef7caa680283c4d014",
      measurementId: "G-CF5PTFHK45"
};
const app = initializeApp(firebaseConfig);
// Paswords
const auth = getAuth();
export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// login
export function logout() {
    return signOut(auth);
}

// Users
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
      }, [])
    return currentUser;
}