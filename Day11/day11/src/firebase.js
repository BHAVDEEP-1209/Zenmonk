// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEt437aWuPpn6W4JvRxaZe9eoTPk5KkkY",
  authDomain: "auth-8f50e.firebaseapp.com",
  projectId: "auth-8f50e",
  storageBucket: "auth-8f50e.appspot.com",
  messagingSenderId: "462529696038",
  appId: "1:462529696038:web:91b202265911dbf2c5f1e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
