import { useCallback, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const useGetCurrentUser = () => {

    const [userInfo, setUserInfo] = useState();

    const subscribeAuthChanged = useCallback(() => firebase.auth().onAuthStateChanged(setUserInfo), []);

    useEffect(() => subscribeAuthChanged(), [subscribeAuthChanged]);

    return userInfo;
}