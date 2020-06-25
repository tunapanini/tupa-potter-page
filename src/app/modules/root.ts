import { combineReducers } from "@reduxjs/toolkit";

import { combineEpics } from "redux-observable";

import houseReducer, { setHousesEpic } from "features/house/houseSlice";
import sortingHatReducer, {
  setSortingHatEpic,
} from "features/sortingHat/sortingHatSlices";
import themeReducer from "features/theme/themeSlices";

export const rootEpic = combineEpics(setSortingHatEpic, setHousesEpic);

export const rootReducer = combineReducers({
  sortingHat: sortingHatReducer,
  theme: themeReducer,
  house: houseReducer,
});
