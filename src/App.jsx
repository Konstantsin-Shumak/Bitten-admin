import { useEffect, useState } from "react";
import { Authorizator } from "./Services/Authorizator";
import { Home } from "./Pages/Home/Home";
import { AppStyle } from "./AppStyle";

export const App = () => {

  const [isInizialized, setIsInizialized] = useState(false);

  useEffect(() => {
    setIsInizialized(false);
    const authorizatorClass = new Authorizator();
    authorizatorClass.firebaseInitializeApp();
    setIsInizialized(true);
  }, []);

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