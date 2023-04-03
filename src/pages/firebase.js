// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgYmmx0-PIOq2kaDo_XvsRcbv2D4Mb4n0",
  authDomain: "ck-meeting-app.firebaseapp.com",
  projectId: "ck-meeting-app",
  storageBucket: "ck-meeting-app.appspot.com",
  messagingSenderId: "137838334246",
  appId: "1:137838334246:web:98e7090fce1937ceb6f1e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
