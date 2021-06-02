import { useCallback, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { firebaseInitializeApp } from "./Services/firebaseInitializeApp";
import { firebaseAuthAsync } from "./Services/firebaseAuthAsync";
import { firebaseLogOut } from "./Services/firebaseLogOut";
import "./App.css";

import firebase from "firebase/app";
import "firebase/auth";


export const App = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const subscribeAuthChanged = useCallback(() => firebase.auth().onAuthStateChanged(user => {
    setUserName(user?.displayName);
    setIsLogin(!!user);
  }), []);

  useEffect(() => {
    firebaseInitializeApp();
    subscribeAuthChanged();
  }, [subscribeAuthChanged]);


  return (
    <div className="wrapper">
      {!isLogin
        ?
        <Button
          variant="contained"
          color="primary"
          startIcon={<FacebookIcon />}
          onClick={firebaseAuthAsync}
        >Log In</Button>
        :
        <Button
          variant="contained"
          color="default"
          startIcon={<ExitToAppIcon />}
          onClick={firebaseLogOut}
        >Log Out</Button>}
      {userName}
    </div>
  );
}