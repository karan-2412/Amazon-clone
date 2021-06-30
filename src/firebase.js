import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3s0pE_uMzWIFASZlLMimqzWzJGMZ3YWw",
  authDomain: "challenge-70b45.firebaseapp.com",
  projectId: "challenge-70b45",
  storageBucket: "challenge-70b45.appspot.com",
  messagingSenderId: "12408316755",
  appId: "1:12408316755:web:071dc462efb879114777a6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
