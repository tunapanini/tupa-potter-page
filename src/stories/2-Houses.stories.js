import React from "react";

import { withRouter, withStore } from "./helpers/decorators";

import { getHousesMock } from "./helpers/mocks";

import Houses from "features/house/Houses";

export default {
  title: "Houses",
  component: Houses,
  decorators: [
    withRouter({ initialEntries: ["/houses"] }),
    withStore({
      house: {
        houses: getHousesMock(),
      },
    }),
  ],
};

export const Default = () => <Houses />;
