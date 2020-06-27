/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Navigation from "./Navigation";

import { fontHarryP } from "styles/common";
import { floating } from "styles/keyframes";

const logoStyle = css`
  user-select: none;
  pointer-events: none;
  font-size: 5em;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${floating} infinite 3s ease-in-out;
  }
  & > div + div {
    margin-top: -24px;
  }
`;

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function AppHeader() {
  return (
    <header css={wrapperStyle}>
      <div css={[logoStyle, fontHarryP]}>
        <div>&#167;</div>
        <div>Page</div>
      </div>
      <Navigation />
    </header>
  );
}

export default AppHeader;
