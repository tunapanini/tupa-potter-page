import { ThemeProvider } from "emotion-theming";
import React from "react";

import withProvider from "../../.storybook/decorators/withProvider";

import SortingHat from "features/sortingHat/SortingHat";
import themes from "styles/themes";

export default {
  title: "SortingHat",
  component: SortingHat,
  decorators: [
    (storyFn) => (
      <ThemeProvider theme={themes.default}>{storyFn()}</ThemeProvider>
    ),
    withProvider,
  ],
};

export const Default = () => <SortingHat />;
