import { useCallback, useState, useEffect } from "react";
import { firebaseInitializeApp } from "../Services/firebaseInitializeApp";
import firebase from "firebase/app";
import "firebase/auth";

export const useFirebiseUserInfo = () => {

    const [userInfo, setUserInfo] = useState();

    const subscribeAuthChanged = useCallback(() => firebase.auth().onAuthStateChanged(setUserInfo), []);

    useEffect(() => {
        firebaseInitializeApp();
        subscribeAuthChanged();
    }, [subscribeAuthChanged])


    return userInfo;
}