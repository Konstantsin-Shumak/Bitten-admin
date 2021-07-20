import { useEffect, useState } from "react";
import { authorizatorClass } from "./Services/Authorizator";
import { Home } from "./Pages/Home";
import { useStyles } from "./useStyles";

export const App = () => {

  const [isInizialized, setIsInizialized] = useState(false);
  const styles = useStyles();

  useEffect(() => {
    setIsInizialized(false);
    authorizatorClass.initializeApp();
    setIsInizialized(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      {isInizialized
        ?
        <Home />
        :
        <p>Inizializaion</p>}
    </div>
  );
}