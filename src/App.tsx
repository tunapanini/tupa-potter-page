/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import AppHeader from "components/AppHeader";
import Houses from "features/house/Houses";
import SortingHat from "features/sortingHat/SortingHat";
import { selectTheme } from "features/theme/themeSlices";
import { Theme } from "styles/themes";

const styles = {
  App: (theme: Theme) => css`
    min-height: 100vh;
    text-align: center;
    background-color: ${theme.colors.background};
  `,
};

const contentStyle = css`
  max-width: 1024px;
  margin: 36px auto 0;
`;

function App() {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme}>
      <div css={styles.App}>
        <AppHeader />
        <main css={contentStyle}>
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
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
