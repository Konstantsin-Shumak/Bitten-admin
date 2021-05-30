import firebase from "firebase/app";
import { firebaseConfig } from "../Config/firebaseConfig";

export const firebaseInitializeApp = () => firebase.initializeApp(firebaseConfig);