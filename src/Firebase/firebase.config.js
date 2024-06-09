// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVNMft3OtY8cY6ppXpsvotkwVeRRyQUaE",
  authDomain: "recap-react-firebase-auth.firebaseapp.com",
  projectId: "recap-react-firebase-auth",
  storageBucket: "recap-react-firebase-auth.appspot.com",
  messagingSenderId: "493423071038",
  appId: "1:493423071038:web:cd67c4f989162933a5e66f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;