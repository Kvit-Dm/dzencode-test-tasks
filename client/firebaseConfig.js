// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO9lpdhQBGnxTT1RYRbeS7ocP864jfTJc",
    authDomain: "dzencode-95701.firebaseapp.com",
    projectId: "dzencode-95701",
    storageBucket: "dzencode-95701.firebasestorage.app",
    messagingSenderId: "43030622689",
    appId: "1:43030622689:web:99a54e04d80f40e2cf62a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// testing user
// public@demo.com
// demo1234