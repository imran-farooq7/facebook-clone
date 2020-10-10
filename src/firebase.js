import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7ti-kVMiiDCpxiJxvkNWCvMP53LOSksA",
  authDomain: "facebook-clone-39b9d.firebaseapp.com",
  databaseURL: "https://facebook-clone-39b9d.firebaseio.com",
  projectId: "facebook-clone-39b9d",
  storageBucket: "facebook-clone-39b9d.appspot.com",
  messagingSenderId: "113619473318",
  appId: "1:113619473318:web:52778a46a7d5c95a513567",
  measurementId: "G-MJ3KEK3XPN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
