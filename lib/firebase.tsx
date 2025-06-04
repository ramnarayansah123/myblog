// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkEUL0T22MJ8xHlHioO0p_03coh-sJT2M",
  authDomain: "myblog-fcf27.firebaseapp.com",
  projectId: "myblog-fcf27",
  storageBucket: "myblog-fcf27.firebasestorage.app",
  messagingSenderId: "22844806290",
  appId: "1:22844806290:web:0acde6288574c5e5c0c24b",
  measurementId: "G-D85852YWFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();