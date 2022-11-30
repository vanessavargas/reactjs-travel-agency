import React from "react";
import ReactDOM from "react-dom";
import "./_assets/css/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { Store } from "./_config/store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
