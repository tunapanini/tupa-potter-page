import { Action, ThunkAction, compose } from "@reduxjs/toolkit";

import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { rootEpic, rootReducer } from "./modules/root";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_햐COMPOSE__ || compose;

export const store = (function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
})();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
