import firebase from "firebase/app";
import "firebase/auth";

export const firebaseAuthAsync = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            //if (result.credential) {
            //    var credential = result.credential;
            //    var token = credential.accessToken;
            //}
            //var user = result.user;
            console.log(result.user);
        }).catch((error) => {
            console.log("Errors")
            //var errorCode = error.code;
            //var errorMessage = error.message;
            //var email = error.email;
            //var credential = error.credential;
        });
}
