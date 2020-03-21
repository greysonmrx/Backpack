import { takeLatest, all } from "redux-saga/effects";

export function createNotebook() {}

export default all([takeLatest("@notebook/CREATE", createNotebook)]);
