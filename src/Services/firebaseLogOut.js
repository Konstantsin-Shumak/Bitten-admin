import firebase from "firebase/app";

export const firebaseLogOut = () => firebase.auth().signOut();
