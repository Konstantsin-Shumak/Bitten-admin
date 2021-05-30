import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { firebaseInitializeApp } from "./Services/firebaseInitializeApp";
import { firebaseAuthAsync } from "./Services/firebaseAuthAsync";
import { firebaseLogOut } from "./Services/firebaseLogOut";
import "./App.css";
import { firebaseIsAuth } from "./Services/firebaseIsAuth";

export const App = () => {

  const [isLogin, setIsLogin] = useState();

  useEffect(() => firebaseInitializeApp(), []);
  useEffect(() => setIsLogin(firebaseIsAuth()), []);

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
      <button onClick={firebaseIsAuth}>чек</button>
    </div>
  );
}