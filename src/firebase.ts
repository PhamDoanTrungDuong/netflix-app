// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD50XlTfzzrLpmlUK3_LL6rW6W16wANNEE",
      authDomain: "netflix-app-56990.firebaseapp.com",
      projectId: "netflix-app-56990",
      storageBucket: "netflix-app-56990.appspot.com",
      messagingSenderId: "550225115735",
      appId: "1:550225115735:web:bea2c6f4f09604d5f88112",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
