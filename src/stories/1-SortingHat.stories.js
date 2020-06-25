import { boolean, text } from "@storybook/addon-knobs";
import React from "react";

import { withStore } from "./helpers/decorators";

import SortingHat from "features/sortingHat/SortingHat";

export default {
  title: "SortingHat",
  component: SortingHat,
};

export const Default = () =>
  withStore({
    sortingHat: {
      value: text("value", "Gryffindor"),
      isLoading: boolean("isLoading", false),
    },
  })(() => <SortingHat />);
