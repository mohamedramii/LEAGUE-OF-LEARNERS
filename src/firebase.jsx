import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVLCq7_4CNVyNiv77AK-QK6xfwBi8YkXA",

  authDomain: "webprojectauth-dd974.firebaseapp.com",

  projectId: "webprojectauth-dd974",

  storageBucket: "webprojectauth-dd974.appspot.com",

  messagingSenderId: "721338272273",

  appId: "1:721338272273:web:1c17bfeeed946482d2ffb0",

  measurementId: "G-D83XW8EPXV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth;
