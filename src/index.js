import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { store } from "./State/store";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);