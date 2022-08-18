import firebase from "firebase/compat/app";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "facebook-app-9fdab.firebaseapp.com",
  projectId: "facebook-app-9fdab",
  storageBucket: "facebook-app-9fdab.appspot.com",
  messagingSenderId: "763755713745",
  appId: "1:763755713745:web:f31857b83f25d7828da1f0",
  measurementId: "G-SC6MCCV323",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
