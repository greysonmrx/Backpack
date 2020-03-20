import { takeLatest, all } from "redux-saga/effects";

import history from "../../../services/history";

export function createTask() {
  history.push("/tasks");
}

export function toggleDone() {
  history.push("/tasks");
}

export function removeTask() {
  history.push("/tasks");
}

export function editTask() {
  history.push("/tasks");
}

export default all([
  takeLatest("@task/CREATE", createTask),
  takeLatest("@task/TOGGLE_DONE", toggleDone),
  takeLatest("@task/REMOVE", removeTask),
  takeLatest("@task/EDIT", editTask)
]);
