import { ThemeProvider } from "emotion-theming";
import React from "react";

import withProvider from "../../.storybook/decorators/withProvider";

import Houses from "features/house/Houses";
import themes from "styles/themes";

export default {
  title: "Houses",
  component: Houses,
  decorators: [
    (storyFn) => (
      <ThemeProvider theme={themes.default}>{storyFn()}</ThemeProvider>
    ),
    withProvider,
  ],
};

export const Default = () => <Houses />;
