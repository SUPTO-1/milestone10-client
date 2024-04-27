// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqoMIMMvtM7POifwS8eHZh6szUMBx317g",
  authDomain: "coffee-store-10c5b.firebaseapp.com",
  projectId: "coffee-store-10c5b",
  storageBucket: "coffee-store-10c5b.appspot.com",
  messagingSenderId: "213984418106",
  appId: "1:213984418106:web:98685825e686421a7fd803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;