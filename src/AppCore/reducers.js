import { combineReducers } from "redux";

import MainReducers from "./Reducers/index";

const rootReducer = combineReducers({
  MainReducers,
});

export default rootReducer;