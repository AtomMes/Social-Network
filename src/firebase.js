import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyANi7Tyfo4pUY3zM-HGNVZqKn1C7fxyW5Y",
  authDomain: "social-network-7fa35.firebaseapp.com",
  projectId: "social-network-7fa35",
  storageBucket: "social-network-7fa35.appspot.com",
  messagingSenderId: "271459562301",
  appId: "1:271459562301:web:2c808952f7eef0ecc18b54",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()