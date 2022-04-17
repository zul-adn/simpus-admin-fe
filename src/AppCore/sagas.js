import { all, fork } from "redux-saga/effects";

import MainSagas from "./Sagas/index";

export default function* rootSaga() {
  yield all([fork(MainSagas)]);
}