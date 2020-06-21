/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Counter } from "./features/counter/Counter";
import logo from "./logo.svg";

import { AppLogoFloat } from "styles/keyframes";
import { ThemeStyles } from "styles/theme";

const styles: ThemeStyles = {
  App: css`
    text-align: center;
  `,
  AppLogo: css`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${AppLogoFloat} infinite 3s ease-in-out;
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
  AppLink: css`
    color: rgb(112, 76, 182);
  `,
};

function App() {
  return (
    <div css={styles.App}>
      <header css={styles.AppHeader}>
        <img alt="logo" css={styles.AppLogo} src={logo} />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            css={styles.AppLink}
            href="https://reactjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>
          <span>, </span>
          <a
            css={styles.AppLink}
            href="https://redux.js.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Redux
          </a>
          <span>, </span>
          <a
            css={styles.AppLink}
            href="https://redux-toolkit.js.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            css={styles.AppLink}
            href="https://react-redux.js.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
