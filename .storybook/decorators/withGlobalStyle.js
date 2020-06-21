import { Global } from "@emotion/core";
import React from "react";

import global from "../../src/styles/global";

const withGlobalStyle = (storyFn) => (
  <>
    <Global styles={global} />
    {storyFn()}
  </>
);

export default withGlobalStyle;
