// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB43oN6J9nq0a0GJzWMs5Qc14OseGFXdEM",
  authDomain: "chefs-best-recipe-client.firebaseapp.com",
  projectId: "chefs-best-recipe-client",
  storageBucket: "chefs-best-recipe-client.appspot.com",
  messagingSenderId: "58362306318",
  appId: "1:58362306318:web:764f2f4bd55068e05ec15f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;