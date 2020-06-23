/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import SortingHat from "features/sortingHat/SortingHat";
import { fontHarryP } from "styles/common";
import { floating } from "styles/keyframes";
import { Theme } from "styles/theme";

const styles = {
  App: css`
    text-align: center;
  `,
  AppLogo: css`
    label: AppLogo;
    height: 40vmin;
    user-select: none;
    pointer-events: none;
    font-size: 5em;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${floating} infinite 3s ease-in-out;
    }
    & > div + div {
      margin-top: -24px;
    }
  `,
  AppHeader: css`
    label: AppHeader;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  `,
  link: (theme: Theme) => css`
    color: ${theme.colors.primary[0]};
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
        <div css={[styles.AppLogo, fontHarryP]}>
          <div>Potter</div>
          <div>Page</div>
        </div>
        <ul css={styles.navigation}>
          <li>
            <NavLink css={styles.link} to="/sorting-hat">
              Sorting Hat
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/sorting-hat">
            <SortingHat />
          </Route>
          <Route path="*">
            <Redirect to="/sorting-hat" />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
