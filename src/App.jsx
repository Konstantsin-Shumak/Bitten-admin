import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useFirebiseUserInfo } from "./Hooks/useFirebiseUserInfo";
import { firebaseAuthAsync } from "./Services/firebaseAuthAsync";
import { firebaseLogOut } from "./Services/firebaseLogOut";
import "./App.css";

export const App = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const currentUser = useFirebiseUserInfo();

  useEffect(() => {
    setIsLogin(!!currentUser);
    setUserName(currentUser?.displayName)
  }, [currentUser]);

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