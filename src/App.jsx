import { useEffect, useState } from "react";
import { firebaseInitializeApp } from "./Services/firebaseInitializeApp";
import { Home } from "./Pages/Home/Home";
import "./App.css";

export const App = () => {

  const [isInizialized, setIsInizialized] = useState(false);

  useEffect(() => {
    setIsInizialized(false);
    firebaseInitializeApp();
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