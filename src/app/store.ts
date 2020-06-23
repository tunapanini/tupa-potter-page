import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import sortingHatReducer from "features/sortingHat/sortingHatSlices";

import themeReducer from "features/theme/themeSlices";

export const store = configureStore({
  reducer: {
    sortingHat: sortingHatReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
