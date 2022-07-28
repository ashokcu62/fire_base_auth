import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyALbcIr9knbC4WA4_WASF4xszX_SPq4BD0",
  authDomain: "auth-tute-ab069.firebaseapp.com",
  projectId: "auth-tute-ab069",
  storageBucket: "auth-tute-ab069.appspot.com",
  messagingSenderId: "282923243809",
  appId: "1:282923243809:web:ff2823471854ac4cf48660"
  };

const app=initializeApp(firebaseConfig)
export const auth=getAuth(app)
