// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbQ6rizLJh5OlEWyelXjhUqbwIppViSC4",
  authDomain: "app-authentication-241ba.firebaseapp.com",
  projectId: "app-authentication-241ba",
  storageBucket: "app-authentication-241ba.firebasestorage.app",
  messagingSenderId: "707654527722",
  appId: "1:707654527722:web:93d84168840c34b2238593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
