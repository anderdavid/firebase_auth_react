import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import env from "react-dotenv";

export const app = firebase.initializeApp({
  projectId: window.env.PROJECT_ID,
  appId: window.env.APP_ID,
  storageBucket: window.env.STORAGE_BUCKET,
  apiKey: window.env.API_KEY,
  authDomain: window.env.AUTH_DOMAIN,
  messagingSenderId: window.env.MESSAGING_SENDER_ID,
  measurementId: window.env.MEASURENMENT_ID,
});
