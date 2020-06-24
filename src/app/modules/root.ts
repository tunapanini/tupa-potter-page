import { combineReducers } from "@reduxjs/toolkit";

import { combineEpics } from "redux-observable";

import sortingHatReducer, {
  setSortingHatEpic,
} from "./../../features/sortingHat/sortingHatSlices";

import themeReducer from "features/theme/themeSlices";

export const rootEpic = combineEpics(setSortingHatEpic);

export const rootReducer = combineReducers({
  sortingHat: sortingHatReducer,
  theme: themeReducer,
});
