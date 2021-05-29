import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../Config/firebaseConfig";

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.FacebookAuthProvider();

firebase
    .auth()
    .signInWithRedirect(provider)
    .then((result) => {
        var credential = result.credential;
        var user = result.user;
        var accessToken = credential.accessToken;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });