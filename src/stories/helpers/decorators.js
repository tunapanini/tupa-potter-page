import React from "react";
import { Provider } from "react-redux";

import StoryRouter from "storybook-react-router";

import { createMockStore } from "./mocks";

export const withStore = (initialState) => (storyFn) => (
  <Provider store={createMockStore(initialState)}>{storyFn()}</Provider>
);
export const withRouter = (props) => StoryRouter({}, props);
