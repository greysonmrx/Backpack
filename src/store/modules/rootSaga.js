import { all } from "redux-saga/effects";

import timetable from "./timetable/sagas";

export default function* rootSagaall() {
  return yield all([timetable]);
}
