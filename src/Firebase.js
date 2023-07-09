import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI_lY6cA8IKtz-mWws_yKlGu167nk_6wY",
  authDomain: "listed-demo-d478d.firebaseapp.com",
  projectId: "listed-demo-d478d",
  storageBucket: "listed-demo-d478d.appspot.com",
  messagingSenderId: "819940683288",
  appId: "1:819940683288:web:30ff8cd00e756710f51d6d",
  measurementId: "G-2FV6DRZ61H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
  
  // aditya gupta
