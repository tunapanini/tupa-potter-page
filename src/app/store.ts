import { Action, ThunkAction } from "@reduxjs/toolkit";

import configureStore from "./configureStore";

import potterapi from "services/potterapi";

export const dependencies = { potterapi };
export const store = configureStore(dependencies);

export type Dependencies = typeof dependencies;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
