import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB48_za_w4988W30oizuo-kT8ji9Dm0SU4",
  authDomain: "reactfirstproject-36ddd.firebaseapp.com",
  databaseURL: "https://reactfirstproject-36ddd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactfirstproject-36ddd",
  storageBucket: "reactfirstproject-36ddd.firebasestorage.app",
  messagingSenderId: "356738305495",
  appId: "1:356738305495:web:0b58e55287d891dc738f92",
  measurementId: "G-GH4PQD7TSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);