import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAMgWsuRYqLMZ0uOLH3xMoUgg0VvvTzXTA",
  authDomain: "gothic-envelope-300108.firebaseapp.com",
  databaseURL: "https://gothic-envelope-300108-default-rtdb.firebaseio.com",
  projectId: "gothic-envelope-300108",
  storageBucket: "gothic-envelope-300108.appspot.com",
  messagingSenderId: "595302584402",
  appId: "1:595302584402:web:c90cab9b7e2d816b540f8b",
  measurementId: "G-137WVL4BGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const analytics = getAnalytics(app);

export { db, auth };
export default app;