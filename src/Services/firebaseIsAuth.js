import firebase from "firebase/app";
import "firebase/auth";

export const firebaseIsAuth = () => firebase.auth().currentUser;
