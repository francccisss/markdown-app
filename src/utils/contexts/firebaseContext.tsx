import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { IFirebaseContextProp } from "../types/FirebaseContextProp";
import { createContext } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDY7ZuvGug1TUvYQ9fReLsa-_265IjpGiE",
  authDomain: "vimnotes-fd.firebaseapp.com",
  projectId: "vimnotes-fd",
  storageBucket: "vimnotes-fd.appspot.com",
  messagingSenderId: "81028799193",
  appId: "1:81028799193:web:a47acaf6392220eb177cc8",
  measurementId: "G-NT5BXWDFTN",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const FirebaseContext = createContext(
  null as unknown as IFirebaseContextProp
);
