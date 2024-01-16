// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ6O5UmEQuXfQqMWoyLLDe8mTip1-g1dc",
  authDomain: "netflix-gpt-d3690.firebaseapp.com",
  projectId: "netflix-gpt-d3690",
  storageBucket: "netflix-gpt-d3690.appspot.com",
  messagingSenderId: "107221660096",
  appId: "1:107221660096:web:cc10d62fbcc83846a25825",
  measurementId: "G-W2PV5HZ68K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
