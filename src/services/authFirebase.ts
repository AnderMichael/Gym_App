// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOjpyzVt7Dghpp5rjW8Ep07K4D2h_cMN0",
  authDomain: "gymapp-6ba34.firebaseapp.com",
  projectId: "gymapp-6ba34",
  storageBucket: "gymapp-6ba34.appspot.com",
  messagingSenderId: "1013395909694",
  appId: "1:1013395909694:web:8cdac6796f7f4c8c51356f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);