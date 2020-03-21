import { takeLatest, all } from "redux-saga/effects";

export function createNotebook() {}

export function deleteNotebook() {}

export default all([
  takeLatest("@notebook/CREATE", createNotebook),
  takeLatest("@notebook/REMOVE", deleteNotebook)
]);
