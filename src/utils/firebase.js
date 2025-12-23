import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb-mjh9GpzKEBHCIqeOZOdSHkmJoNNK08",
  authDomain: "tenant-score-harish.firebaseapp.com",
  projectId: "tenant-score-harish",
  storageBucket: "tenant-score-harish.appspot.com", // ✅ FIXED
  messagingSenderId: "813283634486",
  appId: "1:813283634486:web:3078ec8a2206a4e24e1797",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
