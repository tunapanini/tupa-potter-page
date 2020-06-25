import { ThemeProvider } from "emotion-theming";
import React from "react";

import themes from "../../src/styles/themes";

const withThemeProvider = (storyFn) => (
  <ThemeProvider theme={themes.default}>{storyFn()}</ThemeProvider>
);

export default withThemeProvider;
