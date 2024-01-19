
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDchrnBCdMu5TbPQ90qGmL9F2y1M4G-Suo",
  authDomain: "miniblog-6764e.firebaseapp.com",
  projectId: "miniblog-6764e",
  storageBucket: "miniblog-6764e.appspot.com",
  messagingSenderId: "180083047289",
  appId: "1:180083047289:web:6920c3bca9f874caa48da8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export {db}