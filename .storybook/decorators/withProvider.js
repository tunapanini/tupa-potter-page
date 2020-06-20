import React from "react";
import { Provider } from "react-redux";

import { store } from "../../src/app/store";

const withProvider = (storyFn) => (
  <Provider store={store}>{storyFn()}</Provider>
);

export default withProvider;
