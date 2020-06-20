import React from "react";

import withProvider from "../../.storybook/decorators/withProvider";

import App from "App";

export default {
  title: "App",
  component: App,
  decorators: [withProvider],
};

export const Default = () => <App />;
