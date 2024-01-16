// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hebron-group-ed1f3.firebaseapp.com",
  projectId: "hebron-group-ed1f3",
  storageBucket: "hebron-group-ed1f3.appspot.com",
  messagingSenderId: "194437921377",
  appId: "1:194437921377:web:b00c1a569411291f77c820",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
