import { useEffect, useState } from "react";
import { Authorizator } from "./Services/Authorizator";
import { Home } from "./Pages/Home/Home";

export const App = () => {

  const [isInizialized, setIsInizialized] = useState(false);

  useEffect(() => {
    setIsInizialized(false);
    Authorizator.firebaseInitializeApp();
    setIsInizialized(true);
  }, []);

  return (
    <div className="wrapper">
      {isInizialized
        ?
        <Home />
        :
        <p>Inizializaiont</p>}
    </div>
  );
}