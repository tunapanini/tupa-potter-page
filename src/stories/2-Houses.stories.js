import React from "react";

import { withStore } from "./helpers/decorators";

import Houses from "features/house/Houses";

export default {
  title: "Houses",
  component: Houses,
  decorators: [
    withStore({
      house: {
        houses: [
          { _id: 1, name: "fake-house-name-1" },
          { _id: 2, name: "fkae-house-name-2" },
        ],
      },
    }),
  ],
};

export const Default = () => <Houses />;
