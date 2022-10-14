
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjrv9Us60yu17HE9fFzg5OJiqYKSREHw8",
  authDomain: "house-marketplace-app-d000d.firebaseapp.com",
  projectId: "house-marketplace-app-d000d",
  storageBucket: "house-marketplace-app-d000d.appspot.com",
  messagingSenderId: "592613947111",
  appId: "1:592613947111:web:b59906868e501ed6a6d442"
};

export const db = getFirestore()