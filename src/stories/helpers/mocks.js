import { action } from "@storybook/addon-actions";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

export function createMockStore(state) {
  const store = mockStore(state);

  store.dispatch = (actionObj) =>
    action("dispatch")(actionObj.type, actionObj.payload);

  return store;
}
