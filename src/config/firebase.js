import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMYeEvyf-zzH2e8kYEsKmwlSJIG-6ktLw",
  authDomain: "pwa-firebase-test-cbf56.firebaseapp.com",
  projectId: "pwa-firebase-test-cbf56",
  storageBucket: "pwa-firebase-test-cbf56.appspot.com",
  messagingSenderId: "774370092169",
  appId: "1:774370092169:web:c4fd3345b4c9d7ca6bd258",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
