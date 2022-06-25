// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt1MRthB6DEnjsACnEH0O5Zhv3lcQz4CE",
  authDomain: "medicare-4fd7f.firebaseapp.com",
  projectId: "medicare-4fd7f",
  storageBucket: "medicare-4fd7f.appspot.com",
  messagingSenderId: "242409809602",
  appId: "1:242409809602:web:0901c695c2e3755a67fd5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
