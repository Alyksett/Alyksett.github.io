// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmNWchdhLsKrR_tMOHJw-k3EsboL6sk0I",
  authDomain: "crewasis-fedcf.firebaseapp.com",
  projectId: "crewasis-fedcf",
  storageBucket: "crewasis-fedcf.appspot.com",
  messagingSenderId: "1001043137685",
  appId: "1:1001043137685:web:1a48d4204970c1b244b79c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;