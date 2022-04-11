import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
const firebaseConfig = {
  apiKey: "AIzaSyCAuuc8ykQTCWdFoSNl2HAGs87O0rYOe8Q",
  authDomain: "movieapp-7e6a5.firebaseapp.com",
  projectId: "movieapp-7e6a5",
  storageBucket: "movieapp-7e6a5.appspot.com",
  messagingSenderId: "769002371615",
  appId: "1:769002371615:web:c93bdc78f0950f26fff32a",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};
