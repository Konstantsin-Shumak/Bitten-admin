import firebase from "firebase/app";
import "firebase/auth";
import { config } from "../Config/config";

class Authorizator {

    initializeApp = () => firebase.initializeApp(config);

    authAsync = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    }

    logOut = () => firebase.auth().signOut();
}
export const authorizatorClass = new Authorizator();