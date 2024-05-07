// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByyB6ciCTce7CQrFuFMBN3CNdsy1_V-4k",
  authDomain: "wiwako-f6f92.firebaseapp.com",
  projectId: "wiwako-f6f92",
  storageBucket: "wiwako-f6f92.appspot.com",
  messagingSenderId: "404260157253",
  appId: "1:404260157253:web:cc5de4195ab24d2fe1f02c",
  measurementId: "G-P9D6CM6Y49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const storage = getStorage(app)