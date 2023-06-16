import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjHa3CA-uq1AYIw936Y1XyoYpbhvArm-0",
  authDomain: "miniblog-7bf2b.firebaseapp.com",
  projectId: "miniblog-7bf2b",
  storageBucket: "miniblog-7bf2b.appspot.com",
  messagingSenderId: "600313743709",
  appId: "1:600313743709:web:27e60952614437a49440b4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};