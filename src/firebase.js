import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDJVMIRPatcjVmgeMaoaaOFIobWg6qv4Qs",
  authDomain: "auth-bb3cc.firebaseapp.com",
  projectId: "auth-bb3cc",
  storageBucket: "auth-bb3cc.appspot.com",
  messagingSenderId: "304867370877",
  appId: "1:304867370877:web:f090b45143da30b7e04e14",
  measurementId: "G-4J74749575"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)
