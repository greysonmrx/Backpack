import { takeLatest, all } from "redux-saga/effects";

import history from "../../../services/history";

export function createLesson() {
  history.push("/");
}

export function removeLesson() {
  history.push("/");
}

export function editLesson() {
  history.push("/");
}

export default all([
  takeLatest("@timetable/CREATE", createLesson),
  takeLatest("@timetable/REMOVE", removeLesson),
  takeLatest("@timetable/EDIT", editLesson),
]);
