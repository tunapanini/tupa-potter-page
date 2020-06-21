import React from "react";

import withProvider from "../../.storybook/decorators/withProvider";

import SortingHat from "features/sortingHat/SortingHat";

export default {
  title: "SortingHat",
  component: SortingHat,
  decorators: [withProvider],
};

export const Default = () => <SortingHat />;
