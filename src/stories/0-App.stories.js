import React from "react";

import { MemoryRouter } from "react-router-dom";

import withProvider from "../../.storybook/decorators/withProvider";

import App from "App";

export default {
  title: "App",
  component: App,
  decorators: [
    withProvider,
    (storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>,
  ],
};

export const Default = () => <App />;
