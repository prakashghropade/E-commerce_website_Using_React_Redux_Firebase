import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA27vyNm3b4UJKIeU8r6uD3mx3VmpYUsng",
  authDomain: "myecom-1e1b2.firebaseapp.com",
  projectId: "myecom-1e1b2",
  storageBucket: "myecom-1e1b2.appspot.com",
  messagingSenderId: "990129485210",
  appId: "1:990129485210:web:91e40550fc75d3b8bcb623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }