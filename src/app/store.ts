import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";

import sortingHatReducer from "features/sortingHat/sortingHatSlices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sortingHat: sortingHatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
