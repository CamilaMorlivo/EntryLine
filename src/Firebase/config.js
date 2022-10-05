import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCNK3tbtM5qMstzejwQG61prZly-wP6vcI",
  authDomain: "entryline-1a7a6.firebaseapp.com",
  projectId: "entryline-1a7a6",
  storageBucket: "entryline-1a7a6.appspot.com",
  messagingSenderId: "797794656243",
  appId: "1:797794656243:web:5ca61365df93dac6c4fc86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)