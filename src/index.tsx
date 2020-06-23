import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App";
import { store } from "./app/store";
import * as serviceWorker from "./serviceWorker";

import global from "styles/global";
import theme from "styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
