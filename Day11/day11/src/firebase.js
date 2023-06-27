import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEt437aWuPpn6W4JvRxaZe9eoTPk5KkkY",
  authDomain: "auth-8f50e.firebaseapp.com",
  projectId: "auth-8f50e",
  storageBucket: "auth-8f50e.appspot.com",
  messagingSenderId: "462529696038",
  appId: "1:462529696038:web:91b202265911dbf2c5f1e7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
