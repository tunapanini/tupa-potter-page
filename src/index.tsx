import { Global } from "@emotion/core";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";
import * as serviceWorker from "./serviceWorker";

import global from "styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={global} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
