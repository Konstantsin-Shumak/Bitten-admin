import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../Config/firebaseConfig";

class Authorizator {

    initializeApp = () => firebase.initializeApp(firebaseConfig);

    authAsync = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    }

    logOut = () => firebase.auth().signOut();
}
export const authorizator = new Authorizator();