import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import mainReducers from "./reducers";
import mainSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mainSagas);

export default store;