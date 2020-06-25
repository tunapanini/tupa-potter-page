import { compose } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { rootEpic, rootReducer } from "./modules/root";
import { Dependencies } from "./store";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(epicDependencies: Dependencies) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: epicDependencies,
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
