/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import logo from "./logo.svg";

import SortingHat from "features/sortingHat/SortingHat";
import { floating } from "styles/keyframes";
import { ThemeStyles } from "styles/theme";

const styles: ThemeStyles = {
  App: css`
    text-align: center;
  `,
  AppLogo: css`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${floating} infinite 3s ease-in-out;
    }
  `,
  AppHeader: css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  `,
  link: css`
    color: rgb(112, 76, 182);
  `,
  navigation: css`
    display: flex;

    & > li {
      margin: 0 12px;
      padding: 8px 0;
    }
  `,
};

function App() {
  return (
    <div css={styles.App}>
      <header css={styles.AppHeader}>
        <img alt="logo" css={styles.AppLogo} src={logo} />
        <ul css={styles.navigation}>
          <li>
            <NavLink css={styles.link} to="/counter">
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink css={styles.link} to="/sorting-hat">
              Sorting Hat
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/sorting-hat">
            <SortingHat />
          </Route>
          <Route path="*">
            <Redirect to="/counter" />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
