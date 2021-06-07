import { useEffect, useState, useMemo, useCallback } from "react";
import { Authorizator } from "./Services/Authorizator";
import { Home } from "./Pages/Home/Home";
import { AppStyle } from "./AppStyle";

export const App = () => {

  const [isInizialized, setIsInizialized] = useState(false);
  const authorizatorClass = useMemo(() => new Authorizator(), []);
  const logIn = useCallback(() => authorizatorClass.firebaseAuthAsync(), [authorizatorClass]);
  const logOut = useCallback(() => authorizatorClass.firebaseLogOut(), [authorizatorClass]);


  useEffect(() => {
    setIsInizialized(false);
    authorizatorClass.firebaseInitializeApp();
    setIsInizialized(true);
  }, [authorizatorClass]);

  return (
    <div className={AppStyle().wrapper}>
      {isInizialized
        ?
        <Home
          onLogIn={logIn}
          onLogOut={logOut}
        />
        :
        <p>Inizializaiont</p>}
    </div>
  );
}