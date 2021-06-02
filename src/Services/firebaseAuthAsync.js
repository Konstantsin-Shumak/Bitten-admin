import firebase from "firebase/app";
import "firebase/auth";

export const firebaseAuthAsync = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}
