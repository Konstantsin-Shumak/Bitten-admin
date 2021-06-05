import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../Config/firebaseConfig";

export class Authorizator {

    static firebaseInitializeApp = () => firebase.initializeApp(firebaseConfig);

    static firebaseAuthAsync = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    }

    static firebaseLogOut = () => firebase.auth().signOut();
}