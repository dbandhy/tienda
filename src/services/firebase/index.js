
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuracion de firebase


const firebaseConfig = {
  apiKey: "AIzaSyBmMxXVauM5Y0yZXsB_qFuY3U8p0Onx740",
  authDomain: "hihoney-77472.firebaseapp.com",
  projectId: "hihoney-77472",
  storageBucket: "hihoney-77472.appspot.com",
  messagingSenderId: "306432390163",
  appId: "1:306432390163:web:75d0d96ea79f35e85e3be6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)