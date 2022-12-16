import fire from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  
  apiKey: "AIzaSyDz0OuhxDtWvT9XrxYXrY7E2XOo7UgE6Ww",
  authDomain: "drive-3d71e.firebaseapp.com",
  databaseURL: "https://drive-3d71e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "drive-3d71e",
  storageBucket: "drive-3d71e.appspot.com",
  messagingSenderId: "853529338505",
  appId: "1:853529338505:web:c0bc6c60f488f5afda5c58",
  measurementId: "G-W31M1YC0TQ"
};

const f=fire.initializeApp(firebaseConfig);

export const db=f.firestore();



// const analytics = getAnalytics(fire);
export const auth = getAuth(f);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    })
    .catch((error) => {
      console.log(error);
    });
};
export default fire;
