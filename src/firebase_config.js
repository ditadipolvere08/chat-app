import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config/firebase_config.json";


const app = initializeApp(firebaseConfig);

const firebase_auth = getAuth(app);
firebase_auth.useDeviceLanguage();

const firebase_firestore = getFirestore(app);

export const auth = firebase_auth;
export const firestore = firebase_firestore;
