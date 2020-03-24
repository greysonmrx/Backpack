import { all } from "redux-saga/effects";

import timetable from "./timetable/sagas";
import task from "./task/sagas";
import notebook from "./notebook/sagas";
import setting from "./setting/sagas";

export default function* rootSagaall() {
  return yield all([timetable, task, notebook, setting]);
}
