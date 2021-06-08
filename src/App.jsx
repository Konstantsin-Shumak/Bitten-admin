import { useEffect, useState, useMemo } from "react";
import { Authorizator } from "./Services/Authorizator";
import { Home } from "./Pages/Home/Home";
import { AppStyle } from "./AppStyle";

export const App = () => {

  const [isInizialized, setIsInizialized] = useState(false);
  const authorizatorClass = useMemo(() => new Authorizator(), []);

  useEffect(() => {
    setIsInizialized(false);
    authorizatorClass.firebaseInitializeApp();
    setIsInizialized(true);
  }, [authorizatorClass]);

  return (
    <div className={AppStyle().wrapper}>
      {isInizialized
        ?
        <Home />
        :
        <p>Inizializaiont</p>}
    </div>
  );
}