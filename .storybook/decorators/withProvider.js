import React from "react";
import { Provider } from "react-redux";

import configureStore from "../../src/app/configureStore";

const store = configureStore({
  potterapi: {
    getHouses: async () => [
      {
        name: "fake-house-0",
      },
      {
        name: "fake-house-1",
      },
    ],
    getSortingHat: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return "Gryffindor";
    },
  },
});

const withProvider = (storyFn) => (
  <Provider store={store}>{storyFn()}</Provider>
);

export default withProvider;
