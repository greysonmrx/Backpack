import { takeLatest, all } from "redux-saga/effects";

import history from "../../../services/history";

export function createTask() {
  history.push("/tasks");
}

export default all([takeLatest("@task/CREATE", createTask)]);
