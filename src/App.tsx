/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import Navigation from "components/Navigation";
import Houses from "features/house/Houses";
import SortingHat from "features/sortingHat/SortingHat";
import { selectTheme } from "features/theme/themeSlices";
import { fontHarryP } from "styles/common";
import { floating } from "styles/keyframes";
import { Theme } from "styles/themes";

const styles = {
  App: (theme: Theme) => css`
    text-align: center;
    background-color: ${theme.colors.background};
  `,
  AppLogo: css`
    label: AppLogo;
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
};

function App() {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme}>
      <div css={styles.App}>
        <header css={styles.AppHeader}>
          {/* TODO: Divide top-fixed AppHeader with AppContent */}
          <div css={[styles.AppLogo, fontHarryP]}>
            <div>&#167;</div>
            <div>Page</div>
          </div>
          <Navigation />
          <Switch>
            <Route path="/sorting-hat">
              <SortingHat />
            </Route>
            <Route path="/houses">
              <Houses />
            </Route>
            <Route path="*">
              <Redirect to="/sorting-hat" />
            </Route>
          </Switch>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
