import React from "react";

import { Route } from "react-router-dom";

import { withRouter, withStore } from "./helpers/decorators";

import { getHousesMock } from "./helpers/mocks";

import HouseDetail from "features/house/HouseDetail";

export default {
  title: "HouseDetail",
  component: HouseDetail,
  decorators: [
    withRouter({ initialEntries: ["/houses/fake-house-id"] }),
    withStore({
      house: {
        houses: getHousesMock(),
      },
    }),
  ],
};

export const Default = () => (
  <Route path="/houses/:houseId">
    <HouseDetail />
  </Route>
);
