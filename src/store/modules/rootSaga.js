import { all } from "redux-saga/effects";

import timetable from "./timetable/sagas";
import task from "./task/sagas";

export default function* rootSagaall() {
  return yield all([timetable, task]);
}
