import { select } from "@storybook/addon-knobs";
import React from "react";

import { withRouter, withStore } from "./helpers/decorators";

import { getHousesMock } from "./helpers/mocks";

import App from "App";

import themes from "styles/themes";

export default {
  title: "App",
  component: App,
  decorators: [withRouter({ initialEntries: ["/sorting-hats"] })],
};

export const Default = () => {
  return withStore({
    theme: {
      value: select("theme", themes, themes.default),
    },
    sortingHat: {
      value: "Gryffindor",
      isLoading: false,
    },
    house: {
      houses: getHousesMock(),
    },
  })(() => <App />);
};
