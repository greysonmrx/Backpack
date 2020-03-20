import { takeLatest, all } from "redux-saga/effects";

import history from "../../../services/history";

export function createTask() {
  history.push("/tasks");
}

export function toggleDone() {
  history.push("/tasks");
}

export default all([
  takeLatest("@task/CREATE", createTask),
  takeLatest("@task/TOGGLE_DONE", toggleDone)
]);
