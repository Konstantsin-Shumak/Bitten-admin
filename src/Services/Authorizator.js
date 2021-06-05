import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../Config/firebaseConfig";

export class Authorizator {

    firebaseInitializeApp = () => firebase.initializeApp(firebaseConfig);

    firebaseAuthAsync = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    }

    firebaseLogOut = () => firebase.auth().signOut();
}