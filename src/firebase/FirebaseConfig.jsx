// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyBTi26ccrg7-3RzYPui378GNJYNthS_DAI",
  authDomain: "myecommce-55fa8.firebaseapp.com",
  projectId: "myecommce-55fa8",
  storageBucket: "myecommce-55fa8.appspot.com",
  messagingSenderId: "272037554031",
  appId: "1:272037554031:web:d4cb323b9d161ea2336a9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }