import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBQe7qGwhrL0vAFsZSroPQBLjqkayigu-w",
  authDomain: "weather-app-994ae.firebaseapp.com",
  projectId: "weather-app-994ae",
  storageBucket: "weather-app-994ae.firebasestorage.app",
  messagingSenderId: "119833653536",
  appId: "1:119833653536:web:f182d0457d6c8141c72745",
  measurementId: "G-1HJV6E12CP",
  databaseURL: "https://weather-app-994ae-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
