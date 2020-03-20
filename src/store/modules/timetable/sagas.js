import { takeLatest, all } from "redux-saga/effects";

import history from "../../../services/history";

export function createLesson() {
  history.push("/");
}

export default all([takeLatest("@timetable/CREATE", createLesson)]);
