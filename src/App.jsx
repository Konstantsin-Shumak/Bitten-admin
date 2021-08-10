import { useEffect, useState } from "react";
import { authorizator } from "./Services/Authorizator";
import { Home } from "./Pages/Home";
import { Container } from "@material-ui/core";

export const App = () => {

  const [isInizialized, setIsInizialized] = useState(false);

  useEffect(() => {
    setIsInizialized(false);
    authorizator.initializeApp();
    setIsInizialized(true);
  }, []);

  return (
    <Container maxWidth="lg">
      {isInizialized
        ?
        <Home />
        :
        <p>Inizializaion</p>}
    </Container>
  );
}